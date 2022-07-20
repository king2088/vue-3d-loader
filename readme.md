# vue-3d-loader

vueJS + [threeJS](https://threejs.org/) 3d viewer component, support dae/fbx/gltf(glb)/obj/ply/stl/json models, and support the same scene to import multiple different 3D models, support mtl materials and texture

[简体中文](./readme_CN.md)

[Click here view demo page](https://king2088.github.io/vue-3d-loader/examples-demo/index.html)

demo gif

![demo gif image](./demo.gif)

Vue3 please install **2.0.0** or later, vue2 please install **1.x.x** version

## Feature support list

- Load a single 3D model
- Loading Multiple 3D Models Simultaneously
- Load multiple 3D models of different types at the same time
- Set scene width and height
- Set up materials and textures
- interactive control
- mouse event
- light
- Camera position and rotation
- Add label points

## install

```shell
npm i vue-3d-loader -S # npm install vue-3d-loader -save
```

or

```shell
yarn add vue-3d-loader
```

## How to use vue-3d-loader

If use in global, insert code in entry file：

```js
/* vue2 */
import vue3dLoader from "vue-3d-loader";
Vue.use(vue3dLoader)

/* vue3 */
import vue3dLoader from "vue-3d-loader";
createApp(App).use(vue3dLoader).mount('#app')
```

If non-global use, insert code in your vue files:

```js
import { vue3dLoader } from "vue-3d-loader"; // The vue3dLoader in {...}
```

Use tags in your components`<vue3dLoader></vue3dLoader>`

```vue
<vue3dLoader
  :height="200"
  :showFps="true"
  :filePath="['/fbx/1.fbx', '/obj/2.obj', '/gltf/3.gltf']"
  :mtlPath="[null, '/obj/2.mtl', null]"
  :backgroundColor="0xff00ff"
></vue3dLoader>
```

## API

### Attributes

| prop                 | type             | default                                                                                                                                                                                                                                                                                         | description                                                                                                                                                                                                                                             |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filePath             | string \| array  | -                                                                                                                                                                                                                                                                                               | File path, supports multiple files to be loaded together, note: If each file corresponds to a material, you need to set the material **mtlPath** as an array. The same is true for image textures, which need to be set to **textureImage** as an array |
| mtlPath              | string \| array  | -                                                                                                                                                                                                                                                                                               | .material path, supports multiple materials to be loaded together, set this parameter to an array, you must set **filePath** to an array                                                                                                                |
| textureImage         | string \| array  | -                                                                                                                                                                                                                                                                                               | jpg/png texture, if is array, **filePath** must be set to an array                                                                                                                                                                                      |
| width                | number           | -                                                                                                                                                                                                                                                                                               | width                                                                                                                                                                                                                                                   |
| height               | number           | -                                                                                                                                                                                                                                                                                               | height                                                                                                                                                                                                                                                  |
| position             | object \| array           | -                                                                                                                                                                                                                                                                                               | object position                                                                                                                                                                                                                                         |
| rotation             | object \| array          | -                                                                                                                                                                                                                                                                                               | rotation coordinates                                                                                                                                                                                                                                    |
| cameraPosition       | object           | { x: 0, y: 0, z: 0 }                                                                                                                                                                                                                                                                            | camera position                                                                                                                                                                                                                                         |
| cameraRotation       | object           | -                                                                                                                                                                                                                                                                                               | camera rotation                                                                                                                                                                                                                                         |
| scale                | object \| array           | { x: 1, y: 1, z: 1 }                                                                                                                                                                                                                                                                            | scale the model                                                                                                                                                                                                                                         |
| lights               | array            | [{type: "AmbientLight",color: 0xaaaaaa,},{type: "DirectionalLight",position: { x: 1, y: 1, z: 1 },color: 0xffffff,intensity: 0.8,}]                                                                                                                                                             | lights is array, type AmbientLight and DirectionalLight                                                                                                                                                                                                 |
| backgroundColor      | number \| string | 0xffffff                                                                                                                                                                                                                                                                                        | background color supports number/hex/rgb. like 0xffffff/#f00/rgb(255,255,255)                                                                                                                                                                           |
| backgroundAlpha      | number           | 1                                                                                                                                                                                                                                                                                               | Background transparency (range 0-1)                                                                                                                                                                                                                     |
| controlsOptions      | object           | -                                                                                                                                                                                                                                                                                               | control parameter [OrbitControls Properties](https://threejs.org/docs/#examples/en/controls/OrbitControls)                                                                                                                                              |
| crossOrigin          | string           | anonymous                                                                                                                                                                                                                                                                                       | Cross-domain configuration. The value is anonymous or use-credentials                                                                                                                                                                                   |
| requestHeader        | object           | -                                                                                                                                                                                                                                                                                               | set request header. example: { 'Authorization: Bearer token' }                                                                                                                                                                                          |
| outputEncoding       | string           | 	linear                                                                                                                                                                                                                                                                            | The value is linear or sRGB. Renderer's linear is LinearEncoding, sRGB is sRGBEncoding (sRGBEncoding can restore material color better). Renderer's output encoding [WebGLRenderer OutputEncoding](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer.outputEncoding)                                                                                                            |
| webGLRendererOptions | object           | { antialias: true, alpha: true }                                                                                                                                                                                                                                                                | WebGLRenderer options [WebGLRenderer Parameters](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer)                                                                                                                                    |
| showFps              | boolean          | false                                                                                                                                                                                                                                                                                           | show stats infomation                                                                                                                                                                                                                                   |
| clearScene           | boolean          | false                                                                                                                                                                                                                                                                                           | clear scene                                                                                                                                                                                                                                             |
| parallelLoad         | boolean          | false                                                                                                                                                                                                                                                                                           | enable/disable parallel load models (useful only for multi-model loading). **Use this attribute, the process event will be unpredictable**                                                                                                              |
| labels               | object           | {image: "", text: "", textStyle: { fontFamily: "Arial", fontSize: 18, fontWeight: "normal", lineHeight: 1, color: "#ffffff", borderWidth: 8, borderRadius: 4, borderColor: "rgba(0,0,0,1)",backgroundColor: "rgba(0, 0, 0, 1)"  }, position: {x:0, y:0, z:0}, scale:{x:1, y:1, z:0}, sid: null} | Add an image/text label and set image to display the image label. Set text to display text labels. Text styles can be set using textStyle. For examples, see the [examples/add-label.vue](./src/examples/add-label.vue) file                            |

### Events

| event                        | description                                                          |
| ---------------------------- | -------------------------------------------------------------------- |
| mousedown(event, intersects) | mouse down, intersect: currently intersecting objects                |
| mousemove(event, intersects) | mouse move, intersect: currently intersecting objects                |
| mouseup(event, intersects)   | mouse up, intersect: currently intersecting objects                  |
| click(event, intersects)     | click, intersect: currently intersecting objects                     |
| load                         | load model event                                                     |
| process(event, fileIndex)    | loading progress, fileIndex: the index of the currently loaded model |
| error(event)                 | error event                                                          |

### Example

#### 1. Load a 3D model

supports dae/fbx/gltf(glb)/obj/ply/stl models

```vue
<!-- fbx model -->
<vue3dLoader filePath="models/collada/stormtrooper/stormtrooper.dae"></vue3dLoader>
<!-- obj model -->
<vue3dLoader filePath="/obj/1.obj"></vue3dLoader>
```

#### 2. Loading multiple models in the same scene

```vue
<!-- Load multiple models of different type, support for setting position, scale, and rotation for each model -->
<template>
  <div class="multiple-models">
    <div class="options">
      <input
        name="Fruit"
        type="checkbox"
        @change="setPosition"
        v-model="checkedPosition"
      />set position
      <input
        name="Fruit"
        type="checkbox"
        @change="setScale"
        v-model="checkedScale"
      />set scale
      <input
        name="Fruit"
        type="checkbox"
        @change="setRotation"
        v-model="checkedRotation"
      />set rotation
    </div>
    <vue3dLoader
      :filePath="filePath"
      :scale="scale"
      :position="position"
      :rotation="rotation"
      :cameraPosition="{ x: -500, y: -200, z: -300 }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      filePath: [
        "/models/fbx/Samba Dancing.fbx",
        "/models/collada/pump/pump.dae",
      ],
      scale: [
        { x: 0.4, y: 0.4, z: 0.4 },
        { x: 1, y: 1, z: 1 },
      ],
      position: [
        { x: 1, y: 0, z: 0 },
        { x: 80, y: 40, z: 200 },
      ],
      rotation: [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: -5, z: -10 },
      ],
      checkedPosition: true,
      checkedScale: true,
      checkedRotation: true,
    };
  },
  methods: {
    setPosition() {
      if (this.checkedPosition) {
        this.position = [
          { x: 1, y: 0, z: 0 },
          { x: 80, y: 40, z: 200 },
        ];
        return;
      }
      this.position = [];
    },
    setScale() {
      if (this.checkedScale) {
        this.scale = [
          { x: 0.4, y: 0.4, z: 0.4 },
          { x: 1, y: 1, z: 1 },
        ];
        return;
      }
      this.scale = [];
    },
    setRotation() {
      if (this.checkedRotation) {
        this.rotation = [
          { x: 0, y: 0, z: 0 },
          { x: 0, y: -5, z: -10 },
        ];
        return;
      }
      this.rotation = [];
    },
  },
};
</script>
```

#### 3. Material and texture

```vue
<!-- obj and mtl material -->
<vue3dLoader filePath="/obj/1.obj" mtlPath="/obj/1.mtl" ></vue3dLoader>
<!-- fbx and png texture -->
<vue3dLoader filePath="/fbx/1.fbx" textureImage="/fbx/1.png" ></vue3dLoader>
```

#### 4. Background color and transparency

```vue
<vue3dLoader filePath="/fbx/1.fbx" :backgroundAlpha="0.5" backgroundColor="red"></vue3dLoader>
```

#### 5. Controls

```vue
<template>
  <div class="controls">
    <div class="buttons">
      <!-- Disable right-click dragging -->
      <button @click="enablePan = !enablePan">
        {{ enablePan ? "disable" : "enable" }} translation
      </button>
      <!-- Disable zoom -->
      <button @click="enableZoom = !enableZoom">
        {{ enableZoom ? "disable" : "enable" }} zoom
      </button>
      <!-- Disable rotate -->
      <button @click="enableRotate = !enableRotate">
        {{ enableRotate ? "disable" : "enable" }} rotation
      </button>
    </div>
    <vue3dLoader
      :filePath="'/models/collada/elf/elf.dae'"
      :controlsOptions="{
        enablePan,
        enableZoom,
        enableRotate,
      }"
      :cameraPosition="{ x: 0, y: -10, z: 13 }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      enablePan: true,
      enableZoom: true,
      enableRotate: true,
    };
  },
};
</script>
```

#### 6. Rotate model

```vue
<template>
  <vue3dLoader
    :rotation="rotation"
    @load="onLoad()"
    filePath="/models/collada/elf/elf.dae"
  />
</template>
<script>
export default {
  data() {
    return {
      rotation: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
      },
    };
  },
  methods: {
    onLoad() {
      this.rotate();
    },
    rotate() {
      requestAnimationFrame(this.rotate);
      this.rotation.z += 0.01;
    },
  },
};
</script>
```

#### 7. Events

```vue
<template>
  <vue3dLoader filePath="/models/ply/Lucy100k.ply" @mousemove="onMouseMove" />
</template>
<script>
export default {
  data() {
    return {
      object: null,
    };
  },
  methods: {
    onMouseMove(event, intersected) {
      if (this.object) {
        this.object.material.color.setStyle("#fff");
      }
      if (intersected) {
        this.object = intersected.object;
        this.object.material.color.setStyle("#13ce66");
      }
    },
  },
};
</script>
```

#### 8. More demos code

[Click here to see more demo code](https://github.com/king2088/vue-3d-loader/tree/master/src/examples)

### Coming soon

- [x] Supports Vue3

### Bugs

[issues](https://github.com/king2088/vue-3d-loader/issues)

### Thanks

This plugin is inseparable from [vue-3d-model](https://github.com/hujiulong/vue-3d-model)
