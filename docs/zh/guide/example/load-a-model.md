# 加载一个模型

:::tip
如果加载的URL中不包含文件类型（后缀名），需要通过设置[fileType](api.html#filetype)手动指定文件类型
:::
<LoadAModel/>

## 加载URL中包含文件后缀名

```vue
<template>
  <vue3dLoader
    filePath="/models/collada/stormtrooper/stormtrooper.dae"
    :cameraPosition="{ x: 1, y: -5, z: -20 }"
    :height="350"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>
```

## 加载URL不包含文件后缀名

```vue
<template>
  <vue3dLoader
    filePath="/models/collada/stormtrooper/3asd-y83j-okdl-e58y"
    fileType="dae"
    :cameraPosition="{ x: 1, y: -5, z: -20 }"
    :height="350"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>
```
