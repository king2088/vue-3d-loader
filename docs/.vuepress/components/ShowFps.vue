<template>
  <vue3dLoader
    filePath="/vue-3d-loader-docs/models/obj/tree.obj"
    :height="350"
    backgroundColor="#F2F2F2"
    :showFps="true"
  />
</template>
<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
</script>