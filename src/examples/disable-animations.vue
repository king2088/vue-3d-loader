<template>
  <div class="check-box">
    <input type="checkbox" @change="change()" checked /> autoPlay
  </div>
  <vue3dLoader
    filePath="/models/collada/stormtrooper/stormtrooper.dae"
    :cameraPosition="{ x: 10, y: 0, z: -10}"
    :autoPlay="autoPlay"
    v-if="!refresh"
  />
</template>
<script setup lang="ts">
  import { nextTick, ref } from "vue";
  const autoPlay = ref(true)
  const refresh = ref(false)
  function change() {
    autoPlay.value = !autoPlay.value
    refreshLoader()
  }
  function refreshLoader () {
    refresh.value = true
    nextTick(() => {
      refresh.value = false
    })
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
