# vue-3d-loader

vueJS + [threeJS](https://threejs.org/)整合的一个3d展示组件，支持dae/fbx/gltf(glb)/obj/ply/stl/json，并支持同一个场景导入多个不同3D模型，支持mtl材质以及jpg/png等图片纹理

[English](./readme.md)

[点击查看演示](https://king2088.github.io/vue-3d-loader/examples-demo/index.html)

演示动画

![demo gif image](./demo.gif)

vue3请安装**2.0.0**及以上版本，vue2请安装**1.x.x**版本

## 功能支持列表

- 加载单个3D模型
- 同时加载多个3D模型
- 同时加载多个不同类型3D模型
- 加载Draco压缩gltf模型(使用方法请查看API)
- 设置场景宽高
- 设置材质及纹理
- 交互控制
- 鼠标事件
- 灯光
- 相机位置及旋转
- 添加标注点

## 安装

```shell
npm i vue-3d-loader -S
```

或

```shell
yarn add vue-3d-loader
```

## 使用

全局使用，在入口文件中全局安装，代码如下：

```js
/* vue2 */
import vue3dLoader from "vue-3d-loader";
Vue.use(vue3dLoader)

/* vue3 */
import vue3dLoader from "vue-3d-loader";
createApp(App).use(vue3dLoader).mount('#app')
```

非全局使用，在Vue文件中使用如下代码:

```js
import { vue3dLoader } from "vue-3d-loader"; // 注意 vue3dLoader 写在 {...} 内
```

在组件中使用标签`<vue3dLoader></vue3dLoader>`

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

### 属性

| prop                 | type             | default                                                                                                                             | description                                                                                                                                   |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| filePath             | string \| array  | -                                                                                                                                   | 文件路径，支持多个文件一起加载，注意：如果每个文件对应一个材质，需要将材质**mtlPath**设置为数组。图片纹理也一样需要设置**textureImage**为数组 |
| mtlPath              | string \| array  | -                                                                                                                                   | .mtl材质路径，支持多个材质一起加载，设置此参数为数组，必须设置**filePath**为数组                                                              |
| textureImage         | string \| array  | -                                                                                                                                   | jpg/png纹理加载，与**filePath**一一对应，为数组时，必须设置**filePath**为数组                                                                 |
| width                | number           | -                                                                                                                                   | 宽度                                                                                                                                          |
| height               | number           | -                                                                                                                                   | 高度                                                                                                                                          |
| position             | object \| array           | -                                                                                                                                   | 物体位置                                                                                                                                      |
| rotation             | object \| array           | -                                                                                                                                   | 旋转                                                                                                                                          |
| cameraPosition       | object           | { x: 0, y: 0, z: 0 }                                                                                                                | 摄像机位置                                                                                                                                    |
| cameraRotation       | object           | -                                                                                                                                   | 摄像机旋转                                                                                                                                    |
| scale                | object \| array           | { x: 1, y: 1, z: 1 }                                                                                                                | 缩放                                                                                                                                          |
| lights               | array            | [{type: "AmbientLight",color: 0xaaaaaa,},{type: "DirectionalLight",position: { x: 1, y: 1, z: 1 },color: 0xffffff,intensity: 0.8,}] | 灯光，AmbientLight为环境光，DirectionalLight为定向光                                                                                          |
| backgroundColor      | number \| string | 0xffffff                                                                                                                            | 背景颜色0xffffff/#f00/rgb(255,255,255)                                                                                                        |
| backgroundAlpha      | number           | 1                                                                                                                                   | 背景透明度(范围0-1)                                                                                                                           |
| controlsOptions      | object           | -                                                                                                                                   | 控制参数[OrbitControls Properties](https://threejs.org/docs/#examples/en/controls/OrbitControls)                                              |
| crossOrigin          | string           | anonymous                                                                                                                           | 跨域配置anonymous/use-credentials                                                                                                             |
| requestHeader        | object           | -                                                                                                                                   | 设置请求{ 'Authorization: Bearer token' }头                                                                                                   |
| outputEncoding       | string           | liner                                                                                                                | 可选值liner 或 sRGB。 LinearEncoding 线性编码, sRGB 即 sRGBEncoding rgb模式编码（sRGBEncoding能更好的还原材质颜色）。 渲染器的输出编码[WebGLRenderer OutputEncoding](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer.outputEncoding)             |
| webGLRendererOptions | object           | { antialias: true, alpha: true }                                                                                                    | WebGLRenderer可选参数[WebGLRenderer Parameters](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer)                           |
| showFps              | boolean          | false                                                                                                                               | 显示FPS等信息                                                                                                                                 |
| clearScene           | boolean          | false                                                                                                                               | 清空场景中的内容                                                                                                                              |
| parallelLoad         | boolean          | false                                                                                                                               | 开启/关闭并行加载模型（仅在多模型下有效）**注意：使用此属性后，load进度process事件将不可预测**                                                                                                     |
| labels               | object           | {image: "", text: "", textStyle: { fontFamily: "Arial", fontSize: 18, fontWeight: "normal", lineHeight: 1, color: "#ffffff", borderWidth: 8, borderRadius: 4, borderColor: "rgba(0,0,0,1)",backgroundColor: "rgba(0, 0, 0, 1)"  }, position: {x:0, y:0, z:0}, scale:{x:1, y:1, z:0}, sid: null} | 添加图片/文字标签，设置image则显示图片标签。设置text显示文字标签，文字样式通过textStyle进行设置，样例可以查看[examples/add-label.vue](./src/examples/add-label.vue)文件                            |
| autoPlay | boolean | true | 是否开启动画 |
| enableDraco | boolean | false | 加载Gltf draco模型需开启draco解密，开启后需要[下载draco解密库](https://github.com/king2088/vue-3d-loader/blob/master/public/assets/draco.7z)放到默认目录assets中，默认目录为assets/draco/gltf/，如需修改默认目录，请查看参数dracoDir。[关于draco请查阅](https://threejs.org/docs/index.html?q=draco#examples/en/loaders/DRACOLoader) |
| dracoDir | string | assets/draco/gltf/ | draco解密库默认目录，可自行修改|
| enableMousemove | boolean | false | 是否开启mousemove事件。**慎用mousemove事件，mousemove事件可能会导致性能问题。** |

### 事件

| event                        | description                            |
| ---------------------------- | -------------------------------------- |
| mousedown(event, intersects) | 鼠标按下, intersect:当前相交最近的物体 |
| mousemove(event, intersects) | 鼠标移动, intersect:当前相交最近的物体 |
| mouseup(event, intersects)   | 鼠标放开, intersect:当前相交最近的物体 |
| click(event, intersects)     | 点击, intersect:当前相交最近的物体     |
| load                         | 加载模型事件                           |
| process(event, fileIndex)    | 加载进度, fileIndex:当前加载模型的索引 |
| error(event)                 | 错误事件                               |

### 使用样例

#### 1. 加载一个3D模型

目前支持dae/fbx/gltf(glb)/obj/ply/stl中任意一种

```vue
<!-- 加载fbx模型 -->
<vue3dLoader filePath="models/collada/stormtrooper/stormtrooper.dae"></vue3dLoader>
<!-- 加载obj模型 -->
<vue3dLoader filePath="/obj/1.obj"></vue3dLoader>
```

#### 2. 同一个场景中加载多个模型

```vue
<!-- 可同时加载多个不同种类的模型，支持为每一个单独设置位置、缩放及旋转 -->
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

#### 3. 材质及纹理加载

```vue
<!-- obj加载mtl材质 -->
<vue3dLoader filePath="/obj/1.obj" mtlPath="/obj/1.mtl" ></vue3dLoader>
<!-- fbx图片纹理加载 -->
<vue3dLoader filePath="/fbx/1.fbx" textureImage="/fbx/1.png" ></vue3dLoader>
```

#### 4. 背景颜色及透明度

```vue
<vue3dLoader filePath="/fbx/1.fbx" :backgroundAlpha="0.5" backgroundColor="red"></vue3dLoader>
```

#### 5. 交互控制controls

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

#### 6. 旋转模型

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

#### 7. 事件

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

#### 8. 加载draco模型

此功能需要先下载draco库存储与本地项目的静态文件夹内，才可以正常加载，下载地址：<https://github.com/king2088/vue-3d-loader/blob/master/public/assets/draco.7z>

```vue
<template>
  <vue3dLoader
    filePath="/models/gltf/LittlestTokyo.glb"
    :cameraPosition="{ x: 10, y: 700, z: 1000 }"
    :enableDraco="true"
    dracoDir="/draco/"
    outputEncoding="sRGB"
  />
</template>
```

#### 9. 更多演示

[点我查看更多演示代码](https://github.com/king2088/vue-3d-loader/tree/master/src/examples)

### 即将到来

- [x] 支持Vue3

### bug提交

[issues](https://github.com/king2088/vue-3d-loader/issues)

### 感谢

本插件参考[vue-3d-model](https://github.com/hujiulong/vue-3d-model)实现
