<template>
  <vue3dLoader filePath="/models/ply/Lucy100k.ply" @mousemove="onMouseMove" />
</template>
<script setup lang="ts">
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