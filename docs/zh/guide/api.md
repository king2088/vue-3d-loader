# API

## filePath

| 类型            | 默认值 | 是否必填 |
| --------------- | ------ | -------- |
| string \| array | -      | 是       |

1. 描述

文件路径，支持多个文件一起加载.

::: tip
如果每个文件对应一个材质，需要将材质 mtlPath 设置为数组。图片纹理也一样需要设置 textureImage 为数组
:::

2. 使用样例

```javascript
// A file. String type
const filePath = './models/tree.obj'
/* or */
// multiple files. Array type
const filePath = ['./models/tree.obj', './models/building.obj']
// template
<vue3dLoader :filePath="filePath"/>
```

## fileType

| 类型            | 默认值 | 是否必填 |
| --------------- | ------ | -------- |
| string \| array | -      | 否       |

1. 描述

文件类型，主要用于无法通过 url 判断 3D 文件类型时，可手动设置文件类型

2. 使用样例

```javascript
// String type
const fileType = 'obj'
/* or */
// multiple type. Array type
const fileType = ['obj', 'gltf']
// template
<vue3dLoader :fileType="fileType"/>
```

## mtlPath

| 类型            | 默认值 | 是否必填 |
| --------------- | ------ | -------- |
| string \| array | -      | 否       |

1. 描述

.mtl 材质路径，支持多个材质一起加载，设置此参数为数组，必须设置 filePath 为数组

2. 使用样例

```javascript
const mltPath = './models/tree.mlt'
/* or */
const mltPath = [
  './models/tree.mlt',
  './models/building.mlt'
]
// template
<vue3dLoader :mltPath="mltPath"/>
```

## textureImage

| 类型            | 默认值 | 是否必填 |
| --------------- | ------ | -------- |
| string \| array | -      | 否       |

1. 描述

jpg/png 材质路径，支持多个材质一起加载，设置此参数为数组，必须设置 filePath 为数组

2. 使用样例

```javascript
const textureImage = './texture/tree.jpg'
/* or */
const textureImage = ['./texture/tree.jpg',null,'./building.png']
// template
<vue3dLoader :textureImage="textureImage"/>
```

## width

| 类型   | 默认值     | 是否必填 |
| ------ | ---------- | -------- |
| number | 父元素宽度 | 否       |

1. 描述

场景宽度

2. 使用样例

```vue
// template
<vue3dLoader :width="500" />
```

## height

| 类型   | 默认值     | 是否必填 |
| ------ | ---------- | -------- |
| number | 父元素高度 | 否       |

1. 描述

场景高度

2. 使用样例

```vue
// template
<vue3dLoader :height="500" />
```

## position

| 类型            | 默认值          | 是否必填 |
| --------------- | --------------- | -------- |
| object \| array | {x:0, y:0, z:0} | 否       |

1. 描述

模型位置坐标，filePath 类型为 array 时可用 array

2. 使用样例

```javascript
const position = {x:0, y:0, z:0}
// or
const position = [
  {x:10, y:10, z:10},
  {x:50, y:50, z:50}
]
// template
<vue3dLoader :position="position"/>
```

## rotation

| 类型            | 默认值          | 是否必填 |
| --------------- | --------------- | -------- |
| object \| array | {x:0, y:0, z:0} | 否       |

1. 描述

模型旋转坐标，filePath 类型为 array 时可用 array

2. 使用样例

```javascript
const rotation = {x:0, y:0, z:0}
// or
const rotation = [
  {x: 10, y:20, z:30},
  {x: 0, y: 16, z: 20}
]
// template
<vue3dLoader :rotation="rotation"/>
```

## cameraPosition

| 类型   | 默认值          | 是否必填 |
| ------ | --------------- | -------- |
| object | {x:0, y:0, z:0} | 否       |

1. 描述

摄像机位置坐标

2. 使用样例

```vue
<vue3dLoader :cameraPosition="{ x: 0, y: 0, z: 0 }" />
```

## cameraRotation

| 类型   | 默认值          | 是否必填 |
| ------ | --------------- | -------- |
| object | {x:0, y:0, z:0} | 否       |

1. 描述

摄像机旋转坐标

2. 使用样例

```vue
<vue3dLoader :cameraRotation="{ x: 0, y: 0, z: 0 }" />
```

## scale

| 类型            | 默认值          | 是否必填 |
| --------------- | --------------- | -------- |
| object \| array | {x:1, y:1, z:1} | 否       |

1. 描述

模型比例，filePath 类型为 array 时可用 array

2. 使用样例

```javascript
const scale = {x:1, y:2, z:1}
// or
const scale = [
  {x:1, y:2, z:1},
  {x:0.5, y:0.5, z:0.5}
]
// template
<vue3dLoader :scale="scale"/>
```

## lights

| 类型  | 默认值                                                                                                                  | 是否必填 |
| ----- | ----------------------------------------------------------------------------------------------------------------------- | -------- |
| array | `[{type:"AmbientLight",color: 0xaaaaaa},{type:"DirectionalLight",position:{x:1,y:1,z:1},color:0xffffff,intensity:0.8}]` | 否       |

1. 描述

灯光为数组，type 为 环境光(AmbientLight) | 方向光(DirectionalLight) | 点光(PointLight) | 半球光(HemisphereLight)

2. 使用样例

```javascript
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
// template
<vue3dLoader :lights="lights"/>
```

## backgroundColor

| 类型             | 默认值   | 是否必填 |
| ---------------- | -------- | -------- |
| number \| string | 0xffffff | 否       |

1. 描述

场景背景色

::: tip
支持 16 进制颜色、RGB、颜色名称
:::

2. 使用样例

```javascript
const bgColor = 0xff00ff
/* or */
const bgColor = 'red'
/* or */
const bgColor = '#000000'
/* or */
const bgColor = 'rgba(0, 0, 0, 0.5)'
// template
<vue3dLoader :bgColor="bgColor"/>
```

## backgroundAlpha

| 类型   | 默认值 | 是否必填 |
| ------ | ------ | -------- |
| number | 1      | 否       |

1. 描述

场景背景透明度, 值范围 0-1

2. 使用样例

```vue
<vue3dLoader :backgroundAlpha="0.5" />
```

## controlsOptions

| 类型   | 默认值 | 是否必填 |
| ------ | ------ | -------- |
| object | -      | 否       |

1. 描述

控制参数 [OrbitControls Properties](https://threejs.org/docs/#examples/en/controls/OrbitControls)

## crossOrigin

| 类型   | 默认值    | 是否必填 |
| ------ | --------- | -------- |
| string | anonymous | 否       |

1. 描述

跨域配置，可取值 anonymous | use-credentials

## requestHeader

| 类型   | 默认值 | 是否必填 |
| ------ | ------ | -------- |
| object | -      | 否       |

1. 描述

设置请求头

2. 使用样例

```javascript
const headers = {
  'Authorization': 'Bearer token'
}
// template
<vue3dLoader :requestHeader="headers"/>
```

## outputEncoding

| 类型   | 默认值 | 是否必填 |
| ------ | ------ | -------- |
| string | linear | 否       |

1. 描述

输出编码，可取值为 liner 或 sRGB。linear 是 LinearEncoding 线性编码, sRGB 即 sRGBEncoding rgb 模式编码（sRGBEncoding 能更好的还原材质颜色）。

::: tip
渲染器的输出编码 [WebGLRenderer OutputEncoding](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer.outputEncoding)
:::

2. 使用样例

```javascript
const headers = {
  'Authorization': 'Bearer token'
}
// template
<vue3dLoader :requestHeader="headers"/>
```

## webGLRendererOptions

| 类型   | 默认值                             | 是否必填 |
| ------ | ---------------------------------- | -------- |
| object | `{ antialias: true, alpha: true }` | 否       |

1. 描述

WebGLRenderer 可选参数 [WebGLRenderer Parameters](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer)

## showFps

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | false  | 否       |

1. 描述

显示 FPS 等信息

2. 使用样例

```vue
<vue3dLoader :showFps="true" />
```

## clearScene

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | false  | 否       |

1. 描述

清空场景中的内容

2. 使用样例

```vue
<vue3dLoader :clearScene="true" />
```

## parallelLoad

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | false  | 否       |

1. 描述

开启/关闭并行加载模型（仅在多模型下有效）

::: tip
使用此属性后，load 进度 process 事件将不可预测
:::
2. 使用样例

```vue
<vue3dLoader :parallelLoad="true" />
```

## labels

| 类型  | 默认值 | 是否必填 |
| ----- | ------ | -------- |
| array | -      | 否       |

1. 描述

添加图片/文字标签，设置 image 则显示图片标签。设置 text 显示文字标签，文字样式通过 textStyle 进行设置，样例可以查看[examples/add-label.vue](https://github.com/king2088/vue-3d-loader/blob/master/src/examples/add-label.vue)文件

2. 使用样例

```javascript
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
// template
<vue3dLoader :labels="labels"/>
```

## autoPlay

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | true   | 否       |

1. 描述

播放/停止动画

2. 使用样例

```vue
<vue3dLoader :autoPlay="false" />
```

## enableDraco

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | false  | 否       |

1. 描述

加载 Gltf draco 模型需开启 draco 解密，开启后需要[下载 draco 解密库](https://github.com/king2088/vue-3d-loader/blob/master/public/assets/draco.7z)放到默认目录 assets 中，默认目录为 assets/draco/gltf/，如需修改默认目录，请查看参数<i>[dracoDir](#dracodir)</i>。

::: tip
[关于 draco 请查阅](https://threejs.org/docs/index.html?q=draco#examples/en/loaders/DRACOLoader)
:::

2. 使用样例

```vue
<vue3dLoader :enableDraco="true" />
```

## dracoDir

| 类型   | 默认值             | 是否必填 |
| ------ | ------------------ | -------- |
| string | assets/draco/gltf/ | 否       |

1. 描述

draco 解密库默认目录，可自行修改

2. 使用样例

```vue
<vue3dLoader dracoDir="/draco/" />
```

## intersectRecursive

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | false  | 否       |

1. 描述

若为 true，则同时也会检测所有物体的后代。否则将只会检测对象本身的相交部分。

::: tip
如发现鼠标事件拿到的 3D 对象是 null，请尝试开启此项。[更多信息点此查阅](https://threejs.org/docs/index.html?q=raycaster#api/en/core/Raycaster.intersectObject)
:::

2. 使用样例

```vue
<vue3dLoader :intersectRecursive="true" />
```

## enableDamping

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | false  | 否       |

1. 描述

[enableDamping](https://threejs.org/docs/index.html#examples/zh/controls/OrbitControls.enableDamping)设置为true以启用阻尼（惯性），这将给控制器带来重量感。

2. 使用样例

```vue
<vue3dLoader :enableDamping="true" />
```

## dampingFactor

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| number | -  | 否       |

1. 描述

enableDamping必须为true，此选项才有效。[dampingFactor](https://threejs.org/docs/index.html#examples/zh/controls/OrbitControls.dampingFactor)用于设置阻尼惯性大小。

2. 使用样例

```vue
<vue3dLoader :enableDamping="true" :dampingFactor="0.05" />
```

## verticalCtrl

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean \| object | false  | 否       |

1. 描述

verticalCtrl为true，仅能垂直旋转相机。

2. 使用样例

```vue
<vue3dLoader :verticalCtrl="true" />
```

## horizontalCtrl

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean \| object | false  | 否       |

1. 描述

horizontalCtrl为true，仅能水平旋转相机。

2. 使用样例

```vue
<vue3dLoader :horizontalCtrl="true" />
```

## plyMaterial

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| string | MeshStandardMaterial  | 否       |

1. 描述

plyMaterial默认值为MeshStandardMaterial，用于ply模型材质修改，支持`MeshStandardMaterial` and `MeshBasicMaterial`两个值。  
[MeshStandardMaterial 文档](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)  
[MeshBasicMaterial 文档](https://threejs.org/docs/?q=MeshBasicMaterial#api/en/materials/MeshBasicMaterial)。  

2. 使用样例

```vue
<vue3dLoader
  filePath="/models/ply/Lucy100k.ply"
  plyMaterial="MeshStandardMaterial"
/>
```

## enableAxesHelper

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | false  | 否       |

1. 描述

enableAxesHelper用于在场景中开启或显示x,y,z轴

2. 使用样例

```vue
<vue3dLoader
  filePath="/models/ply/Lucy100k.ply"
  :enableAxesHelper="true"
/>
```

## axesHelperSize

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| number | 100  | 否       |

1. 描述

axesHelperSize设置x,y,z轴尺寸，默认为100

2. 使用样例

```vue
<vue3dLoader
  filePath="/models/ply/Lucy100k.ply"
  :axesHelperSize="500"
/>
```

## enableGridHelper

| 类型    | 默认值 | 是否必填 |
| ------- | ------ | -------- |
| boolean | false  | 否       |

1. 描述

enableGridHelper在场景中开启或显示网格

2. 使用样例

```vue
<vue3dLoader
  filePath="/models/ply/Lucy100k.ply"
  :enableGridHelper="true"
/>
```