# 事件

:::tip
鼠标移动到模型上，改变模型颜色
:::
<EventModel/>

```vue
<template>
  <vue3dLoader
    filePath="/models/ply/Lucy100k.ply"
    @mousemove="onMouseMove"
    :cameraPosition="{ x: 0, y: 0, z: -2500 }"
  />
</template>
<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref } from "vue";
const object = ref(null);
function onMouseMove(event: MouseEvent, intersected: any) {
  if (object.value) {
    (object.value as any).material.color.setStyle("#fff");
  }
  if (intersected) {
    object.value = intersected.object;
    (object.value as any).material.color.setStyle("#13ce66");
  }
}
</script>
```
