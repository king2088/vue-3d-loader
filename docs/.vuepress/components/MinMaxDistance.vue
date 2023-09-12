<template>
  <vue3dLoader
    filePath="/models/collada/stormtrooper/stormtrooper.dae"
    :minDistance="min"
    :maxDistance="max"
    :enableAxesHelper="enableAxesHelper"
    :enableGridHelper="enableGridHelper"
    :height="500"
  />
</template>
  
<script setup lang="ts">
    import { vue3dLoader } from "vue-3d-loader";
    import { ref } from "vue";

    const min = ref(20);
    const max = ref(100);
    const enableAxesHelper = ref(true);
    const enableGridHelper = ref(true);
</script>