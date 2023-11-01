# Point light follow camera

<PointLightFollowCamera />

```vue
<template>
  <vue3dLoader
    filePath="/models/collada/elf/elf.dae"
    :lights="lights"
    :cameraPosition="{ x: 0, y: 10, z: 10 }"
    :pointLightFollowCamera="true"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { vue3dLoader } from "vue-3d-loader";

const lights = ref();
lights.value = [
  {
    type: "pointlight",
    color: "#fff",
    position: { x: 0, y: 0, z: 400 },
    intensity: 1
  }
]
</script>

```
