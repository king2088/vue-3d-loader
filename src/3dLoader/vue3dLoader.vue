<template>
  <div class="viewer-container" ref="container">
    <canvas ref="canvas" class="viewer-canvas"></canvas>
  </div>
</template>
<script>
import {
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
  Texture,
  TextureLoader,
  AnimationMixer,
  Clock,
  Sprite,
  SpriteMaterial,
  sRGBEncoding,
  Group,
  AxesHelper,
  GridHelper
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { getSize, getCenter, getLoader, getMTLLoader } from "./loadModel";
export default {
  name: "vue3dLoader",
  props: {
    filePath: { type: [String, Array] }, // supports one or more filePath
    fileType: { type: [String, Array] },
    width: Number,
    height: Number,
    position: { type: [Object, Array] },
    rotation: { type: [Object, Array] },
    scale: {
      type: [Object, Array],
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
    cameraRotation: Object,
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
      type: String,
      default: "linear",
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
    clearScene: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    parallelLoad: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    labels: Array,
    autoPlay: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    enableDraco: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    dracoDir: String,
    intersectRecursive: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    verticalCtrl: {
      type: [Boolean, Object],
      default: false
    },
    horizontalCtrl: {
      type: [Boolean, Object],
      default: false
    },
    plyMaterial: {
      type: String,
      default: "MeshStandardMaterial"
    },
    enableAxesHelper: {
      type: Boolean,
      default: false
    },
    axesHelperSize: {
      type: Number,
      default: 100
    },
    enableGridHelper: {
      type: Boolean,
      default: false
    },
    minDistance: {
      type: Number,
      default: 0,
    },
    maxDistance: {
      type: Number,
      default: Infinity,
    }
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
      camera: new PerspectiveCamera(45, 1, 0.1, 100000),
      scene: new Scene(),
      wrapper: null,
      renderer: null,
      controls: null,
      allLights: [],
      clock: new Clock(),
      loader: null,
      requestAnimationId: null,
      stats: null,
      mixers: null,
      textureLoader: null,
      css2DRenderer: null,
      axesHelper: null,
      gridHelper: null
    };
    Object.assign(this, result);
    // 响应式对象
    return {
      loaderIndex: 0,
      timer: null,
      objectPositionHasSet: false,
      isMultipleModels: false,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroyScene();
  },
  watch: {
    filePath() {
      this.destroyScene();
      this.init();
    },
    fileType() {
      this.destroyScene();
      this.init();
    },
    rotation: {
      deep: true,
      handler(val) {
        this.setObjectAttr("rotation", val);
      },
    },
    position: {
      deep: true,
      handler(val) {
        this.setObjectAttr("position", val);
      },
    },
    scale: {
      deep: true,
      handler(val) {
        this.setObjectAttr("scale", val);
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
    cameraPosition: {
      deep: true,
      handler() {
        this.updateCamera();
      },
    },
    clearScene(val) {
      if (val) {
        this.clearSceneWrapper();
      }
    },
    autoPlay() {
      this.playAnimations();
    },
    width(val) {
      this.size.width = val;
      this.updateRenderer();
    },
    height(val) {
      this.size.height = val;
      this.updateRenderer();
    },
    labels: {
      deep: true,
      handler() {
        this.setSpriteLabel();
      },
    },
    enableAxesHelper() {
      this.setAxesAndGridHelper();
    },
    axesHelperSize() {
      this.setAxesAndGridHelper();
    },
    enableGridHelper() {
      this.setAxesAndGridHelper();
    },
    minDistance() {
      this.setVerticalHorizontalControls();
    },
    maxDistance() {
      this.setVerticalHorizontalControls();
    }
  },
  methods: {
    init() {
      if (this.filePath && typeof this.filePath === "object") {
        this.isMultipleModels = true;
      }
      const el = this.$refs.container;
      // init canvas width and height
      this.resizeModel();
      const WEB_GL_OPTIONS = { antialias: true, alpha: true };
      const options = Object.assign(
        {},
        WEB_GL_OPTIONS,
        this.webGLRendererOptions,
        {
          canvas: this.$refs.canvas,
        }
      );

      if (!this.renderer) {
        this.renderer = new WebGLRenderer(options);
        this.renderer.hadowMapEnabled = true;
        this.renderer.shadowMap.enabled = true;
        this.renderer.outputEncoding =
          this.outputEncoding === "linear" ? LinearEncoding : sRGBEncoding;
      }

      if (!this.controls) {
        this.controls = new OrbitControls(this.camera, el);
      }
      this.setVerticalHorizontalControls();
      this.setAxesAndGridHelper();
      this.loadModelSelect();
      this.update();

      el.addEventListener("mousedown", this.onMouseDown, false);
      // el.addEventListener("mousemove", this.onMouseMove, false);
      this.enableMousemoveEvent(this.enableMousemove);
      el.addEventListener("mouseup", this.onMouseUp, false);
      el.addEventListener("click", this.onClick, false);
      el.addEventListener("dblclick", this.onDblclick, false);
      window.addEventListener("resize", this.resizeModel, false);
      // stats
      if (this.showFps) {
        this.stats = new Stats();
        el.appendChild(this.stats.dom);
      }
      this.animate();
      // Init labels
      if (this.labels && this.labels.length > 0) {
        this.setSpriteLabel();
      }
    },
    destroyScene() {
      if (this.requestAnimationId) {
        cancelAnimationFrame(this.requestAnimationId);
      }
      if (this.renderer) {
        this.renderer.dispose();
      }
      if (this.controls) {
        this.controls.dispose();
        this.controls = null;
      }
      const el = this.$refs.container;
      this.enableMousemoveEvent(true);
      el.removeEventListener("mousedown", this.onMouseDown, false);
      el.removeEventListener("mousemove", this.onMouseMove, false);
      el.removeEventListener("mouseup", this.onMouseUp, false);
      el.removeEventListener("click", this.onClick, false);
      el.removeEventListener("dblclick", this.onDblclick, false);
      window.removeEventListener("resize", this.resizeModel, false);
      this.object = null;
      if (this.scene) {
        this.scene.clear();
      }
    },
    resizeModel() {
      if (!this.width || !this.height) {
        this.$nextTick(() => {
          let el = this.$refs.container;
          this.size = {
            width: this.width ? this.width : el.offsetWidth,
            height: this.height ? this.height : el.offsetHeight,
          };
          this.update(true);
        });
      }
    },
    // mouse move event listener
    enableMousemoveEvent(enable) {
      const el = this.$refs.container;
      if (enable) {
        el.addEventListener("mousemove", this.onMouseMove, false);
      } else {
        el.removeEventListener("mousemove", this.onMouseMove, false);
      }
    },
    onMouseDown(event) {
      this.enableMousemoveEvent(false);
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
      this.enableMousemoveEvent(true);
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
      let obj = this.returnObject();
      if (!obj) return null;
      if (!this.$refs.container) return;
      const rect = this.$refs.container.getBoundingClientRect();
      x -= rect.left;
      y -= rect.top;
      const mouse = new Vector2(0, 0);
      mouse.x = (x / this.size.width) * 2 - 1;
      mouse.y = -(y / this.size.height) * 2 + 1;
      this.raycaster.setFromCamera(mouse, this.camera);
      const intersects = this.raycaster.intersectObject(
        obj,
        this.intersectRecursive
      );
      return (intersects && intersects.length) > 0 ? intersects[0] : null;
    },
    update(isResize = false) {
      this.updateRenderer();
      this.updateCamera(isResize);
      this.updateLights();
      this.updateControls();
    },
    updateModel() {
      const { object, position, rotation, scale } = this;
      if (!object) return;
      const isArray = (arg) => {
        return arg instanceof Array;
      };
      const index = this.isMultipleModels ? this.getObjectIndex(object) : null;
      if (position) {
        if (isArray(position)) {
          // position value is array
          if (position[index]) {
            object.position.set(
              position[index].x,
              position[index].y,
              position[index].z
            );
          } else {
            object.position.set(0, 0, 0);
          }
        } else {
          // position value is object
          object.position.set(position.x, position.y, position.z);
        }
      }
      if (rotation) {
        if (isArray(rotation)) {
          // rotation value is array
          if (rotation[index]) {
            object.rotation.set(
              rotation[index].x,
              rotation[index].y,
              rotation[index].z
            );
          } else {
            object.rotation.set(0, 0, 0);
          }
        } else {
          // rotation value is object
          object.rotation.set(rotation.x, rotation.y, rotation.z);
        }
      }
      if (scale) {
        if (isArray(scale)) {
          // scale value is array
          if (scale[index]) {
            object.scale.set(scale[index].x, scale[index].y, scale[index].z);
          } else {
            object.scale.set(1, 1, 1);
          }
        } else {
          // scale value is object
          object.scale.set(scale.x, scale.y, scale.z);
        }
      }
    },
    // get index for current object
    getObjectIndex(object) {
      return this.filePath
        .map((item, index) => {
          if (item.indexOf(object.fileName) > -1) {
            return index;
          }
        })
        .filter((i) => i != undefined)[0];
    },
    updateRenderer() {
      const { renderer, size, backgroundAlpha, backgroundColor } = this;
      if (renderer) {
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.setClearColor(new Color(backgroundColor).getHex());
        renderer.setClearAlpha(backgroundAlpha);
      }
    },
    updateCamera(isResize = false) {
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
      if (isResize) return;
      if (!cameraLookAt || !cameraUp) {
        if (!object) return;
        const distance = getSize(object).length();
        camera.position.set(
          cameraPosition.x,
          cameraPosition.y,
          cameraPosition.z
        );
        if (cameraRotation) {
          camera.rotation.set(
            cameraRotation.x,
            cameraRotation.y,
            cameraRotation.z
          );
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
        camera.position.set(
          cameraPosition.x,
          cameraPosition.y,
          cameraPosition.z
        );
        if (cameraRotation) {
          camera.rotation.set(
            cameraRotation.x,
            cameraRotation.y,
            cameraRotation.z
          );
        }

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
    loadModelSelect() {
      // parallel load
      if (this.parallelLoad && this.isMultipleModels) {
        this.filePath.forEach((path, index) => {
          this.load(index);
        });
      } else {
        this.load();
      }
    },
    load(fileIndex = null) {
      if (!this.filePath) return;
      let index = fileIndex ? fileIndex : this.loaderIndex;
      // if multiple files
      const _filePath = !this.isMultipleModels
        ? this.filePath
        : this.filePath[index];
      const _fileType =
        typeof this.fileType === "string"
          ? this.fileType
          : this.fileType
          ? this.fileType[index]
          : "";
      const loaderObj = getLoader(
        _filePath,
        _fileType,
        this.enableDraco,
        this.plyMaterial,
        this.dracoDir
      ); // {loader, getObject, mtlLoader}
      this.loader = loaderObj.loader;
      const _getObject = loaderObj.getObject
        ? loaderObj.getObject
        : this.getObject;
      if (this.object && index === 0) {
        this.scene.remove(this.object);
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
          this.loadMtl(_filePath, _getObject, index);
        } else {
          // load materials and model
          if (!this.mtlPath[index]) {
            this.loadFilePath(_filePath, _getObject, index);
            return;
          }
          this.loadMtl(_filePath, _getObject, index);
        }
      } else {
        // don't load materials
        this.loadFilePath(_filePath, _getObject, index);
      }
    },
    loadFilePath(filePath, getObject, index) {
      this.loader.load(
        filePath,
        (...args) => {
          const object = getObject(...args);
          this.object = object;
          this.addObject(object, filePath);
          // set texture
          if (this.textureImage) {
            let _texture =
              typeof this.textureImage === "string"
                ? this.textureImage
                : this.textureImage[index];
            if (_texture) {
              this.addTexture(object, _texture);
            }
          }
          this.$emit("load", this.scene);
        },
        (event) => {
          if (!this.parallelLoad) {
            this.onProcess(event);
          }
          let modelIndex = this.loaderIndex + 1;
          this.$emit("process", event, modelIndex);
        },
        (event) => {
          this.$emit("error", event);
        }
      );
    },
    loadMtl(filePath, getObject, index) {
      const mtlLoader = getMTLLoader();
      if (this.crossOrigin) {
        mtlLoader.setCrossOrigin(this.crossOrigin);
      }
      if (this.requestHeader) {
        mtlLoader.setRequestHeader(this.requestHeader);
      }
      const _mtl =
        typeof this.mtlPath === "string" ? this.mtlPath : this.mtlPath[index];
      const returnPathArray = /^(.*\/)([^/]*)$/.exec(_mtl);
      const path = returnPathArray[1];
      const file = returnPathArray[2];
      mtlLoader.setPath(path).load(file, (materials) => {
        materials.preload();
        this.loader.setMaterials(materials);
        this.loadFilePath(filePath, getObject, index);
      });
    },
    getObject(object) {
      return object;
    },
    addObject(object, filePath) {
      const center = getCenter(object);
      // Multiple models set object position only once, prevent the position from changing every time multiple models objects is loaded
      if (!this.objectPositionHasSet) {
        this.scene.position.copy(center.negate());
        this.objectPositionHasSet = true;
      }
      this.object = object;
      // add the file name to object
      let fileName = filePath.split("/");
      fileName = fileName[fileName.length - 1];
      this.object.fileName = fileName;
      this.scene.add(object);
      if (object.isMesh) {
        this.update();
        return;
      }
      this.updateCamera();
      this.updateModel();
      this.playAnimations();
    },
    animate() {
      this.requestAnimationId = requestAnimationFrame(this.animate);
      this.updateStats();
      const delta = this.clock.getDelta();
      // update play animations
      if (this.mixers && !this.mixers.length) {
        this.mixers.update(delta);
      }
      if (this.mixers && this.mixers.length > 0) {
        this.mixers.forEach((m) => {
          m.update(delta);
        });
      }
      if (this.controls) {
        this.controls.update();
      }
      this.render();
    },
    render() {
      if (this.renderer) {
        this.renderer.render(this.scene, this.camera);
      }
    },
    updateStats() {
      if (this.showFps) {
        this.stats.update();
      }
    },
    onProcess(xhr) {
      let process = Math.floor((xhr.loaded / xhr.total) * 100);
      const next = () => {
        if (process === 100) {
          if (
            this.isMultipleModels &&
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
      };
      // local webpack environment http response headers no content-length, the xhr.total is 0, so process === Infinity
      if (process === Infinity) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          process = 100;
          next();
        }, 200);
      }
      next();
    },
    addTexture(object, texture) {
      if (!this.textureLoader) {
        this.textureLoader = new TextureLoader();
      }
      object.traverse((child) => {
        if (child.isMesh) {
          this.textureLoader.load(
            texture,
            (_texture) => {
              child.material.map = _texture;
              child.material.needsUpdate = true;
            },
            () => {},
            (err) => {
              this.$emit("error", err);
            }
          );
        }
      });
    },
    clearSceneWrapper() {
      this.scene.clear();
    },
    setObjectAttr(type, val) {
      let obj = this.returnObject();
      if (!obj) return;
      if (this.isMultipleModels) {
        obj.children.forEach((item) => {
          const index = this.getObjectIndex(item);
          if (val[index]) {
            item[type].set(val[index].x, val[index].y, val[index].z);
          } else {
            const v = type == "scale" ? 1 : 0;
            item[type].set(v, v, v);
          }
        });
        return;
      }
      obj[type].set(val.x, val.y, val.z);
    },
    returnObject() {
      return this.isMultipleModels ? this.scene : this.object;
    },
    setSpriteLabel() {
      if (!this.labels) return;
      this.clearSprite()
      const spriteImageLabel = (image) => {
        if (!this.textureLoader) {
          this.textureLoader = new TextureLoader();
        }
        const imageTexture = this.textureLoader.load(image);
        return imageTexture;
      };

      const spriteTextLabel = (text, style) => {
        const canvas = this.generateCanvas(text, style);
        const texture = new Texture(canvas);
        texture.needsUpdate = true;
        return texture;
      };

      this.labels.forEach((item) => {
        const spriteMap = item.image
          ? spriteImageLabel(item.image)
          : spriteTextLabel(item.text, item.textStyle || {});
        const spriteMaterial = new SpriteMaterial({
          map: spriteMap,
          color: item.spriteMaterialColor || 0xffffff,
          // useScreenCoordinates: false
          // alignment: spriteAlignment
        });
        const sprite = new Sprite(spriteMaterial);
        if (item.scale) {
          sprite.scale.set(
            item.scale.x || 1,
            item.scale.y || 1,
            item.scale.z || 0
          );
        } else {
          sprite.scale.set(1, 1, 0);
        }
        if (item.position) {
          sprite.position.set(
            item.position.x,
            item.position.y,
            item.position.z
          );
        }
        if (item.sid) {
          sprite.sid = item.sid;
        }
        this.scene.add(sprite);
      });
    },
    clearSprite() {
      const sceneChildren = this.scene.children;
      for (let i = sceneChildren.length - 1; i >= 0; i--) {
        const item = sceneChildren[i];
        if (item) {
          // If have only one model the Sprite in Group
          if (item instanceof Group && item.children) {
            this.scene.children[i].children = item.children.map((_item) => {
              if (_item instanceof Sprite) {
                return null;
              }
              return _item;
            }).filter(item => item);
          }
          // If have multiple models the Sprite in children
          if (item instanceof Sprite) {
            this.scene.remove(item)
          }
        }
      }
    },
    generateCanvas(text, style) {
      if (style === undefined) style = {};
      const roundRect = (ctx, x, y, w, h, r) => {
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
      const fontSize =
        style.fontSize === 0 || style.fontSize ? style.fontSize : 18;
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

      return canvas;
    },
    playAnimations() {
      if (this.isMultipleModels) {
        this.playMultipleModels(this.scene);
        return;
      }
      this.playSingleModel(this.object);
    },
    // play a single model animation
    playSingleModel(item) {
      this.mixers = new AnimationMixer(item);
      if (item.animations && item.animations.length > 0) {
        item.animations.forEach((clip) => {
          if (clip) {
            const action = this.mixers.clipAction(clip);
            if (this.autoPlay) {
              action.play();
            } else {
              action.stop();
            }
          }
        });
      }
    },
    // play multiple models animation
    playMultipleModels(obj) {
      this.mixers = [];
      obj.children.forEach((item, index) => {
        this.mixers.push(new AnimationMixer(item));
        if (item.animations && item.animations.length > 0) {
          item.animations.forEach((clip) => {
            if (clip) {
              const action = this.mixers[index].clipAction(clip);
              if (this.autoPlay) {
                action.play();
              } else {
                action.stop();
              }
            }
          });
        }
      });
    },
    // set vertical horizontal controls
    setVerticalHorizontalControls() {
      if (!this.controls) {
        return;
      }
      // set vertical
      if (this.verticalCtrl && typeof this.verticalCtrl === "boolean") {
        this.controls.minAzimuthAngle = -2 * Math.PI;
        this.controls.maxAzimuthAngle = -2 * Math.PI;
      }
      if (this.verticalCtrl && typeof this.verticalCtrl === "object") {
        // min/max azimuth angle value range [-2 * Math.PI，2 * Math.PI]
        this.controls.minAzimuthAngle = this.verticalCtrl.min;
        this.controls.maxAzimuthAngle = this.verticalCtrl.max;
      }
      // set horizontal
      if (this.horizontalCtrl && typeof this.horizontalCtrl === "boolean") {
        this.controls.minPolarAngle = 1;
        this.controls.maxPolarAngle = 1;
      }
      if (this.horizontalCtrl && typeof this.horizontalCtrl === "object") {
        // min/max azimuth angle value range [0，Math.PI]
        this.controls.minPolarAngle = this.horizontalCtrl.min;
        this.controls.maxPolarAngle = this.horizontalCtrl.max;
      }
      if (this.minDistance != 0 && typeof this.minDistance === "number") {
        this.controls.minDistance = this.minDistance;
      }
      if (this.maxDistance != Infinity && typeof this.maxDistance === "number") {
        this.controls.maxDistance = this.maxDistance;
      }
    },
    // set axes and grid helper
    setAxesAndGridHelper () {
      if (this.enableAxesHelper) {
        // add axes
        this.axesHelper = new AxesHelper(this.axesHelperSize); // axesHelperSize is axes size，red: x, green: y, blue: z
        this.scene.add(this.axesHelper);
      } else {
        if (this.axesHelper) {
          this.scene.remove(this.axesHelper);
        }
      }

      if (this.enableGridHelper) {
        // add grid
        this.gridHelper = new GridHelper(2000, 100);
        this.scene.add(this.gridHelper);
      } else {
        if (this.gridHelper) {
          this.scene.remove(this.gridHelper);
        }
      }
    }
  }
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
