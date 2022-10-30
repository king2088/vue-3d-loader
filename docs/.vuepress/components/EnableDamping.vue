<template>
  <vue3dLoader
    :filePath="'/models/collada/elf/elf.dae'"
    :cameraPosition="{ x: 0, y: -10, z: 13 }"
    :enableDamping="true"
    :dampingFactor="0.05"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>