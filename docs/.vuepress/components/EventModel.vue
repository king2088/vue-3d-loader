<template>
  <vue3dLoader
    filePath="/vue-3d-loader-docs/models/ply/Lucy100k.ply"
    @mousemove="onMouseMove"
    :cameraPosition="{ x: 0, y: 0, z: -2500 }"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref } from "vue";
const object = ref(null);
function onMouseMove(event: MouseEvent, intersected: any) {
  if (object.value) {
    (object.value as any).material.color.setStyle("#fff");
  }
  if (intersected) {
    object.value = intersected.object;
    (object.value as any).material.color.setStyle("#13ce66");
  }
}
</script>