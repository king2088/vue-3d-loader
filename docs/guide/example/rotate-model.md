# Rotate 3D model

<RotateModel/>

```vue
<template>
  <vue3dLoader
    :rotation="rotation"
    @load="onLoad()"
    filePath="/models/collada/elf/elf.dae"
  />
</template>
<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref } from "vue";
const rotation = ref();
rotation.value = {
  x: -Math.PI / 2,
  y: 0,
  z: 0,
};
function onLoad() {
  rotate();
}
function rotate() {
  requestAnimationFrame(rotate);
  rotation.value.z -= 0.01;
}
</script>
```
