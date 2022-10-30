<template>
  <vue3dLoader
    filePath="/models/collada/stormtrooper/stormtrooper.dae"
    :cameraPosition="{ x: 1, y: -5, z: -20 }"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>