<template>
  <vue3dLoader
    filePath="/vue-3d-loader-docs/models/gltf/LittlestTokyo.glb"
    :cameraPosition="{ x: 10, y: 700, z: 1000 }"
    :enableDraco="true"
    outputEncoding="sRGB"
    :height="350"
    backgroundColor="#F2F2F2"
    dracoDir="/vue-3d-loader-docs/assets/draco/gltf/"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>