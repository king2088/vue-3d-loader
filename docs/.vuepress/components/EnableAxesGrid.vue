<template>
    <vue3dLoader
        filePath="/vue-3d-loader-docs/models/collada/stormtrooper/stormtrooper.dae"
        :height="500"
        :scale="{ x: 0.2, y: 0.2, z: 0.2 }"
        :enableAxesHelper="enableAxesHelper"
        :axesHelperSize="axesHelperSize"
        :enableGridHelper="enableGridHelper"
        v-if="show"
    />
</template>
<script setup lang="ts">
    import { vue3dLoader } from "vue-3d-loader";
    import { ref, onMounted } from "vue";
    const enableAxesHelper = ref(true);
    const enableGridHelper = ref(true);
    const axesHelperSize = ref(500);
    const show = ref(false)
    onMounted(() => {
        show.value = true
    })
</script>