<template>
  <vue3dLoader
    :filePath="filePath"
    :scale="{ x: 0.4, y: 0.4, z: 0.4 }"
    :cameraPosition="{ x: 100, y: 200, z: 30 }"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const filePath = ref();
filePath.value = [
  "/models/fbx/Samba Dancing.fbx",
  "models/collada/pump/pump.dae",
];
</script>