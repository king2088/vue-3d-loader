<template>
  <div class="check-box">
    <input type="checkbox" @change="change($event, 'position')" checked /> Set
    position
    <input type="checkbox" @change="change($event, 'rotation')" checked /> Set
    rotation
    <input type="checkbox" @change="change($event, 'scale')" checked /> Set
    scale
  </div>
  <vue3dLoader
    :filePath="filePath"
    :position="position"
    :rotation="rotation"
    :scale="scale"
    :cameraPosition="{ x: -0, y: 0, z: -500 }"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const filePath = ref();
filePath.value = [
  "/models/fbx/Samba Dancing.fbx",
  "/models/collada/pump/pump.dae",
];
const position = ref();
position.value = [
  { x: 0, y: 0, z: 0 },
  { x: 100, y: 100, z: 100 },
];
const rotation = ref();
rotation.value = [
  { x: 0, y: 0, z: 0 },
  { x: 10, y: 1, z: 1 },
];
const scale = ref();
scale.value = [
  { x: 0.4, y: 0.4, z: 0.4 },
  { x: 0.8, y: 0.8, z: 0.8 },
];

function change(event: any, type: string) {
  const value = event.target.checked;
  switch (type) {
    case "position":
      value
        ? (position.value = [
            { x: 0, y: 0, z: 0 },
            { x: 100, y: 100, z: 100 },
          ])
        : (position.value = []);
      break;
    case "rotation":
      value
        ? (rotation.value = [
            { x: 0, y: 0, z: 0 },
            { x: 10, y: 1, z: 1 },
          ])
        : (rotation.value = []);
      break;
    case "scale":
      value
        ? (scale.value = [
            { x: 0.4, y: 0.4, z: 0.4 },
            { x: 0.8, y: 0.8, z: 0.8 },
          ])
        : (scale.value = []);
      break;
  }
}
</script>
<style>
.check-box {
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: rgb(13, 6, 103);
  padding: 2px 4px;
  z-index: 100;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
}
</style>
