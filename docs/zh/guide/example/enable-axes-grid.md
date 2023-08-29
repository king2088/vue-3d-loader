# 开启坐标轴及网格

:::tip
可用于场景模型位置坐标轴等调试
:::

<EnableAxesGrid />

```vue
<template>
    <vue3dLoader
        filePath="/models/collada/stormtrooper/stormtrooper.dae"
        :enableAxesHelper="true"
        :axesHelperSize="500"
        :enableGridHelper="true"
    />
</template>
<script setup lang="ts"></script>
```