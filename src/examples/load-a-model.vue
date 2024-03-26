<template>
  <div class="models">
    <button @click="enableAnimations()">Enable animations</button>
    <vue3dLoader
      filePath="/models/collada/stormtrooper/stormtrooper.dae"
      :scale="{ x: 0.2, y: 0.2, z: 0.2 }"
      :autoPlay="autoPlay"
      ref="vue3dLoaderRef"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      autoPlay: true,
    };
  },
  mounted() {
    const ref = this.$refs.vue3dLoaderRef;
    console.log('ref', ref);
  },
  methods: {
    enableAnimations() {
      console.log("click");
      this.autoPlay = !this.autoPlay;
    },
  },
};
</script>
<style>
.models {
  height: 100%;
}
</style>