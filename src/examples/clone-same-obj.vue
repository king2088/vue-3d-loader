<template>
    <vue3dLoader 
        :filePath="filePath" 
        backgroundColor="#cccccc" 
        :cameraPosition="{ x: 0, y: 0, z: 0 }" 
        ref="vue3dLoaderRef"
        @load="copyObj" 
        outputEncoding="sRGB" 
        :scale="{ x: 1, y: 1, z: 1 }" 
        :enableAxesHelper="true"
        :axesHelperSize="20" 
        :enableGridHelper="true" />
</template>
<script>
export default {
    data() {
        return {
            filePath: '/models/gltf/DamagedHelmet.gltf'
        };
    },
    methods: {
        copyObj() {
            const { children } = this.$refs.vue3dLoaderRef.scene
            if (children) {
                const fileName = this.filePath.split('/').pop()
                children.forEach((item) => {
                    // same fileName obj
                    if (item.fileName === fileName) {
                        const cloneItem = item.clone()
                        // Set new obj fileName
                        cloneItem.fileName = 'clone_' + fileName
                        // Set new obj position
                        cloneItem.position.set(5, 0, 0)
                        // add new obj to scene
                        this.$refs.vue3dLoaderRef.scene.add(cloneItem)
                    }
                })
            }
        }
    },
};
</script>