<template>
  <div ref="containerElement" class="viewer-container">
    <canvas ref="canvasElement" class="viewer-canvas" />
  </div>
</template>
<script setup lang="ts" name="vue3dLoader">
import {
  Object3D,
  Vector2,
  Vector3,
  Color,
  Scene,
  Raycaster,
  WebGLRenderer,
  PerspectiveCamera,
  AmbientLight,
  PointLight,
  HemisphereLight,
  DirectionalLight,
  LinearEncoding,
  sRGBEncoding,
  Texture,
  TextureLoader,
  AnimationMixer,
  Clock,
  Sprite,
  SpriteMaterial,
  WebGLRendererParameters,
  AnimationClip,
  Light,
  Mesh,
  AnimationObjectGroup,
  Group,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { getSize, getCenter, getLoader, getMTLLoader } from "./loadModel";
import {
  defineProps,
  onMounted,
  ref,
  withDefaults,
  nextTick,
  watch,
  onBeforeUnmount,
} from "vue";

export interface coordinates {
  x: number;
  y: number;
  z: number;
}
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
}

const props = withDefaults(defineProps<Props>(), {
  lights: () => {
    return [
      {
        type: "AmbientLight",
        color: 0xaaaaaa,
      },
      {
        type: "DirectionalLight",
        position: { x: 1, y: 1, z: 1 },
        color: 0xffffff,
        intensity: 0.8,
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
    return "linear";
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
});

// Non responsive variable
let object: any = null;
const raycaster = new Raycaster();
const mouse = new Vector2();
const camera = new PerspectiveCamera(45, 1, 1, 100000);
const scene = new Scene();
const clock = new Clock();
let wrapper = new Object3D();
let renderer: WebGLRenderer = null as any;
let controls: OrbitControls = {} as any;
let allLights: Light[] = [];
let loader: any = null;
let requestAnimationId: number = 0;
let stats: any = null;
let mixers: AnimationMixer | AnimationMixer[] = null as any;
let textureLoader: any = null;

// responsive variable
const size = ref({ width: props.width || 0, height: props.height || 0 });
const loaderIndex = ref(0);
const objectPositionHasSet = ref(false);
const isMultipleModels = ref(false);
const containerElement = ref(null);
const canvasElement = ref(null);

// no deep watch
watch(
  [
    () => props.filePath,
    () => props.fileType,
    () => props.clearScene,
    () => props.backgroundAlpha,
    () => props.backgroundColor,
  ],
  (valueArray) => {
    if (valueArray[0] || valueArray[1]) {
      loadModelSelect();
    }
    if (valueArray[2]) {
      clearSceneWrapper();
    }
    if (valueArray[3] || valueArray[4]) {
      updateRenderer();
    }
  }
);

// deep watch
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
  },
  { deep: true }
);
watch(
  [() => props.controlsOptions],
  () => {
    updateControls();
  },
  { deep: true }
);
watch(
  [() => props.cameraRotation, () => props.cameraPosition],
  () => {
    updateCamera();
  },
  { deep: true }
);
watch([() => props.autoPlay], () => {
  playAnimations();
});
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

onMounted(() => {
  const {
    filePath,
    outputEncoding,
    webGLRendererOptions,
    showFps,
    enableDamping,
    dampingFactor,
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

  renderer = new WebGLRenderer(options);
  // renderer.hadowMapEnabled = true
  renderer.shadowMap.enabled = true;
  const encoding = outputEncoding === "linear" ? LinearEncoding : sRGBEncoding;
  renderer.outputEncoding = encoding;

  controls = new OrbitControls(camera, el);
  if (enableDamping) {
    controls.enableDamping = true;
    if (dampingFactor != undefined) {
      controls.dampingFactor = dampingFactor;
    }
  }
  scene.add(wrapper);

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
    stats = Stats();
    el.appendChild(stats.dom);
  }
  animate();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(requestAnimationId);
  renderer.dispose();
  if (controls) {
    controls.dispose();
  }
  const el = containerElement.value as any;
  el.removeEventListener("mousedown", onMouseDown, false);
  el.removeEventListener("mousemove", onMouseMove, false);
  el.removeEventListener("mouseup", onMouseUp, false);
  el.removeEventListener("click", onClick, false);
  el.removeEventListener("dblclick", onDblclick, false);
  window.removeEventListener("resize", onResize, false);
  object = null;
  wrapper = null as any;
});

function setContainerElementStyle(el: any) {
  const { width, height } = props;
  if (width) {
    el.style.width = `${width}px`;
  }
  if (height) {
    el.style.height = `${height}px`;
  }
}
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
  if (!width || !height) {
    nextTick(() => {
      const el = containerElement.value as any;
      size.value = {
        width: width || el.offsetWidth,
        height: height || el.offsetHeight,
      };
    });
  }
}
function onMouseDown(event: MouseEvent) {
  enableMousemoveEvent(false);
  const intersected = pick(event.clientX, event.clientY);
  emit("mousedown", event, intersected);
}
function onMouseMove(event: MouseEvent) {
  const intersected = pick(event.clientX, event.clientY);
  emit("mousemove", event, intersected);
}
function onMouseUp(event: MouseEvent) {
  const intersected = pick(event.clientX, event.clientY);
  emit("mouseup", event, intersected);
  enableMousemoveEvent(true);
}
function onClick(event: MouseEvent) {
  const intersected = pick(event.clientX, event.clientY);
  emit("click", event, intersected);
}
function onDblclick(event: MouseEvent) {
  const intersected = pick(event.clientX, event.clientY);
  emit("dblclick", event, intersected);
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
        : object.scale.set(0, 0, 0)
      : object.scale.set(scale.x, scale.y, scale.z);
  }
}
function updateRenderer() {
  const { backgroundColor, backgroundAlpha } = props;
  renderer.setSize(size.value.width, size.value.height);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setClearColor(new Color(backgroundColor).getHex());
  renderer.setClearAlpha(backgroundAlpha as any);
}
function updateCamera(isResize?: boolean) {
  const { cameraPosition, cameraRotation, cameraUp, cameraLookAt } = props;
  camera.aspect = size.value.width / size.value.height;
  camera.updateProjectionMatrix();
  if (isResize) return;

  if (!cameraLookAt || !cameraUp) {
    if (!object) return;
    const distance = getSize(object).length();
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    if (cameraRotation) {
      camera.rotation.set(cameraRotation.x, cameraRotation.y, cameraRotation.z);
    }
    if (
      cameraPosition.x === 0 &&
      cameraPosition.y === 0 &&
      cameraPosition.z === 0
    ) {
      camera.position.z = distance;
    }
    camera.lookAt(new Vector3());
  } else {
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    if (cameraRotation) {
      camera.rotation.set(cameraRotation.x, cameraRotation.y, cameraRotation.z);
    }
    camera.up.set(cameraUp.x, cameraUp.y, cameraUp.z);
    camera.lookAt(new Vector3(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z));
  }
}
function updateLights() {
  const { lights } = props;
  scene.remove(...allLights);
  allLights = [];
  lights.forEach((item: any) => {
    if (!item.type) return;
    const type = item.type.toLowerCase();
    let light: any = null;
    if (type === "ambient" || type === "ambientlight") {
      const color =
        item.color === 0x000000 ? item.color : item.color || 0x404040;
      const intensity =
        item.intensity === 0 ? item.intensity : item.intensity || 1;
      light = new AmbientLight(color, intensity);
    }
    if (type === "point" || type === "pointlight") {
      const color =
        item.color === 0x000000 ? item.color : item.color || 0xffffff;
      const intensity =
        item.intensity === 0 ? item.intensity : item.intensity || 1;
      const distance = item.distance || 0;
      const decay = item.decay === 0 ? item.decay : item.decay || 1;
      light = new PointLight(color, intensity, distance, decay);
      if (item.position) {
        light.position.copy(item.position);
      }
    }
    if (type === "directional" || type === "directionallight") {
      const color =
        item.color === 0x000000 ? item.color : item.color || 0xffffff;
      const intensity =
        item.intensity === 0 ? item.intensity : item.intensity || 1;

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
}
function updateControls() {
  const { controlsOptions } = props;
  if (controlsOptions) {
    Object.assign(controls, controlsOptions);
  }
}
function loadModelSelect() {
  const { filePath, parallelLoad } = props;
  // If enable parallel load
  if (parallelLoad && isMultipleModels) {
    (filePath as any).forEach((path: string, index: number) => {
      load(index);
    });
  } else {
    load();
  }
}
function load(fileIndex?: number) {
  const {
    filePath,
    fileType,
    crossOrigin,
    requestHeader,
    mtlPath,
    enableDraco,
    dracoDir,
  } = props;
  if (!filePath) return;
  const index = fileIndex || loaderIndex.value;
  // if multiple files
  const filePathString: any = !isMultipleModels.value
    ? filePath
    : filePath[index];
  const fileTypeString: string = typeof fileType === "string" ? fileType : fileType ? fileType[index] : "";
  const loaderObject3d: any = getLoader(filePathString, fileTypeString, enableDraco, dracoDir); // {loader, getObject, mtlLoader}
  loader = loaderObject3d.loader;
  const getObjectFun = loaderObject3d.getObject
    ? loaderObject3d.getObject
    : getObject;
  if (object && index === 0) {
    wrapper.remove(object);
  }
  if (requestHeader) {
    loader.setRequestHeader(requestHeader);
  }
  if (crossOrigin) {
    loader.setCrossOrigin(crossOrigin);
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
  const { textureImage, parallelLoad } = props;
  loader.load(
    filePath,
    (...args: any) => {
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
      setLabel();
      emit("load", wrapper);
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
function loadMtl(filePath: string, getObject: any, index: number) {
  const { crossOrigin, requestHeader, mtlPath } = props;
  const mtlLoader = getMTLLoader();
  if (crossOrigin) {
    mtlLoader.setCrossOrigin(crossOrigin);
  }
  if (requestHeader) {
    mtlLoader.setRequestHeader(requestHeader as any);
  }
  const mtl = typeof mtlPath === "string" ? mtlPath : mtlPath[index];
  const mtlPathArray: any = /^(.*\/)([^/]*)$/.exec(mtl);
  const path = mtlPathArray[1];
  const file = mtlPathArray[2];
  mtlLoader.setPath(path).load(file, (materials) => {
    materials.preload();
    loader.setMaterials(materials);
    loadFilePath(filePath, getObject, index);
  });
}
function getObject(object: any) {
  return object;
}
function addObject(obj: Object3D, filePath: string) {
  const center = getCenter(object);
  // Multiple models set object position only once, prevent the position from changing every time multiple models objects is loaded
  if (!objectPositionHasSet.value) {
    wrapper.position.copy(center.negate());
    objectPositionHasSet.value = true;
  }
  object = obj;
  // add the file name to object
  let fileName: any = filePath.split("/");
  fileName = fileName[fileName.length - 1];
  object.fileName = fileName;
  wrapper.add(object);
  updateCamera();
  updateModel();
  playAnimations();
}
function animate() {
  requestAnimationId = requestAnimationFrame(animate);
  updateStats();
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
  render();
}
function render() {
  renderer.render(scene, camera);
}
function updateStats() {
  const { showFps } = props;
  if (showFps) {
    stats.update();
  }
}
function onProcess(xhr: ProgressEvent) {
  const { filePath } = props;
  let process = Math.floor((xhr.loaded / xhr.total) * 100);
  if (process === 100) {
    if (isMultipleModels.value && filePath.length > loaderIndex.value) {
      // Load completed
      nextTick(() => {
        loaderIndex.value++;
        if (loaderIndex.value === filePath.length) {
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
}
function clearSceneWrapper() {
  wrapper.clear();
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
  return isMultipleModels.value ? wrapper : object;
}
function setLabel() {
  const { filePath } = props;
  if (isMultipleModels.value) {
    if (loaderIndex.value === filePath.length) {
      setSpriteLabel();
    }
  } else {
    setSpriteLabel();
  }
}
function setSpriteLabel() {
  const { labels } = props;
  if (!labels) return;
  const obj = isMultipleModels.value ? wrapper : object;
  const spriteImageLabel = (image: any) => {
    if (!textureLoader) {
      textureLoader = new TextureLoader();
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
      // useScreenCoordinates: false
      // alignment: spriteAlignment
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
// play animations
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
    if (item.animations && item.animations.length > 0) {
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
