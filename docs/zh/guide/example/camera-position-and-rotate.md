# 相机位置及旋转

<CameraPositionAndRotate/>

```vue
<template>
  <vue3dLoader
    filePath="/models/stl/colored.stl"
    @load="onLoad"
    :cameraPosition="positon"
    :cameraRotation="rotation"
  />
</template>
<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref } from "vue";
const positon = ref();
const rotation = ref();
positon.value = {
  x: -Math.PI / 2,
  y: 0,
  z: 0,
};

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
  rotation.value.z += 0.01;
  positon.value.z += 0.01;
}
</script>
```
