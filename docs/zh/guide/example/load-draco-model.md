# 加载Draco压缩模型

:::tip
使用此功能需要下载[draco解码器](https://github.com/king2088/vue-3d-loader/blob/master/public/assets/draco.7z)，并解压放到本地项目assets目录中，draco路径应为：“assets/draco/gltf/”
:::
<LoaderDracoModel/>

```vue
<template>
  <vue3dLoader
    filePath="/models/gltf/LittlestTokyo.glb"
    :cameraPosition="{ x: 10, y: 700, z: 1000 }"
    :enableDraco="true"
    outputEncoding="sRGB"
    :height="350"
    backgroundColor="#F2F2F2"
    dracoDir="../../assets/draco/gltf/"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>
```
