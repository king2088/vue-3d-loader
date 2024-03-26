<template>
  <vue3dLoader
    filePath="/models/collada/stormtrooper/stormtrooper.dae"
    :cameraPosition="{ x: 10, y: 0, z: -10}"
    ref="vueRef"
  />
</template>
<script setup>
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref(null);
onMounted(() => {
  console.log(vueRef.value.camera);
  // console.log(vue2Ref.value);
  vueRef.value.camera.fov = 90
})
</script>