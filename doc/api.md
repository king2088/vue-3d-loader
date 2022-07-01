# API

## 属性

| prop                 | type             | default                          | description                                                                                                                       |
| -------------------- | ---------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| filePath             | string \| array  | -                                | 文件路径，支持多个文件一起加载，注意：如果有每一个文件都对应一个材质，则也需要将材质对象**mtlPath**设置为对应的数组               |
| mtlPath              | string \| array  | -                                | .mtl材质路径，支持多个材质一起加载，设置此参数为数组，必须设置**filePath**为数组                                                  |
| textureImage         | string \| array  | -                                | jpg/png纹理加载，与**filePath**一一对应，为数组时，必须设置**filePath**为数组                                                     |
| width                | number           | -                                | 宽度                                                                                                                              |
| height               | number           | -                                | 高度                                                                                                                              |
| position             | object           | { x: 0, y: 0, z: 0 }             | 物体位置                                                                                                                          |
| rotation             | object           | { x: 0, y: 0, z: 0 }             | 旋转                                                                                                                              |
| cameraPosition       | object           | { x: 0, y: 0, z: 0 }             | 摄像机位置                                                                                                                        |
| cameraRotation       | object           | { x: 0, y: 0, z: 0 }             | 摄像机旋转                                                                                                                        |
| scale                | object           | { x: 1, y: 1, z: 1 }             | 缩放                                                                                                                              |
| lights               | array            | -                                | 灯光                                                                                                                              |
| backgroundColor      | number \| string | 0xffffff                         | 背景颜色0xffffff/#f00/rgb(255,255,255)                                                                                            |
| backgroundAlpha      | number           | 1                                | 背景透明度(范围0-1)                                                                                                               |
| controlsOptions      | object           | -                                | 控制参数[OrbitControls Properties](https://threejs.org/docs/#examples/en/controls/OrbitControls)                                  |
| crossOrigin          | string           | anonymous                        | 跨域配置anonymous/use-credentials                                                                                                 |
| requestHeader        | object           | -                                | 设置请求{ 'Authorization: Bearer token' }头                                                                                       |
| outputEncoding       | number           | THREE.LinearEncoding             | 渲染器的输出编码[WebGLRenderer OutputEncoding](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer.outputEncoding) |
| webGLRendererOptions | object           | { antialias: true, alpha: true } | WebGLRenderer可选参数[WebGLRenderer Parameters](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer)               |
| showFps              | boolean          | false                            | 显示FPS等信息                                                                                                                     |

## 事件

| event                        | description                                |
| ---------------------------- | ------------------------------------------ |
| mousedown(event, intersects) | 鼠标按下, intersect:当前相交最近的物体     |
| mousemove(event, intersects) | 鼠标移动, intersect:当前相交最近的物体     |
| mouseup(event, intersects)   | 鼠标放开, intersect:当前相交最近的物体     |
| click(event, intersects)     | 点击, intersect:当前相交最近的物体         |
| process(event, fileIndex)    | 加载进度, fileIndex:当前正在加载第几个文件 |
| error(event)                 | 错误事件                                   |
