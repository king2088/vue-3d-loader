<template>
  <vue3dLoader
    :filePath="filePath"
    :scale="scale"
    :position="position"
    :rotation="rotation"
    :cameraPosition="{ x: 100, y: 200, z: 3000 }"
    :parallelLoad="true"
  ></vue3dLoader>
</template>
<script setup lang="ts">
import { ref } from "vue";
const filePath = ref();
filePath.value = [
  "/models/fbx/Samba Dancing.fbx",
  "/models/collada/pump/pump.dae",
  "/models/ply/Lucy100k.ply",
];
const position = ref();
position.value = [
  { x: 100, y: 100, z: 100 },
  { x: 300, y: 300, z: 300 },
];
const rotation = ref();
rotation.value = [
  { x: 0, y: 0, z: 0 },
  { x: 10, y: 1, z: 1 },
];
const scale = ref();
scale.value = [
  { x: 5, y: 5, z: 5 },
  { x: 3, y: 3, z: 3 },
];
</script>