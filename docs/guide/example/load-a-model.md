# Load a 3D model

:::tip
If the loaded URL does not contain the filetype (file name extension), you need to manually specify the filetype by setting [fileType](api.html#filetype)
:::
<LoadAModel/>

## The load URL contains the file name extension

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

## The loading URL does not contain the file name extension

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
