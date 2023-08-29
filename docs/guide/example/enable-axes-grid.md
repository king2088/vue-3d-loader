# Enable axes helper and grid helper

:::tip
Show axes and grid helper in scene.
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