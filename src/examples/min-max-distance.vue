<template>
    <vue3dLoader
      filePath="/models/collada/stormtrooper/stormtrooper.dae"
      :minDistance="min"
      :maxDistance="max"
      :enableAxesHelper="enableAxesHelper"
      :enableGridHelper="enableGridHelper"
    />
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const min = ref(20)
  const max = ref(100)
  const enableAxesHelper = ref(true)
  const enableGridHelper = ref(true)
  
  </script>