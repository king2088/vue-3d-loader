<template>
  <div class="viewer-container" ref="container">
    <canvas ref="canvas" class="viewer-canvas"></canvas>
  </div>
</template>
<script>
import { getSize, getCenter, getLoader, getMTLLoader } from "./loadModel";
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
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
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
    mtlPath: String,
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
    };
    Object.assign(this, result);
    // 响应式对象
    return {};
  },
  mounted() {
    const el = this.$refs.container;
    if (!this.width || !this.height) {
      this.size = {
        width: el.offsetWidth,
        height: el.offsetHeight,
      };
    }
    const WEB_GL_OPTIONS = { antialias: true, alpha: true };
    const options = Object.assign({}, WEB_GL_OPTIONS, this.webGLRendererOptions, {
      canvas: this.$refs.canvas,
    });

    this.renderer = new WebGLRenderer(options);
    this.renderer.shadowMap.enabled = true;
    this.renderer.outputEncoding = this.outputEncoding;

    this.controls = new OrbitControls(this.camera, el);
    // this.controls.type = 'orbit';

    this.scene.add(this.wrapper);

    this.load();
    this.update();

    el.addEventListener("mousedown", this.onMouseDown, false);
    el.addEventListener("mousemove", this.onMouseMove, false);
    el.addEventListener("mouseup", this.onMouseUp, false);
    el.addEventListener("click", this.onClick, false);
    el.addEventListener("dblclick", this.onDblclick, false);

    window.addEventListener("resize", this.onResize, false);

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
  },
  methods: {
    onResize() {
      if (!this.width && !this.height) {
        this.$nextTick(() => {
          this.size = {
            width: this.$refs.container.offsetWidth,
            height: this.$refs.container.offsetHeight,
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
      const { object } = this;

      if (!object) return;

      const { position } = this;
      const { rotation } = this;
      const { scale } = this;

      object.position.set(position.x, position.y, position.z);
      object.rotation.set(rotation.x, rotation.y, rotation.z);
      object.scale.set(scale.x, scale.y, scale.z);
    },
    updateRenderer() {
      const { renderer } = this;

      renderer.setSize(this.size.width, this.size.height);
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setClearColor(new Color(this.backgroundColor).getHex());
      renderer.setClearAlpha(this.backgroundAlpha);
    },
    updateCamera() {
      const { camera } = this;
      const { object } = this;

      camera.aspect = this.size.width / this.size.height;
      camera.updateProjectionMatrix();

      if (!this.cameraLookAt || !this.cameraUp) {
        if (!object) return;

        const distance = getSize(object).length();

        camera.position.set(
          this.cameraPosition.x,
          this.cameraPosition.y,
          this.cameraPosition.z
        );
        camera.rotation.set(
          this.cameraRotation.x,
          this.cameraRotation.y,
          this.cameraRotation.z
        );

        if (
          this.cameraPosition.x === 0 &&
          this.cameraPosition.y === 0 &&
          this.cameraPosition.z === 0
        ) {
          camera.position.z = distance;
        }

        camera.lookAt(new Vector3());
      } else {
        camera.position.set(
          this.cameraPosition.x,
          this.cameraPosition.y,
          this.cameraPosition.z
        );
        camera.rotation.set(
          this.cameraRotation.x,
          this.cameraRotation.y,
          this.cameraRotation.z
        );
        camera.up.set(this.cameraUp.x, this.cameraUp.y, this.cameraUp.z);

        camera.lookAt(
          new Vector3(
            this.cameraLookAt.x,
            this.cameraLookAt.y,
            this.cameraLookAt.z
          )
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
      let loaderObj = getLoader(this.filePath); // {loader, getObject, mtlLoader}
      this.loader = loaderObj.loader;
      const _getObject = loaderObj.getObject ? loaderObj.getObject : this.getObject
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
        // load materials and model
        this.loadMtl(_getObject);
        return;
      }
      this.loader.load(
        this.filePath,
        (...args) => {
          const object = _getObject(...args);
          this.addObject(object);
        },
        (event) => {
          this.$emit("process", event);
        },
        (event) => {
          this.$emit("error", event);
        }
      );
    },
    loadMtl(getObject) {
      const mtlLoader = getMTLLoader();
      if (this.crossOrigin) {
        mtlLoader.setCrossOrigin(this.crossOrigin);
      }
      if (this.requestHeader) {
        mtlLoader.setRequestHeader(this.requestHeader);
      }
      const returnPathArray = /^(.*\/)([^/]*)$/.exec(this.mtlPath);
      const path = returnPathArray[1]
      const file = returnPathArray[2]
      mtlLoader.setPath(path).load(file, (materials) => {
        materials.preload();
        this.loader
        .setMaterials(materials)
        .load(
          this.filePath,
          (...args) => {
            const object = getObject(...args);
            this.addObject(object);
          },
          (event) => {
            this.$emit("process", event);
          },
          (event) => {
            this.$emit("error", event);
          }
        );
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
      this.render();
    },
    render() {
      this.renderer.render(this.scene, this.camera);
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
.viewer-canvas {
  width: 100%;
  height: 100%;
}
</style>