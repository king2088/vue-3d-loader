<template>
  <vue3dLoader
    filePath="/models/gltf/DamagedHelmet.gltf"
    backgroundColor="rgb(216,217,219)"
    :height="600"
    :width="600"
    outputEncoding="sRGB"
    style="margin: 0 auto"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>
