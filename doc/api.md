# API
## 属性

|prop|type|default|example|description|
|----|----|----|----|----|
|filePath|string \| array|-|./exapmle.obj|文件路径|
|width|number|-|300|宽度|
|height|number|-|300|高度|
|position|object|{ x: 0, y: 0, z: 0 }|{ x: 100, y: 20, z: -10 }|物体位置|
|rotation|object|{ x: 0, y: 0, z: 0 }|{ x: Math.PI / 2, y: 0, z: - Math.PI / 4 }|旋转|
|cameraPosition|object|{ x: 0, y: 0, z: 0 }|{ x: 1, y: 2, z: -3 }|摄像机位置|
cameraRotation|object|{ x: 0, y: 0, z: 0 }|	{ x: 3, y: 2, z: -1 }|摄像机旋转|
|scale|object|{ x: 1, y: 1, z: 1 }|{ x: 2, y: 2, z: 3 }|缩放|
|lights|array|-||灯光|
|backgroundColor|number \| string|0xffffff|0xffffff/#f00/rgb(255,255,255)|背景颜色|
|backgroundAlpha|number|1|0.5|背景透明度|
|controlsOptions|object|-|[OrbitControls Properties](https://threejs.org/docs/#examples/en/controls/OrbitControls)|控制参数|
|crossOrigin|string|anonymous|anonymous/use-credentials|跨域配置|
|requestHeader|object|-|{ 'Authorization: Bearer token' }|设置请求头|
|outputEncoding|number|THREE.LinearEncoding|[WebGLRenderer OutputEncoding](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer.outputEncoding)|渲染器的输出编码|
|webGLRendererOptions|object|{ antialias: true, alpha: true }|[WebGLRenderer Parameters](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer)|WebGLRenderer可选参数|
|showFps|boolean|false|-|显示FPS等信息|

## 事件
|event|description|
|--|--|
|mousedown|鼠标按下|
|mousemove|鼠标移动|
|mouseup|鼠标放开|
|click|点击|
|process|加载进度|
|error|错误事件|