<template>
  <div class="tips">
    Move your mouse over the model to change the model color
  </div>
  <vue3dLoader
    filePath="/models/ply/Lucy100k.ply"
    @mousemove="onMouseMove"
    :cameraPosition="{ x: 0, y: 0, z: -2500 }"
  />
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
<style>
.tips {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: #ccc;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
  color: blue;
}
</style>