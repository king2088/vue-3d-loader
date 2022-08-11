<template>
  <div class="check-box">
    <input type="checkbox" @change="change()" checked />
    {{ autoPlay ? "Play" : "Stop" }}
  </div>
  <vue3dLoader
    filePath="/models/collada/stormtrooper/stormtrooper.dae"
    :cameraPosition="{ x: 20, y: 0, z: -10 }"
    :autoPlay="autoPlay"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const autoPlay = ref(true);
function change() {
  if (autoPlay.value) {
    autoPlay.value = false;
  } else {
    autoPlay.value = true;
  }
}
</script>
<style>
.check-box {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(13, 6, 103);
  padding: 2px 4px;
  z-index: 100;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
}
</style>
