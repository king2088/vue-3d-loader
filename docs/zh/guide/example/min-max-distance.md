# 设置摄像头向内外的距离
`可用于限制鼠标滚轮缩放模型的大小`

<MinMaxDistance />

```vue
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
    import { vue3dLoader } from "vue-3d-loader";
    import { ref } from "vue";

    const min = ref(20);
    const max = ref(100);
    const enableAxesHelper = ref(true);
    const enableGridHelper = ref(true);
</script>
```