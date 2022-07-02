<template>
  <div class="viewer-container" ref="container">
    <canvas ref="canvas" class="viewer-canvas"></canvas>
  </div>
</template>
<script>
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
  TextureLoader,
  AnimationMixer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { getSize, getCenter, getLoader, getMTLLoader } from "./loadModel";
export default {
  name: "vue3dLoader",
  props: {
    filePath: { type: [String, Array] }, // supports one or more filePath
    width: Number,
    height: Number,
    position: {
      type: Object,
      default: () => {
        return { x: 0, y: 0, z: 0 };
      },
    },
    rotation: {
      type: Object,
      default: () => {
        return { x: 0, y: 0, z: 0 };
      },
    },
    scale: {
      type: Object,
      default: () => {
        return { x: 1, y: 1, z: 1 };
      },
    },
    lights: {
      type: Array,
      default: () => {
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
    },
    cameraPosition: {
      type: Object,
      default: () => {
        return { x: 0, y: 0, z: 0 };
      },
    },
    cameraRotation: {
      type: Object,
      default: () => {
        return { x: 0, y: 0, z: 0 };
      },
    },
    cameraUp: Object,
    cameraLookAt: Object,
    backgroundColor: {
      typeof: [Number, String],
      default: () => {
        return 0xffffff;
      },
    },
    backgroundAlpha: {
      type: Number,
      default: 1,
    },
    controlsOptions: Object,
    crossOrigin: {
      type: String,
      default: "anonymous",
    },
    requestHeader: {
      type: Object,
      default: () => {},
    },
    outputEncoding: {
      type: Number,
      default: LinearEncoding,
    },
    webGLRendererOptions: Object,
    mtlPath: {
      type: [String, Array],
    },
    showFps: {
      type: Boolean,
      default: false,
    },
    textureImage: {
      type: [String, Array],
    },
  },
  data() {
    // 非响应式对象，防止threeJS多次渲染
    const result = {
      size: {
        width: this.width,
        height: this.height,
      },
      object: null,
      raycaster: new Raycaster(),
      mouse: new Vector2(),
      camera: new PerspectiveCamera(45, 1, 0.01, 100000),
      scene: new Scene(),
      wrapper: new Object3D(),
      renderer: null,
      controls: null,
      allLights: [],
      clock: null,
      loader: null,
      requestAnimationId: null,
      stats: null,
      mixer: null,
    };
    Object.assign(this, result);
    // 响应式对象
    return {
      loaderIndex: 0,
      timer: null,
    };
  },
  mounted() {
    const el = this.$refs.container;
    // init canvas width and height
    this.onResize();
    const WEB_GL_OPTIONS = { antialias: true, alpha: true };
    const options = Object.assign(
      {},
      WEB_GL_OPTIONS,
      this.webGLRendererOptions,
      {
        canvas: this.$refs.canvas,
      }
    );

    this.renderer = new WebGLRenderer(options);
    this.renderer.shadowMap.enabled = true;
    this.renderer.outputEncoding = this.outputEncoding;

    this.controls = new OrbitControls(this.camera, el);

    this.scene.add(this.wrapper);

    this.load();
    this.update();

    el.addEventListener("mousedown", this.onMouseDown, false);
    el.addEventListener("mousemove", this.onMouseMove, false);
    el.addEventListener("mouseup", this.onMouseUp, false);
    el.addEventListener("click", this.onClick, false);
    el.addEventListener("dblclick", this.onDblclick, false);
    window.addEventListener("resize", this.onResize, false);
    // stats
    if (this.showFps) {
      this.stats = new Stats();
      el.appendChild(this.stats.dom);
    }
    this.animate();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.requestAnimationId);
    this.renderer.dispose();
    if (this.controls) {
      this.controls.dispose();
    }
    const el = this.$refs.container;
    el.removeEventListener("mousedown", this.onMouseDown, false);
    el.removeEventListener("mousemove", this.onMouseMove, false);
    el.removeEventListener("mouseup", this.onMouseUp, false);
    el.removeEventListener("click", this.onClick, false);
    el.removeEventListener("dblclick", this.onDblclick, false);

    window.removeEventListener("resize", this.onResize, false);
  },
  watch: {
    filePath() {
      this.load();
    },
    rotation: {
      deep: true,
      handler(val) {
        if (!this.object) return;
        this.object.rotation.set(val.x, val.y, val.z);
      },
    },
    position: {
      deep: true,
      handler(val) {
        if (!this.object) return;
        this.object.position.set(val.x, val.y, val.z);
      },
    },
    scale: {
      deep: true,
      handler(val) {
        if (!this.object) return;
        this.object.scale.set(val.x, val.y, val.z);
      },
    },
    lights: {
      deep: true,
      handler() {
        this.updateLights();
      },
    },
    size: {
      deep: true,
      handler() {
        this.updateCamera();
        this.updateRenderer();
      },
    },
    controlsOptions: {
      deep: true,
      handler() {
        this.updateControls();
      },
    },
    backgroundAlpha() {
      this.updateRenderer();
    },
    backgroundColor() {
      this.updateRenderer();
    },
    cameraRotation: {
      deep: true,
      handler() {
        this.updateCamera();
      },
    },
  },
  methods: {
    onResize() {
      if (!this.width || !this.height) {
        this.$nextTick(() => {
          let el = this.$refs.container;
          this.size = {
            width: this.width ? this.width : el.offsetWidth,
            height: this.height ? this.height : el.offsetHeight,
          };
          this.update();
        });
      }
    },
    onMouseDown(event) {
      const intersected = this.pick(event.clientX, event.clientY);
      this.$emit("mousedown", event, intersected);
    },
    onMouseMove(event) {
      const intersected = this.pick(event.clientX, event.clientY);
      this.$emit("mousemove", event, intersected);
    },
    onMouseUp(event) {
      const intersected = this.pick(event.clientX, event.clientY);
      this.$emit("mouseup", event, intersected);
    },
    onClick(event) {
      const intersected = this.pick(event.clientX, event.clientY);
      this.$emit("click", event, intersected);
    },
    onDblclick(event) {
      const intersected = this.pick(event.clientX, event.clientY);
      this.$emit("dblclick", event, intersected);
    },
    pick(x, y) {
      if (!this.object) return null;
      if (!this.$refs.container) return;
      const rect = this.$refs.container.getBoundingClientRect();
      x -= rect.left;
      y -= rect.top;
      this.mouse.x = (x / this.size.width) * 2 - 1;
      this.mouse.y = -(y / this.size.height) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObject(this.object, true);
      return (intersects && intersects.length) > 0 ? intersects[0] : null;
    },
    update() {
      this.updateRenderer();
      this.updateCamera();
      this.updateLights();
      this.updateControls();
    },
    updateModel() {
      const { object, position, rotation, scale } = this;
      if (!object) return;
      object.position.set(position.x, position.y, position.z);
      object.rotation.set(rotation.x, rotation.y, rotation.z);
      object.scale.set(scale.x, scale.y, scale.z);
    },
    updateRenderer() {
      const { renderer, size, backgroundAlpha, backgroundColor } = this;
      renderer.setSize(size.width, size.height);
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setClearColor(new Color(backgroundColor).getHex());
      renderer.setClearAlpha(backgroundAlpha);
    },
    updateCamera() {
      const {
        size,
        camera,
        object,
        cameraLookAt,
        cameraUp,
        cameraPosition,
        cameraRotation,
      } = this;
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();

      if (!cameraLookAt || !cameraUp) {
        if (!object) return;
        const distance = getSize(object).length();
        camera.position.set(
          cameraPosition.x,
          cameraPosition.y,
          cameraPosition.z
        );
        camera.rotation.set(
          cameraRotation.x,
          cameraRotation.y,
          cameraRotation.z
        );
        if (
          cameraPosition.x === 0 &&
          cameraPosition.y === 0 &&
          cameraPosition.z === 0
        ) {
          camera.position.z = distance;
        }
        camera.lookAt(new Vector3());
      } else {
        camera.position.set(
          cameraPosition.x,
          cameraPosition.y,
          cameraPosition.z
        );
        camera.rotation.set(
          cameraRotation.x,
          cameraRotation.y,
          cameraRotation.z
        );
        camera.up.set(cameraUp.x, cameraUp.y, cameraUp.z);
        camera.lookAt(
          new Vector3(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z)
        );
      }
    },
    updateLights() {
      this.scene.remove(...this.allLights);
      this.allLights = [];
      this.lights.forEach((item) => {
        if (!item.type) return;
        const type = item.type.toLowerCase();
        let light = null;
        if (type === "ambient" || type === "ambientlight") {
          const color =
            item.color === 0x000000 ? item.color : item.color || 0x404040;
          const intensity =
            item.intensity === 0 ? item.intensity : item.intensity || 1;
          light = new AmbientLight(color, intensity);
        } else if (type === "point" || type === "pointlight") {
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
        } else if (type === "directional" || type === "directionallight") {
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
        } else if (type === "hemisphere" || type === "hemispherelight") {
          const skyColor =
            item.skyColor === 0x000000
              ? item.skyColor
              : item.skyColor || 0xffffff;
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
          this.allLights.push(light);
          this.scene.add(light);
        }
      });
    },
    updateControls() {
      if (this.controlsOptions) {
        Object.assign(this.controls, this.controlsOptions);
      }
    },
    load() {
      if (!this.filePath) return;
      // if multiple files
      const _filePath =
        typeof this.filePath === "string"
          ? this.filePath
          : this.filePath[this.loaderIndex];
      const loaderObj = getLoader(_filePath); // {loader, getObject, mtlLoader}
      this.loader = loaderObj.loader;
      const _getObject = loaderObj.getObject
        ? loaderObj.getObject
        : this.getObject;
      if (this.object) {
        this.wrapper.remove(this.object);
      }
      if (this.requestHeader) {
        this.loader.setRequestHeader(this.requestHeader);
      }
      if (this.crossOrigin) {
        this.loader.setCrossOrigin(this.crossOrigin);
      }
      if (this.mtlPath) {
        // load materials
        const isMultipleMTL = typeof this.mtlPath === "string";
        if (isMultipleMTL) {
          // single material
          this.loadMtl(_filePath, _getObject);
        } else {
          // load materials and model
          if (!this.mtlPath[this.loaderIndex]) {
            this.loadFilePath(_filePath, _getObject);
            return;
          }
          this.loadMtl(_filePath, _getObject);
        }
      } else {
        // don't load materials
        this.loadFilePath(_filePath, _getObject);
      }
    },
    loadFilePath(filePath, getObject) {
      this.loader.load(
        filePath,
        (...args) => {
          const object = getObject(...args);
          this.addObject(object);
          this.mixer = new AnimationMixer(object);
          if (object.animations[0]) {
            const action = this.mixer.clipAction(object.animations[0]);
            action.play();
          }
          // set texture
          if (this.textureImage) {
            let _texture =
              typeof this.textureImage === "string"
                ? this.textureImage
                : this.textureImage[this.loaderIndex];
            if (_texture) {
              this.addTexture(object, _texture);
            }
          }
          this.$emit("load");
        },
        (event) => {
          this.onProcess(event);
          let modelIndex = this.loaderIndex + 1;
          this.$emit("process", event, modelIndex);
        },
        (event) => {
          this.$emit("error", event);
        }
      );
    },
    loadMtl(filePath, getObject) {
      const mtlLoader = getMTLLoader();
      if (this.crossOrigin) {
        mtlLoader.setCrossOrigin(this.crossOrigin);
      }
      if (this.requestHeader) {
        mtlLoader.setRequestHeader(this.requestHeader);
      }
      const _mtl =
        typeof this.mtlPath === "string"
          ? this.mtlPath
          : this.mtlPath[this.loaderIndex];
      const returnPathArray = /^(.*\/)([^/]*)$/.exec(_mtl);
      const path = returnPathArray[1];
      const file = returnPathArray[2];
      mtlLoader.setPath(path).load(file, (materials) => {
        materials.preload();
        this.loader.setMaterials(materials);
        this.loadFilePath(filePath, getObject);
      });
    },
    getObject(object) {
      return object;
    },
    addObject(object) {
      const center = getCenter(object);
      // correction position
      this.wrapper.position.copy(center.negate());
      this.object = object;
      this.wrapper.add(object);
      this.updateCamera();
      this.updateModel();
    },
    animate() {
      this.requestAnimationId = requestAnimationFrame(this.animate);
      this.updateStats();
      this.render();
    },
    render() {
      this.renderer.render(this.scene, this.camera);
    },
    updateStats() {
      if (this.showFps) {
        this.stats.update();
      }
    },
    onProcess(xhr) {
      let process = Math.floor((xhr.loaded / xhr.total) * 100);
      if (process === Infinity) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          process = 100;
        }, 200);
      }
      if (process === 100) {
        if (
          typeof this.filePath === "object" &&
          this.filePath.length > this.loaderIndex
        ) {
          // Load completed
          this.$nextTick(() => {
            this.loaderIndex++;
            if (this.loaderIndex === this.filePath.length) {
              this.loaderIndex = 0;
              return;
            }
            this.load();
          });
        } else {
          this.loaderIndex = 0;
        }
      }
    },
    addTexture(object, texture) {
      const textureLoader = new TextureLoader();
      object.traverse((child) => {
        if (child.isMesh) {
          textureLoader.load(
            texture,
            (_texture) => {
              child.material.map = _texture;
              child.material.needsUpdate = true;
              console.log("texture is finished.");
            },
            () => {},
            (err) => {
              console.log("texture err", err);
            }
          );
        }
      });
    },
  },
};
</script>
<style>
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