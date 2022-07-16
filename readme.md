# vue-3d-loader

vueJS + threeJS 3d viewer component.  

support .dae/.fbx/.gltf/.glb/.obj/.ply/.stl/.json models, and support the same scene to import multiple different 3D models, support mtl materials and texture

[![Version](https://img.shields.io/npm/v/vue-3d-loader.svg)](https://www.npmjs.com/package/vue-3d-loader) [![License](https://img.shields.io/npm/l/vue-3d-loader.svg)](https://www.npmjs.com/package/vue-3d-loader)

[简体中文](./readme_CN.md)

[Click here view demo page](https://king2088.github.io/vue-3d-loader/examples-demo/index.html)

demo gif

![demo gif image](./demo.gif)

Vue3 please install **2.0.0** or later, vue2 please install **1.x.x** version

## Feature support list

- Load a single 3D model
- Load multiple 3D models simultaneously
- Load multiple 3D models of different types simultaneously
- Set scene width and height
- Set up materials and textures
- Interactive control
- Mouse event
- Light
- Camera position and rotation
- Add label points

## Install vue-3d-loader

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
Vue.use(vue3dLoader);

/* vue3 */
import vue3dLoader from "vue-3d-loader";
createApp(App).use(vue3dLoader).mount("#app");
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

<table>
<tr>
  <th>Prop</th>
  <th style="min-width:100px">Type</th>
  <th>Default</th>
  <th>Value</th>
  <th>Description</th>
</tr>
<tr>
  <td>
  filePath
  </td>
  <td>string | array</td>
  <td>-</td>
  <td>

  ```js
  const filePath = './models/tree.obj'
  /* or */
  const filePath = [
    './models/tree.obj', 
    './models/building.obj'
  ]
  ```

  </td>
  <td>
  
  File path, supports multiple files to be loaded together, note: If each file corresponds to a material, you need to set the material **mtlPath** as an array. The same is true for image textures, which need to be set to **textureImage** as an array
  </td>
</tr>
<tr>
  <td>
  mtlPath
  </td>
  <td>string | array</td>
  <td>-</td>
  <td>

  ```js
  const mltPath = './models/tree.mlt'
  /* or */
  const mltPath = [
    './models/tree.mlt',
    './models/building.mlt'
  ]
  ```

  </td>
  <td>

  Material path, supports multiple materials to be loaded together, set this parameter to an array, you must set **filePath** to an array
  </td>
</tr>
<tr>
  <td>
  textureImage
  </td>
  <td>string | array</td>
  <td>-</td>
  <td>

  ```js
  const textureImage = './texture/tree.jpg'
  /* or */
  const textureImage = [
    './texture/tree.jpg',
    null, 
    './building.png'
  ]
  ```

  </td>
  <td>

  jpg/png texture, if is array, **filePath** must be set to an array
  </td>
</tr>
<tr>
  <td>
  width
  </td>
  <td>number</td>
  <td>parent element width</td>
  <td>100</td>
  <td>
  Scene width
  </td>
</tr>
<tr>
  <td>
  height
  </td>
  <td>number</td>
  <td>parent element height</td>
  <td>100</td>
  <td>
  Scene height
  </td>
</tr>
<tr>
  <td>
  position
  </td>
  <td>object</td>
  <td>-</td>
  <td>
  
  ```js
  const position = {x:0, y:0, z:0}
  ```

  </td>
  <td>
  Model position coordinates
  </td>
</tr>
<tr>
  <td>
  rotation
  </td>
  <td>object</td>
  <td>-</td>
  <td>
  
  ```js
  const rotation = {x:0, y:0, z:0}
  ```

  </td>
  <td>
  Model rotation coordinates
  </td>
</tr>
<tr>
  <td>
  cameraPosition
  </td>
  <td>object</td>
  <td>{x:0, y:0, z:0}</td>
  <td>
  
  ```js
  const cameraPosition = {x:0, y:0, z:0}
  ```

  </td>
  <td>
  Camera position coordinates
  </td>
</tr>
<tr>
  <td>
  cameraRotation
  </td>
  <td>object</td>
  <td>{x:0, y:0, z:0}</td>
  <td>
  
  ```js
  const cameraRotation = {x:0, y:0, z:0}
  ```

  </td>
  <td>
  Camera rotation coordinates
  </td>
</tr>
<tr>
  <td>
  scale
  </td>
  <td>object</td>
  <td>{x:1, y:1, z:1}</td>
  <td>
  
  ```js
  const scale = {x:1, y:2, z:1}
  ```

  </td>
  <td>
  Model scale
  </td>
</tr>
<tr>
  <td>
  lights
  </td>
  <td>array</td>
  <td>[{
        type: "AmbientLight",
        color: 0xaaaaaa,
      },
      {
        type: "DirectionalLight",
        position: { x: 1, y: 1, z: 1 },
        color: 0xffffff,
        intensity: 0.8,
      }]</td>
  <td>
  
  ```js
  const lights = [
    { 
      type: "AmbientLight", 
      color: "red", 
    }, 
    { 
      type: "DirectionalLight", 
      position: { x: 100, y: 10, z: 100 }, 
      color: "green", 
      intensity: 0.8, 
    }, 
    { 
      type: "PointLight", 
      color: "#000000", 
      position: { x: 200, y: -200, z: 100 }, 
      intensity: 1 
    }, 
    { 
      type: "HemisphereLight",
      skyColor: "#00FF00",
      groundColor: "#000000",
      position: { x: 200, y: -200, z: 100 }
    }
  ]
  ```

  </td>
  <td>
  Lights is array, type AmbientLight | DirectionalLight | PointLight | HemisphereLight
  </td>
</tr>
<tr>
  <td>
  backgroundColor
  </td>
  <td>number | string</td>
  <td>0xffffff</td>
  <td>
  
  ```js
  const bgColor = 0xff00ff
  /* or */
  const bgColor = 'red'
  /* or */
  const bgColor = '#000000'
  /* or */
  const bgColor = 'rgba(0, 0, 0, 0.5)'
  ```

  </td>
  <td>
  Scene background color
  </td>
</tr>
<tr>
  <td>
  backgroundAlpha
  </td>
  <td>number</td>
  <td>1</td>
  <td>
  
  ```js
  const bgAlpha = 0.5
  ```

  </td>
  <td>
  Background transparency. value range 0-1
  </td>
</tr>
<tr>
  <td>
  controlsOptions
  </td>
  <td>object</td>
  <td>-</td>
  <td>-</td>
  <td>

  Control parameter [OrbitControls Properties](https://threejs.org/docs/#examples/en/controls/OrbitControls)
  </td>
</tr>
<tr>
  <td>
  crossOrigin
  </td>
  <td>string</td>
  <td>anonymous</td>
  <td>anonymous | use-credentials</td>
  <td>
  Cross-domain configuration.
  </td>
</tr>
<tr>
  <td>
  requestHeader
  </td>
  <td>object</td>
  <td>anonymous</td>
  <td>
  
  ```js
  const headers = { 
    'Authorization': 'Bearer token'
  }
  ```

  </td>
  <td>
  Set request header.
  </td>
</tr>
<tr>
  <td>
  outputEncoding
  </td>
  <td>string</td>
  <td>linear</td>
  <td>linear or sRGB</td>
  <td>

  linear is LinearEncoding, sRGB is sRGBEncoding (sRGBEncoding can restore material color better).
  Renderer's output encoding [WebGLRenderer OutputEncoding](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer.outputEncoding)
  </td>
</tr>
<tr>
  <td>
  webGLRendererOptions
  </td>
  <td>object</td>
  <td>{ antialias: true, alpha: true }</td>
  <td>-</td>
  <td>

  WebGLRenderer options [WebGLRenderer Parameters](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer)
  </td>
</tr>
<tr>
  <td>
  showFps
  </td>
  <td>boolean</td>
  <td>false</td>
  <td>-</td>
  <td>

  Show stats infomation
  </td>
</tr>
<tr>
  <td>
  clearScene
  </td>
  <td>boolean</td>
  <td>false</td>
  <td>-</td>
  <td>Clear scene</td>
</tr>
<tr>
  <td>
  parallelLoad
  </td>
  <td>boolean</td>
  <td>false</td>
  <td>-</td>
  <td>
  
  Enable/disable parallel load models (useful only for multi-model loading). **Use this attribute, the process event will be unpredictable**
  </td>
</tr>
<tr>
  <td>
  labels
  </td>
  <td>array</td>
  <td>-</td>
  <td>
  
  ```js
  const labels = [
    {
      image: "", 
      text: "", 
      textStyle: { 
        fontFamily: "Arial", 
        fontSize: 18, 
        fontWeight: "normal", 
        lineHeight: 1, 
        color: "#ffffff", 
        borderWidth: 8, 
        borderRadius: 4, 
        borderColor: "rgba(0,0,0,1)",
        backgroundColor: "rgba(0, 0, 0, 1)" 
      }, 
      position: {x:0, y:0, z:0}, 
      scale:{x:1, y:1, z:0}, 
      sid: null
    }
  ]
  ```

  </td>
  <td>
  
  Add an image/text label and set image to display the image label. Set text to display text labels. Text styles can be set using textStyle. For examples, see the [examples/add-label.vue](./src/examples/add-label.vue) file
  </td>
</tr>
</table>

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
<vue3dLoader
  filePath="models/collada/stormtrooper/stormtrooper.dae"
></vue3dLoader>
<!-- obj model -->
<vue3dLoader filePath="/obj/1.obj"></vue3dLoader>
```

#### 2. Loading multiple models in the same scene

```vue
<!-- Load multiple models of different type -->
<template>
  <vue3dLoader
    :filePath="filePath"
    :scale="{ x: 0.4, y: 0.4, z: 0.4 }"
    :cameraPosition="{ x: 100, y: 200, z: 30 }"
  />
</template>
<script setup lang="ts">
  import { ref } from "vue";
  const filePath = ref();
  filePath.value = [
    "/models/fbx/Samba Dancing.fbx",
    "models/collada/pump/pump.dae",
  ];
</script>
```

#### 3. Material and texture

```vue
<!-- obj and mtl material -->
<vue3dLoader filePath="/obj/1.obj" mtlPath="/obj/1.mtl"></vue3dLoader>
<!-- fbx and png texture -->
<vue3dLoader filePath="/fbx/1.fbx" textureImage="/fbx/1.png"></vue3dLoader>
```

#### 4. Background color and transparency

```vue
<vue3dLoader
  filePath="/fbx/1.fbx"
  :backgroundAlpha="0.5"
  backgroundColor="red"
></vue3dLoader>
```

#### 5. Controls

```vue
<template>
  <div class="controls">
    <div class="buttons">
      <!-- 禁止右键拖动 -->
      <button @click="enablePan = !enablePan">
        {{ enablePan ? "disable" : "enable" }} translation
      </button>
      <!-- 禁止缩放 -->
      <button @click="enableZoom = !enableZoom">
        {{ enableZoom ? "disable" : "enable" }} zoom
      </button>
      <!-- 禁止缩放 -->
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
<script setup lang="ts">
  import { ref } from "vue";
  const enablePan = ref(true);
  const enableZoom = ref(true);
  const enableRotate = ref(true);
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
<script setup lang="ts">
  import { ref } from "vue";
  const rotation = ref();
  rotation.value = {
    x: -Math.PI / 2,
    y: 0,
    z: 0,
  };
  function onLoad() {
    rotate();
  }
  function rotate() {
    requestAnimationFrame(rotate);
    rotation.value.z -= 0.01;
  }
</script>
```

#### 7. Events

```vue
<template>
  <vue3dLoader filePath="/models/ply/Lucy100k.ply" @mousemove="onMouseMove" />
</template>
<script setup lang="ts">
  import { ref } from "vue";
  const object = ref(null);
  function onMouseMove(event: MouseEvent, intersected: any) {
    if (object.value) {
      (object.value as any).material.color.setStyle("#fff");
    }
    if (intersected) {
      object.value = intersected.object;
      (object.value as any).material.color.setStyle("#13ce66");
    }
  }
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
