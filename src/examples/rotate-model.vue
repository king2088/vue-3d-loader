<template>
  <vue3dLoader
    :rotation="rotation"
    @load="onLoad()"
    filePath="/models/collada/elf/elf.dae"
  />
</template>
<script>
export default {
  data() {
    return {
      rotation: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
      },
    };
  },
  methods: {
    onLoad() {
      this.rotate();
    },
    rotate() {
      requestAnimationFrame(this.rotate);
      this.rotation.z += 0.01;
    },
  },
};
</script>