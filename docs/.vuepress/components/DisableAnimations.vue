<template>
  <div class="check-box-s">
    <input type="checkbox" @change="change()" checked />
    {{ autoPlay ? "Play" : "Stop" }}
  </div>
  <vue3dLoader
    filePath="/vue-3d-loader-docs/models/collada/stormtrooper/stormtrooper.dae"
    :cameraPosition="{ x: 20, y: 0, z: -10 }"
    :autoPlay="autoPlay"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
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
.check-box-s {
  background-color: rgb(13, 6, 103);
  padding: 5px 4px;
  z-index: 100;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
}
</style>
