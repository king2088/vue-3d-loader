# API

## filePath

| Type            | Default | Required |
| --------------- | ------ | -------- |
| string \| array | -      | Yes       |

1. Description

File path, supports multiple files to be loaded together.

::: tip
note: If each file corresponds to a material, you need to set the material mtlPath as an array. The same is true for image textures, which need to be set to **textureImage** as an array
:::

2. Use

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

| Type            | Default | Required |
| --------------- | ------ | -------- |
| string \| array | -      | No       |

1. Description

File type is the 3d model(s) file extension, is used for filePath(http url) without file extensions. Is used together with filePath. If filePath is an array, this parameter must be an array.

2. Use

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

| Type            | Default | Required |
| --------------- | ------ | -------- |
| string \| array | -      | No       |

1. Description

Material path, supports multiple materials to be loaded together, set this parameter to an array, you must set filePath to an array

2. Use

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

| Type            | Default | Required |
| --------------- | ------ | -------- |
| string \| array | -      | No       |

1. Description

jpg/png texture, if is array, filePath must be set to an array

2. Use

```javascript
const textureImage = './texture/tree.jpg'
/* or */
const textureImage = ['./texture/tree.jpg',null,'./building.png']
// template
<vue3dLoader :textureImage="textureImage"/>
```

## width

| Type            | Default | Required |
| ------ | ---------- | -------- |
| number | width | No       |

1. Description

Scene width

2. Use

```vue
// template
<vue3dLoader :width="500" />
```

## height

| Type            | Default | Required |
| ------ | ---------- | -------- |
| number | height | No       |

1. Description

Scene height

2. Use

```vue
// template
<vue3dLoader :height="500" />
```

## position

| Type            | Default | Required |
| --------------- | --------------- | -------- |
| object \| array | {x:0, y:0, z:0} | No       |

1. Description

Model position coordinates, position use array type when filePath is an array

2. Use

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

| Type            | Default | Required |
| --------------- | --------------- | -------- |
| object \| array | {x:0, y:0, z:0} | No       |

1. Description

Model rotation coordinates, rotation use array type when filePath is an array

2. Use

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

| Type            | Default | Required |
| ------ | --------------- | -------- |
| object | {x:0, y:0, z:0} | No       |

1. Description

Camera position coordinates

2. Use

```vue
<vue3dLoader :cameraPosition="{ x: 0, y: 0, z: 0 }" />
```

## cameraRotation

| Type            | Default | Required |
| ------ | --------------- | -------- |
| object | {x:0, y:0, z:0} | No       |

1. Description

Camera rotation coordinates

2. Use

```vue
<vue3dLoader :cameraRotation="{ x: 0, y: 0, z: 0 }" />
```

## scale

| Type            | Default | Required |
| --------------- | --------------- | -------- |
| object \| array | {x:1, y:1, z:1} | No       |

1. Description

Model scale, scale use array type when filePath is an array

2. Use

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

| Type            | Default | Required |
| ----- | ----------------------------------------------------------------------------------------------------------------------- | -------- |
| array | `[{type:"AmbientLight",color: 0xaaaaaa},{type:"DirectionalLight",position:{x:1,y:1,z:1},color:0xffffff,intensity:0.8}]` | No       |

1. Description

Lights is array, type AmbientLight | DirectionalLight | PointLight | HemisphereLight

2. Use

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

| Type            | Default | Required |
| ---------------- | -------- | -------- |
| number \| string | 0xffffff | No       |

1. Description

Scene background color

::: tip
Supports hexadecimal color, RGB, and color name
:::

2. Use

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

| Type            | Default | Required |
| ------ | ------ | -------- |
| number | 1      | No       |

1. Description

Background transparency. value range 0-1

2. Use

```vue
<vue3dLoader :backgroundAlpha="0.5" />
```

## controlsOptions

| Type            | Default | Required |
| ------ | ------ | -------- |
| object | -      | No       |

1. Description

Control parameter [OrbitControls Properties](https://threejs.org/docs/#examples/en/controls/OrbitControls)

## crossOrigin

| Type            | Default | Required |
| ------ | --------- | -------- |
| string | anonymous | No       |

1. Description

Cross-domain configuration. Available value : anonymous | use-credentials

## requestHeader

| Type            | Default | Required |
| ------ | ------ | -------- |
| object | -      | No       |

1. Description

Set request header.

2. Use

```javascript
const headers = {
  'Authorization': 'Bearer token'
}
// template
<vue3dLoader :requestHeader="headers"/>
```

## outputEncoding

| Type            | Default | Required |
| ------ | ------ | -------- |
| string | linear | No       |

1. Description

linear is LinearEncoding, sRGB is sRGBEncoding (sRGBEncoding can restore material color better).

::: tip
Renderer's output encoding [WebGLRenderer OutputEncoding](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer.outputEncoding)
:::

2. Use

```javascript
const headers = {
  'Authorization': 'Bearer token'
}
// template
<vue3dLoader :requestHeader="headers"/>
```

## webGLRendererOptions

| Type            | Default | Required |
| ------ | ---------------------------------- | -------- |
| object | `{ antialias: true, alpha: true }` | No       |

1. Description

WebGLRenderer options [WebGLRenderer Parameters](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer)

## showFps

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean | false  | No       |

1. Description

Show stats infomation

2. Use

```vue
<vue3dLoader :showFps="true" />
```

## clearScene

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean | false  | No       |

1. Description

Clear scene

2. Use

```vue
<vue3dLoader :clearScene="true" />
```

## parallelLoad

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean | false  | No       |

1. Description

Enable/disable parallel load models (useful only for multi-model loading).

::: tip
Use this attribute, the process event will be unpredictable
:::
2. Use

```vue
<vue3dLoader :parallelLoad="true" />
```

## labels

| Type            | Default | Required |
| ----- | ------ | -------- |
| array | -      | No       |

1. Description

Add an image/text label and set image to display the image label. Set text to display text labels. Text styles can be set using textStyle. For examples, see the [examples/add-label.vue](https://github.com/king2088/vue-3d-loader/blob/master/src/examples/add-label.vue) file.

2. Use

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

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean | true   | No       |

1. Description

Play/stop the 3d model animations

2. Use

```vue
<vue3dLoader :autoPlay="false" />
```

## enableDraco

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean | false  | No       |

1. Description

Load the Gltf Draco model, you need to enable Draco decryption. After the Draco decryption library is enabled, you need to [download Draco decryption library](https://github.com/king2088/vue-3d-loader/blob/master/public/assets/draco.7z)and put it into the default directory assets. The default directory is **assets/draco/gltf/** */. If you want to change the default draco directory, use dracoDir parameter. <i>[dracoDir](#dracodir)</i>。

::: tip
[About draco and threeJS](https://threejs.org/docs/index.html?q=draco#examples/en/loaders/DRACOLoader)
:::

2. Use

```vue
<vue3dLoader :enableDraco="true" />
```

## dracoDir

| Type            | Default | Required |
| ------ | ------------------ | -------- |
| string | assets/draco/gltf/ | No       |

1. Description

Draco decryption library default directory, you can modified it.

2. Use

```vue
<vue3dLoader dracoDir="/draco/" />
```

## intersectRecursive

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean | false  | No       |

1. Description

If true, it also checks all descendants. Otherwise it only checks intersection with the object.

::: tip
If the 3D object fetched by the mouse event is null, try to enable this option. [More](https://threejs.org/docs/index.html?q=raycaster#api/en/core/Raycaster.intersectObject)
:::

2. Use

```vue
<vue3dLoader :intersectRecursive="true" />
```

## enableDamping

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean | false  | No       |

1. Description

Set [enableDamping](https://threejs.org/docs/index.html#examples/zh/controls/OrbitControls.enableDamping) to true to enable damping (inertia), which can be used to give a sense of weight to the controls.

2. Use

```vue
<vue3dLoader :enableDamping="true" />
```

## dampingFactor

| Type            | Default | Required |
| ------- | ------ | -------- |
| number | -  | No       |

1. Description

The damping inertia used if enableDamping is set to true. [dampingFactor](https://threejs.org/docs/index.html#examples/zh/controls/OrbitControls.dampingFactor)

2. Use

```vue
<vue3dLoader :enableDamping="true" :dampingFactor="0.05" />
```

## verticalCtrl

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean \| object | false  | No       |

1. Description

If true，only enable vertical rotation of the camera

2. Use

```vue
<vue3dLoader :verticalCtrl="true" />
```

## horizontalCtrl

| Type            | Default | Required |
| ------- | ------ | -------- |
| boolean \| object | false  | No       |

1. Description

If true，only enable horizontal rotation of the camera

2. Use

```vue
<vue3dLoader :horizontalCtrl="true" />
```

## plyMaterial

| Type   | Default | Required |
| ------- | ------ | -------- |
| string | MeshStandardMaterial  | No       |

1. Description

plyMaterial default value is `MeshStandardMaterial`, for ply model material，support `MeshStandardMaterial` and `MeshBasicMaterial`.  
[MeshStandardMaterial doc](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)  
[MeshBasicMaterial doc](https://threejs.org/docs/?q=MeshBasicMaterial#api/en/materials/MeshBasicMaterial)。  

2. Use

```vue
<vue3dLoader
  filePath="/models/ply/Lucy100k.ply"
  plyMaterial="MeshStandardMaterial"
/>
```
## enableAxesHelper

| Type    | Default | Required |
| ------- | ------ | -------- |
| boolean | false  | No       |

1. Description

enableAxesHelper is show axes in scene

2. Use

```vue
<vue3dLoader
  filePath="/models/ply/Lucy100k.ply"
  :enableAxesHelper="true"
/>
```

## axesHelperSize

| Type    | Default | Required |
| ------- | ------ | -------- |
| number | 100  | No       |

1. Description

axesHelperSize set axes size

2. Use

```vue
<vue3dLoader
  filePath="/models/ply/Lucy100k.ply"
  :axesHelperSize="500"
/>
```

## enableGridHelper

| Type    | Default | Required |
| ------- | ------ | -------- |
| boolean | false  | No       |

1. Description

enableGridHelper show grid in scene

2. Use

```vue
<vue3dLoader
  filePath="/models/ply/Lucy100k.ply"
  :enableGridHelper="true"
/>
```