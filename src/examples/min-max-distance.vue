<template>
    <div class="models">
      <vue3dLoader
        filePath="/models/collada/stormtrooper/stormtrooper.dae"
        :scale="{ x: 0.2, y: 0.2, z: 0.2 }"
        :minDistance="10"
        :maxDistance="300"
        :enableAxesHelper="enableAxesHelper"
      />
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        enableAxesHelper: true,
      };
    }
  };
  </script>
  <style>
  .models {
    height: 100%;
  }
  </style>