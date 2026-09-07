<template>
  <vue3dLoader
    filePath="/models/collada/stormtrooper/stormtrooper.dae"
    outputEncoding="sRGB"
    :enableAxesHelper="true"
    :axesHelperSize="500"
    :enableGridHelper="true"
    :cameraPosition="positon"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const positon = ref();
positon.value = {
  x: 0,
  y: 50,
  z: 0,
};
</script>