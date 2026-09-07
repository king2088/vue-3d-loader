<template>
  <div ref="containerElement" class="viewer-container">
    <canvas ref="canvasElement" class="viewer-canvas" />
  </div>
</template>
<script setup lang="ts">
import {
  Object3D,
  Vector2,
  Vector3,
  Color,
  Scene,
  Box3,
  Raycaster,
  WebGLRenderer,
  PerspectiveCamera,
  AmbientLight,
  PointLight,
  HemisphereLight,
  DirectionalLight,
  SRGBColorSpace,
  LinearSRGBColorSpace,
  Texture,
  TextureLoader,
  AnimationMixer,
  Clock,
  Sprite,
  SpriteMaterial,
  WebGLRendererParameters,
  AnimationClip,
  Light,
  AxesHelper,
  GridHelper,
  Group,
  type Material,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { getCenter, getLoader, getMTLLoader } from "./loadModel";
import {
  onMounted,
  ref,
  nextTick,
  watch,
  onBeforeUnmount,
} from "vue";

defineOptions({ name: "vue3dLoader" });

export interface coordinates {
  x: number;
  y: number;
  z: number;
}

export interface controlsValue {
  min: number;
  max: number;
}

type plyMaterial = 'MeshBasicMaterial' | 'MeshStandardMaterial';
type encode = "linear" | "sRGB";
interface Props {
  filePath: string | string[];
  // file type is the 3d model(s) file extension, is used for filePath(remote url) without file name extensions
  fileType?: string | string[];
  width?: number;
  height?: number;
  position?: coordinates | coordinates[];
  rotation?: coordinates | coordinates[];
  scale?: coordinates | coordinates[];
  lights?: object[];
  cameraPosition?: coordinates;
  cameraRotation?: coordinates;
  cameraUp?: coordinates;
  cameraLookAt?: coordinates;
  backgroundColor?: number | string;
  backgroundAlpha?: number;
  controlsOptions?: object;
  crossOrigin?: string;
  requestHeader?: object;
  outputEncoding?: encode;
  webGLRendererOptions?: object;
  mtlPath?: string | string[];
  showFps?: boolean;
  textureImage?: string | string[];
  clearScene?: boolean;
  parallelLoad?: boolean;
  labels?: object[];
  autoPlay?: boolean;
  enableDraco?: boolean;
  dracoDir?: string;
  intersectRecursive?: boolean;
  enableDamping?: boolean;
  dampingFactor?: number;
  verticalCtrl?: boolean | controlsValue;
  horizontalCtrl?: boolean | controlsValue;
  plyMaterial?: plyMaterial;
  enableAxesHelper?: boolean;
  axesHelperSize?: number;
  enableGridHelper?: boolean;
  minDistance?: number;
  maxDistance?: number;
  pointLightFollowCamera?: boolean;
  enableShadowMap?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  // Physical lights (three r165+): ambient/directional intensities are multipliers, not one-to-one legacy units.
  lights: () => {
    return [
      {
        type: "AmbientLight",
        color: 0xaaaaaa,
        intensity: 2,
      },
      {
        type: "DirectionalLight",
        position: { x: 1, y: 1, z: 1 },
        color: 0xffffff,
        intensity: 3,
      },
    ];
  },
  cameraPosition: () => {
    return { x: 0, y: 0, z: 0 };
  },
  backgroundColor: () => {
    return 0xffffff;
  },
  backgroundAlpha: () => {
    return 1;
  },
  crossOrigin: "anonymous",
  outputEncoding: () => {
    return "sRGB";
  },
  webGLRendererOptions: () => {
    return {};
  },
  mtlPath: "",
  showFps: false,
  textureImage: "",
  clearScene: false,
  parallelLoad: false,
  labels: () => {
    return [];
  },
  autoPlay: true,
  enableDraco: false,
  intersectRecursive: false,
  verticalCtrl: false,
  horizontalCtrl: false,
  plyMaterial: 'MeshStandardMaterial',
  enableAxesHelper: false,
  axesHelperSize: 100,
  enableGridHelper: false,
  minDistance: 0,
  maxDistance: Infinity,
  enableShadowMap: false,
});

// Non responsive variable
let object: any = null;
const raycaster = new Raycaster();
const mouse = new Vector2();
const camera = new PerspectiveCamera(45, 1, 0.1, 100000);
const clock = new Clock();
let scene: Scene = new Scene();
let renderer: WebGLRenderer = null as any;
let controls: OrbitControls = null as any;
let allLights: Light[] = [];
let loader: any = null;
let animationId: number = 0;
let stats: any = null;
let mixers: AnimationMixer | AnimationMixer[] = null as any;
let textureLoader: any = null;
let axesHelper: AxesHelper = null as any;
let gridHelper: GridHelper = null as any;
let resizeRaf: number = 0;
let destroyed = false;
// mousemove raycast throttle: coalesce to one pick per animation frame
let lastMoveEvent: MouseEvent | null = null;
let moveRafId = 0;
// guards deep watch on filePath/fileType/mtlPath against in-place mutations
let lastModelLoadKey = "";

// reuse temporary objects to reduce GC pressure
const _lookAtTarget = new Vector3();
const _clearColor = new Color();
const _sizeVec = new Vector3();

// responsive variable
const size = ref({ width: props.width || 0, height: props.height || 0 });
const loaderIndex = ref(0);
const objectPositionHasSet = ref(false);
const isMultipleModels = ref(false);
const containerElement = ref(null);
const canvasElement = ref(null);

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  destroyScene();
});

watch([() => props.autoPlay], () => {
  playAnimations();
  invalidate();
});

watch([() => props.width, () => props.height], () => {
  size.value = {
    width: props.width || 0,
    height: props.height || 0,
  };
});

watch([
  () => props.enableAxesHelper,
  () => props.axesHelperSize,
  () => props.enableGridHelper
], () => {
  setAxesAndGridHelper();
  invalidate();
});

watch([() => props.minDistance, () => props.maxDistance], () => {
  setVerticalHorizontalControls();
  invalidate();
});

// deep watch
watch(
  [
    () => props.filePath,
    () => props.fileType,
    () => props.mtlPath,
    () => props.clearScene,
    () => props.backgroundAlpha,
    () => props.backgroundColor,
  ],
  (valueArray) => {
    // deep-watch fires on in-place mutations too; skip reload when the
    // source key is unchanged (e.g. reusing the same array reference)
    const sourceKey = JSON.stringify([
      props.filePath,
      props.fileType,
      props.mtlPath,
    ]);
    if (sourceKey !== lastModelLoadKey) {
      lastModelLoadKey = sourceKey;
      if (valueArray[0] || valueArray[1]) {
        resetScene();
      }
      if (valueArray[2]) {
        loadModelSelect();
      }
    }
    if (valueArray[3]) {
      clearScene();
    }
    if (valueArray[4] || valueArray[5]) {
      updateRenderer();
    }
  },
  { deep: true }
);
watch(
  [
    () => props.rotation,
    () => props.position,
    () => props.scale,
    () => props.lights,
  ],
  (valueArray) => {
    const attr = ["rotation", "position", "scale"];
    valueArray.forEach((item, index) => {
      if (index < 3 && item) {
        setObjectAttribute(attr[index], item);
        invalidate();
      } else {
        updateLights();
      }
    });
  },
  { deep: true }
);

watch(
  [() => size],
  () => {
    updateCamera(true);
    updateRenderer();
    invalidate();
  },
  { deep: true }
);

watch(
  [() => props.controlsOptions],
  () => {
    updateControls();
    invalidate();
  },
  { deep: true }
);

watch(
  [() => props.cameraRotation, () => props.cameraPosition],
  () => {
    updateCamera();
    invalidate();
  },
  { deep: true }
);

watch(
  [() => props.labels],
  () => {
    setSpriteLabel();
    invalidate();
  },
  { deep: true }
);

// emit
const emit = defineEmits([
  "mousedown",
  "mousemove",
  "mouseup",
  "click",
  "dblclick",
  "load",
  "process",
  "error",
]);

// ---------- render loop (continuous; same as the original pre-optimization behavior) ----------

function invalidate() {
  // no-op: the continuous render loop always redraws
}

function animate() {
  animationId = requestAnimationFrame(animate);
  if (props.showFps && stats) stats.update();
  const delta = clock.getDelta();
  // update play animations
  if (mixers && mixers instanceof AnimationMixer) {
    mixers.update(delta);
  }
  if (mixers && mixers instanceof Array) {
    mixers.forEach((m: any) => {
      m.update(delta);
    });
  }
  if (controls) {
    controls.update();
  }
  render();
}

function render() {
  if (!renderer) return;
  if (size.value.width === 0 || size.value.height === 0) return;
  const { pointLightFollowCamera } = props;
  if (pointLightFollowCamera) {
    takePointLightFollowCamera();
  }
  renderer.render(scene, camera);
}

// ---------- lifecycle ----------

// Dynamic reload filePath
function resetScene() {
  destroyScene();
  init();
}

function destroyScene() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = 0;
  }
  destroyed = true;
  if (moveRafId) {
    cancelAnimationFrame(moveRafId);
    moveRafId = 0;
    lastMoveEvent = null;
  }
  if (renderer) {
    renderer.dispose();
  }
  if (controls) {
    controls.dispose();
    controls = null as any;
  }
  stopMixers();
  const el = containerElement.value as HTMLElement | null;
  el?.removeEventListener("mousedown", onMouseDown, false);
  el?.removeEventListener("mousemove", onMouseMove, false);
  el?.removeEventListener("mouseup", onMouseUp, false);
  el?.removeEventListener("click", onClick, false);
  el?.removeEventListener("dblclick", onDblclick, false);
  if (resizeRaf) {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = 0;
  }
  window.removeEventListener("resize", onResize, false);

  // dispose GPU resources (geometry / material / texture) to avoid leaks
  if (scene) {
    scene.traverse((child) => disposeObject3D(child));
    scene.clear();
  }
  // stats panel has no dispose() API; drop its DOM node
  if (stats) {
    if (stats.dom && stats.dom.parentNode) {
      stats.dom.parentNode.removeChild(stats.dom);
    }
    stats = null;
  }
  object = null;
  loader = null;
  textureLoader = null;
  objectPositionHasSet.value = false;
  loaderIndex.value = 0;
}

function stopMixers() {
  if (mixers) {
    const list = Array.isArray(mixers) ? mixers : [mixers];
    list.forEach((m) => {
      if (m) m.stopAllAction();
    });
  }
  mixers = null as any;
}

function disposeObject3D(obj: Object3D) {
  const mesh = obj as any;
  if (mesh.geometry) {
    mesh.geometry.dispose();
  }
  const material = mesh.material as Material | Material[] | undefined;
  if (material) {
    const materials = Array.isArray(material) ? material : [material];
    materials.forEach((m) => {
      if (!m) return;
      for (const key in m) {
        const value = (m as any)[key];
        if (value && value.isTexture) {
          value.dispose();
        }
      }
      m.dispose();
    });
  }
}

function init() {
  destroyed = false;
  // avoid the deep filePath watcher resetting the scene just because it fires
  // once with an unchanged model source after mount
  lastModelLoadKey = JSON.stringify([props.filePath, props.fileType, props.mtlPath]);
  const {
    filePath,
    outputEncoding,
    webGLRendererOptions,
    showFps,
    enableDamping,
    dampingFactor,
    labels,
    enableShadowMap,
  } = props;
  if (filePath && typeof filePath === "object") {
    isMultipleModels.value = true;
  }
  const el: any = containerElement.value;
  setContainerElementStyle(el);
  // init canvas width and height
  onResize();
  const WEB_GL_OPTIONS = { antialias: true, alpha: true };
  const options: WebGLRendererParameters = Object.assign(
    {},
    WEB_GL_OPTIONS,
    webGLRendererOptions,
    {
      canvas: canvasElement.value as any,
    }
  );
  if (!renderer) {
    renderer = new WebGLRenderer(options);
    // Shadow maps are expensive: only enable explicitly
    renderer.shadowMap.enabled = enableShadowMap;
    const colorSpace =
      outputEncoding === "linear" ? LinearSRGBColorSpace : SRGBColorSpace;
    renderer.outputColorSpace = colorSpace;
  }

  if (!controls) {
    controls = new OrbitControls(camera, el);
    if (enableDamping) {
      controls.enableDamping = true;
      if (dampingFactor != undefined) {
        controls.dampingFactor = dampingFactor;
      }
    }
  }
  setVerticalHorizontalControls();
  setAxesAndGridHelper();
  loadModelSelect();
  update();
  // enable mouse move
  enableMousemoveEvent(true);
  el.addEventListener("mousedown", onMouseDown, false);
  el.addEventListener("mouseup", onMouseUp, false);
  el.addEventListener("click", onClick, false);
  el.addEventListener("dblclick", onDblclick, false);
  window.addEventListener("resize", onResize, false);
  // stats
  if (showFps) {
    stats = new Stats();
    el.appendChild(stats.dom);
  }
  animate();
  // Init labels
  if (labels && labels.length > 0) {
    setSpriteLabel();
  }
}

function setContainerElementStyle(el: any) {
  const { width, height } = props;
  if (width) {
    el.style.width = `${width}px`;
  }
  if (height) {
    el.style.height = `${height}px`;
  }
}

// ---------- events ----------

// mouse move event listener
function enableMousemoveEvent(enable: boolean) {
  const el: any = containerElement.value;
  if (enable) {
    el.addEventListener("mousemove", onMouseMove, false);
  } else {
    el.removeEventListener("mousemove", onMouseMove, false);
  }
}

function onResize() {
  const { width, height } = props;
  if (width && height) {
    size.value = { width, height };
    return;
  }
  if (resizeRaf) cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(() => {
    resizeRaf = 0;
    const el = containerElement.value as HTMLElement | null;
    if (!el) return;
    const w = width || el.offsetWidth;
    const h = height || el.offsetHeight;
    if (w !== size.value.width || h !== size.value.height) {
      size.value = { width: w, height: h };
    }
  });
}

function onMouseDown(event: MouseEvent) {
  enableMousemoveEvent(false);
  const intersected = pick(event.clientX, event.clientY);
  emit("mousedown", event, intersected);
}

function onMouseMove(event: MouseEvent) {
  // coalesce raycast+emit to at most one per animation frame
  lastMoveEvent = event;
  if (moveRafId) return;
  moveRafId = requestAnimationFrame(() => {
    moveRafId = 0;
    const ev = lastMoveEvent;
    lastMoveEvent = null;
    if (!ev) return;
    const intersected = pick(ev.clientX, ev.clientY);
    emit("mousemove", ev, intersected);
    invalidate();
  });
}

function onMouseUp(event: MouseEvent) {
  const intersected = pick(event.clientX, event.clientY);
  emit("mouseup", event, intersected);
  enableMousemoveEvent(true);
  invalidate();
}

function onClick(event: MouseEvent) {
  const intersected = pick(event.clientX, event.clientY);
  emit("click", event, intersected);
  invalidate();
}

function onDblclick(event: MouseEvent) {
  const intersected = pick(event.clientX, event.clientY);
  emit("dblclick", event, intersected);
  invalidate();
}

function pick(x: number, y: number) {
  const obj = getAllObject();
  if (!obj || !containerElement.value) return null;
  const rect = (containerElement.value as HTMLElement).getBoundingClientRect();
  x -= rect.left;
  y -= rect.top;
  mouse.x = (x / size.value.width) * 2 - 1;
  mouse.y = -(y / size.value.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(obj, props.intersectRecursive);
  return (intersects && intersects.length) > 0 ? intersects[0] : null;
}

// ---------- update ----------

function update() {
  updateRenderer();
  updateCamera();
  updateLights();
  updateControls();
}

function updateModel() {
  if (!object) return;
  const index = isMultipleModels.value ? getObjectIndex(object) : null;
  const { position, rotation, scale } = props;
  if (position) {
    position instanceof Array
      ? index != null
        ? object.position.set(
            position[index].x,
            position[index].y,
            position[index].z
          )
        : object.position.set(0, 0, 0)
      : object.position.set(position.x, position.y, position.z);
  }
  if (rotation) {
    rotation instanceof Array
      ? index != null
        ? object.rotation.set(
            rotation[index].x,
            rotation[index].y,
            rotation[index].z
          )
        : object.rotation.set(0, 0, 0)
      : object.rotation.set(rotation.x, rotation.y, rotation.z);
  }
  if (scale) {
    scale instanceof Array
      ? index != null
        ? object.scale.set(scale[index].x, scale[index].y, scale[index].z)
        : object.scale.set(1, 1, 1)
      : object.scale.set(scale.x, scale.y, scale.z);
  }
}

function updateRenderer() {
  const { backgroundColor, backgroundAlpha } = props;
  renderer.setSize(size.value.width, size.value.height);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  _clearColor.set(backgroundColor as any);
  renderer.setClearColor(_clearColor, backgroundAlpha as number);
}

function updateCamera(isResize?: boolean) {
  const { cameraPosition, cameraRotation, cameraUp, cameraLookAt } = props;
  camera.aspect = size.value.width / size.value.height;
  camera.updateProjectionMatrix();
  if (isResize) return;

  if (!cameraLookAt || !cameraUp) {
    if (!object) return;
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    if (cameraRotation) {
      camera.rotation.set(cameraRotation.x, cameraRotation.y, cameraRotation.z);
    }
    if (
      cameraPosition.x === 0 &&
      cameraPosition.y === 0 &&
      cameraPosition.z === 0
    ) {
      // camera not explicitly positioned: frame the whole scene on first load
      autoFit();
    } else {
      _lookAtTarget.set(0, 0, 0);
      camera.lookAt(_lookAtTarget);
    }
  } else {
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    if (cameraRotation) {
      camera.rotation.set(cameraRotation.x, cameraRotation.y, cameraRotation.z);
    }
    camera.up.set(cameraUp.x, cameraUp.y, cameraUp.z);
    _lookAtTarget.set(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z);
    camera.lookAt(_lookAtTarget);
  }
}

// Frame the loaded models so everything fits inside the canvas. Only used when
// the user did not explicitly set a camera position (all-zero cameraPosition).
function autoFit() {
  const bounds = new Box3();
  let hasContent = false;
  scene.children.forEach((child) => {
    if (child === axesHelper || child === gridHelper) return;
    if (child instanceof Light) return;
    const childBox = new Box3().setFromObject(child);
    if (childBox.isEmpty()) return;
    bounds.union(childBox);
    hasContent = true;
  });
  if (!hasContent) {
    // no model child found (e.g. still loading): fall back to the last model
    bounds.setFromObject(object);
  }
  const center = bounds.getCenter(new Vector3());
  const radius = bounds.getSize(_sizeVec).length() / 2;
  if (radius === 0) return;
  const fov = (camera.fov * Math.PI) / 180;
  const halfFov = Math.tan(fov / 2);
  const fitVertical = radius / Math.max(halfFov, 1e-6);
  const fitHorizontal = fitVertical / Math.max(camera.aspect || 1, 1e-6);
  // +15% margin so nothing touches the canvas border
  const distance = Math.max(fitVertical, fitHorizontal) * 1.15;
  camera.position.set(0, 0, distance);
  _lookAtTarget.copy(center);
  camera.lookAt(_lookAtTarget);
  if (controls) controls.target.copy(center);
}

function updateLights() {
  const { lights } = props;
  scene.remove(...allLights);
  allLights.forEach((light) => disposeObject3D(light));
  allLights = [];
  lights.forEach((item: any) => {
    if (!item.type) return;
    const type = item.type.toLowerCase();
    let light: any = null;
    if (type === "ambient" || type === "ambientlight") {
      const color =
        item.color === 0x000000 ? item.color : item.color || 0x404040;
      const intensity =
        item.intensity === 0 ? item.intensity : item.intensity || 2;
      light = new AmbientLight(color, intensity);
    }
    if (type === "point" || type === "pointlight") {
      const color =
        item.color === 0x000000 ? item.color : item.color || 0xffffff;
      const intensity =
        item.intensity === 0 ? item.intensity : item.intensity || 1;
      const distance = item.distance || 0;
      const decay = item.decay === 0 ? item.decay : item.decay || 2;
      light = new PointLight(color, intensity, distance, decay);
      if (item.position) {
        light.position.copy(item.position);
      }
    }
    if (type === "directional" || type === "directionallight") {
      const color =
        item.color === 0x000000 ? item.color : item.color || 0xffffff;
      const intensity =
        item.intensity === 0 ? item.intensity : item.intensity || 3;

      light = new DirectionalLight(color, intensity);

      if (item.position) {
        light.position.copy(item.position);
      }

      if (item.target) {
        light.target.copy(item.target);
      }
    }
    if (type === "hemisphere" || type === "hemispherelight") {
      const skyColor =
        item.skyColor === 0x000000 ? item.skyColor : item.skyColor || 0xffffff;
      const groundColor =
        item.groundColor === 0x000000
          ? item.groundColor
          : item.groundColor || 0xffffff;
      const intensity =
        item.intensity === 0 ? item.intensity : item.intensity || 1;

      light = new HemisphereLight(skyColor, groundColor, intensity);

      if (item.position) {
        light.position.copy(item.position);
      }
    }
    if (light) {
      allLights.push(light);
      scene.add(light);
    }
  });
  invalidate();
}

function updateControls() {
  const { controlsOptions } = props;
  if (controlsOptions) {
    Object.assign(controls, controlsOptions);
  }
}

// ---------- load model ----------

function loadModelSelect() {
  const { filePath, parallelLoad } = props;
  // If enable parallel load
  if (parallelLoad && isMultipleModels.value) {
    (filePath as string[]).forEach((_path, index) => {
      load(index);
    });
  } else {
    load();
  }
}

async function load(fileIndex?: number) {
  const {
    filePath,
    fileType,
    crossOrigin,
    requestHeader,
    mtlPath,
    enableDraco,
    dracoDir,
    plyMaterial
  } = props;
  if (!filePath || destroyed) return;
  const index = fileIndex ?? loaderIndex.value;
  // if multiple files
  const filePathString: string = !isMultipleModels.value
    ? (filePath as string)
    : (filePath as string[])[index];
  const fileTypeString: string =
    typeof fileType === "string" ? fileType : fileType ? fileType[index] : "";
  const loaderObject3d: any = await getLoader(
    filePathString,
    fileTypeString,
    enableDraco,
    plyMaterial,
    dracoDir
  ).catch((error) => {
    emit("error", error);
    return null;
  });
  if (!loaderObject3d) return;
  loader = loaderObject3d.loader;
  const getObjectFun = loaderObject3d.getObject
    ? loaderObject3d.getObject
    : getObject;
  if (object && index === 0) {
    scene.remove(object);
  }
  if (requestHeader) {
    try {
      loader.setRequestHeader(requestHeader);
    } catch (e) {
      /* unsupported by this loader */
    }
  }
  if (crossOrigin) {
    const lo = loader as any;
    if (typeof lo.setCrossOrigin === "function") {
      lo.setCrossOrigin(crossOrigin);
    } else if (lo.crossOrigin !== undefined) {
      lo.crossOrigin = crossOrigin;
    }
  }
  if (mtlPath) {
    // load materials
    const isMultipleMTL = typeof mtlPath === "object";
    if (!isMultipleMTL) {
      // single material
      loadMtl(filePathString, getObjectFun, index);
    } else {
      // load materials and model
      if (!mtlPath[index]) {
        loadFilePath(filePathString, getObjectFun, index);
        return;
      }
      loadMtl(filePathString, getObjectFun, index);
    }
  } else {
    // don't load materials
    loadFilePath(filePathString, getObjectFun, index);
  }
}

function loadFilePath(filePath: string, getObject: any, index: number) {
  const { textureImage, parallelLoad, crossOrigin } = props;
  loader.load(
    filePath,
    (...args: any) => {
      if (destroyed) return;
      const obj = getObject(...args);
      object = obj;
      addObject(object, filePath);
      // set texture
      if (textureImage) {
        const _texture =
          typeof textureImage === "string" ? textureImage : textureImage[index];
        if (_texture) {
          addTexture(object, _texture);
        }
      }
      emit("load", scene);
    },
    (event: ProgressEvent) => {
      if (!parallelLoad) {
        onProcess(event);
      }
      const modelIndex = loaderIndex.value + 1;
      emit("process", event, modelIndex);
    },
    (error: ErrorEvent) => {
      emit("error", error);
    }
  );
}

async function loadMtl(filePath: string, getObject: any, index: number) {
  const { crossOrigin, requestHeader, mtlPath } = props;
  const mtlLoader: any = await getMTLLoader();
  if (crossOrigin) {
    if (typeof mtlLoader.setCrossOrigin === "function") {
      mtlLoader.setCrossOrigin(crossOrigin);
    }
  }
  if (requestHeader) {
    mtlLoader.setRequestHeader(requestHeader as any);
  }
  const mtl = typeof mtlPath === "string" ? mtlPath : mtlPath[index];
  const mtlPathArray: any = /^(.*\/)([^/]*)$/.exec(mtl);
  const path = mtlPathArray[1];
  const file = mtlPathArray[2];
  mtlLoader.setPath(path).load(file, (materials: any) => {
    materials.preload();
    loader.setMaterials(materials);
    loadFilePath(filePath, getObject, index);
  });
}

function getObject(object: any) {
  return object;
}

function addObject(obj: Object3D, filePath: string) {
  const center = getCenter(obj);
  // Multiple models set object position only once, prevent the position from changing every time multiple models objects is loaded
  if (!objectPositionHasSet.value) {
    scene.position.copy(center.negate());
    objectPositionHasSet.value = true;
  }
  object = obj;
  // add the file name to object
  let fileName: any = filePath.split("/");
  fileName = fileName[fileName.length - 1];
  object.fileName = fileName;
  scene.add(object);
  updateCamera();
  updateModel();
  playAnimations();
  invalidate();
}

function onProcess(xhr: ProgressEvent) {
  const { filePath } = props;
  let process = Math.floor((xhr.loaded / xhr.total) * 100);
  if (process === 100) {
    if (isMultipleModels.value && (filePath as string[]).length > loaderIndex.value) {
      // Load completed
      nextTick(() => {
        loaderIndex.value++;
        if (loaderIndex.value === (filePath as string[]).length) {
          loaderIndex.value = 0;
          return;
        }
        load();
      });
    } else {
      loaderIndex.value = 0;
    }
  }
}

function addTexture(object: Object3D, texture: any) {
  if (!textureLoader) {
    textureLoader = new TextureLoader();
    if (props.crossOrigin) {
      textureLoader.crossOrigin = props.crossOrigin;
    }
  }
  object.traverse((child: any) => {
    if (child.isMesh) {
      textureLoader.load(
        texture,
        (_texture: any) => {
          child.material.map = _texture;
          child.material.needsUpdate = true;
        },
        () => {},
        (err: any) => {
          emit("error", err);
        }
      );
    }
  });
  invalidate();
}

function clearScene() {
  stopMixers();
  if (scene) {
    scene.traverse((child) => disposeObject3D(child));
    scene.clear();
    allLights = [];
    object = null;
  }
  invalidate();
}

function setObjectAttribute(type: string, val: any) {
  const obj = getAllObject();
  if (!obj) return;
  if (isMultipleModels.value) {
    obj.children.forEach((item: any) => {
      const index = getObjectIndex(item);
      const v = type === "scale" ? 1 : 0;
      val[index]
        ? item[type].set(val[index].x, val[index].y, val[index].z)
        : item[type].set(v, v, v);
    });
    return;
  }
  obj[type].set(val.x, val.y, val.z);
}

function getAllObject() {
  return isMultipleModels.value ? scene : object;
}

// ---------- labels ----------

function setSpriteLabel() {
  const { labels } = props;
  if (!labels || labels.length <= 0) return;
  clearSprite();
  const obj = isMultipleModels.value ? scene : object;
  if (!obj) return;
  const spriteImageLabel = (image: any) => {
    if (!textureLoader) {
      textureLoader = new TextureLoader();
      if (props.crossOrigin) {
        textureLoader.crossOrigin = props.crossOrigin;
      }
    }
    const imageTexture = textureLoader.load(image);
    return imageTexture;
  };

  const spriteTextLabel = (text: string, style: object) => {
    const canvas = generateCanvas(text, style);
    const texture = new Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  labels.forEach((item: any) => {
    const spriteMap = item.image
      ? spriteImageLabel(item.image)
      : spriteTextLabel(item.text, item.textStyle || {});
    const spriteMaterial = new SpriteMaterial({
      map: spriteMap,
      color: item.spriteMaterialColor || 0xffffff,
    });
    const sprite: any = new Sprite(spriteMaterial);
    if (item.scale) {
      sprite.scale.set(item.scale.x || 1, item.scale.y || 1, item.scale.z || 0);
    } else {
      sprite.scale.set(1, 1, 0);
    }
    if (item.position) {
      sprite.position.set(item.position.x, item.position.y, item.position.z);
    }
    if (item.sid) {
      sprite.sid = item.sid;
    }
    obj.add(sprite);
  });
  invalidate();
}

function clearSprite() {
  const sceneChildren = scene.children;
  for (let i = sceneChildren.length - 1; i >= 0; i--) {
    const item = sceneChildren[i];
    if (item) {
      // If have only one model the Sprite in Group
      if (item instanceof Group && item.children) {
        scene.children[i].children = item.children.map((_item: any) => {
          if (_item instanceof Sprite) {
            disposeObject3D(_item);
            return null;
          }
          return _item;
        }).filter((i2: any) => i2);
      }
      // If have multiple models the Sprite in children
      if (item instanceof Sprite) {
        disposeObject3D(item);
        scene.remove(item)
      }
    }
  }
}

function generateCanvas(text: string, style: any) {
  const roundRect = (
    ctx: any,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };
  const fontFamily = style.fontFamily || "Arial";
  const fontSize = style.fontSize === 0 || style.fontSize ? style.fontSize : 18;
  const fontColor = style.color || "#ffffff";
  const fontWeight = style.fontWeight || "normal";
  const borderWidth =
    style.borderWidth === 0 || style.borderWidth ? style.borderWidth : 4;
  const borderColor = style.borderColor || "rgba(0,0,0,1)";
  const borderRadius =
    style.borderRadius === 0 || style.borderRadius ? style.borderRadius : 4;
  const backgroundColor = style.backgroundColor || "rgba(255, 255, 255, 1)";
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (context) {
    context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    // get size data (height depends only on font size)
    const metrics = context.measureText(text);
    const textWidth = metrics.width;
    // background color
    context.fillStyle = backgroundColor;
    // border color
    context.strokeStyle = borderColor;
    context.lineWidth = borderWidth;
    roundRect(
      context,
      borderWidth / 2,
      borderWidth / 2,
      textWidth + borderWidth,
      fontSize * 1.4 + borderWidth,
      borderRadius
    );
    // text color
    context.fillStyle = fontColor;
    context.fillText(text, borderWidth, fontSize + borderWidth);
  }
  return canvas;
}

// Get object index
function getObjectIndex(object: any) {
  const { filePath } = props;
  let objIndex: any;
  if (filePath instanceof Array) {
    objIndex = filePath
      .map((item, index) => {
        if (item.indexOf(object.fileName) > -1) {
          return index;
        }
      })
      .filter((i) => i != undefined)[0];
  }
  return objIndex;
}

// ---------- animations ----------

function playAnimations() {
  const { autoPlay } = props;
  const obj = getAllObject();
  if (!obj) return;
  if (isMultipleModels.value) {
    playMultipleModels(obj);
    return;
  }
  playSingleModel(obj);
}

// play a single model animation
function playSingleModel(item: Object3D) {
  const { autoPlay } = props;
  mixers = new AnimationMixer(item);
  if (item.animations && item.animations.length > 0) {
    item.animations.forEach((clip: AnimationClip) => {
      if (clip) {
        const action = (mixers as AnimationMixer).clipAction(clip);
        if (autoPlay) {
          action.play();
        } else {
          action.stop();
        }
      }
    });
  }
}

// play multiple models animation
function playMultipleModels(obj: Object3D) {
  const { autoPlay } = props;
  mixers = [];
  obj.children.forEach((item: any, index: number) => {
    (mixers as AnimationMixer[]).push(new AnimationMixer(item));
    const hasClips = !!(item.animations && item.animations.length > 0);
    if (hasClips) {
      item.animations.forEach((clip: AnimationClip) => {
        if (clip) {
          const action = (mixers as AnimationMixer[])[index].clipAction(clip);
          if (autoPlay) {
            action.play();
          } else {
            action.stop();
          }
        }
      });
    }
  });
}

// ---------- controls & helpers ----------

// set vertical horizontal controls
function setVerticalHorizontalControls() {
  if (!controls) {
    return;
  }
  const { verticalCtrl, horizontalCtrl, minDistance, maxDistance } = props;
  // set vertical
  if (verticalCtrl && typeof verticalCtrl === "boolean") {
    controls.minAzimuthAngle = -2 * Math.PI;
    controls.maxAzimuthAngle = -2 * Math.PI;
  }
  if (verticalCtrl && typeof verticalCtrl === "object") {
    // min/max azimuth angle value range [-2 * Math.PI�? * Math.PI]
    controls.minAzimuthAngle = verticalCtrl.min;
    controls.maxAzimuthAngle = verticalCtrl.max;
  }
  // set horizontal
  if (horizontalCtrl && typeof horizontalCtrl === "boolean") {
    controls.minPolarAngle = 1;
    controls.maxPolarAngle = 1;
  }
  if (horizontalCtrl && typeof horizontalCtrl === "object") {
    // min/max azimuth angle value range [0，Math.PI]
    controls.minPolarAngle = horizontalCtrl.min;
    controls.maxPolarAngle = horizontalCtrl.max;
  }
  if (minDistance != 0 && typeof minDistance === "number") {
    controls.minDistance = minDistance;
  }
  if (maxDistance != Infinity && typeof maxDistance === "number") {
    controls.maxDistance = maxDistance;
  }
}

// set axes and grid helper
function setAxesAndGridHelper() {
  const { enableAxesHelper, enableGridHelper, axesHelperSize } = props;
  if (enableAxesHelper) {
    if (!axesHelper) {
      axesHelper = new AxesHelper(axesHelperSize);
      scene.add(axesHelper);
    }
  } else {
    if (axesHelper) {
      scene.remove(axesHelper);
      axesHelper = null as any;
    }
  }

  if (enableGridHelper) {
    if (!gridHelper) {
      gridHelper = new GridHelper(2000, 100);
      scene.add(gridHelper);
    }
  } else {
    if (gridHelper) {
      scene.remove(gridHelper);
      gridHelper = null as any;
    }
  }
}

// 光源跟随相机
function takePointLightFollowCamera() {
  if (!props.pointLightFollowCamera) return;
  const vector = camera.position.clone();
  scene.children.forEach((item: any) => {
    if (item instanceof PointLight) {
      item.position.set(vector.x, vector.y, vector.z);
    }
  });
}

// 导出变量
defineExpose({
  camera,
  scene,
})
</script>
<style scoped>
.viewer-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
  padding: 0;
}

.viewer-container div {
  position: absolute !important;
  left: 0px !important;
  opacity: 1 !important;
}

.viewer-canvas {
  width: 100%;
  height: 100%;
}
</style>