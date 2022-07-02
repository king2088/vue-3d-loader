<template>
  <vue3dLoader
    filePath="/models/stl/colored.stl"
    backgroundColor="#cccccc"
    @load="onLoad"
    :cameraPosition="positon"
    :cameraRotation="rotation"
  />
</template>
<script>
export default {
  data() {
    return {
      positon: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
      },
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
      this.positon.z += 0.01;
    },
  },
};
</script>