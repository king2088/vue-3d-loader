<template>
  <vue3dLoader filePath="/models/ply/Lucy100k.ply" @mousemove="onMouseMove" />
</template>
<script>
export default {
  data() {
    return {
      object: null,
    };
  },
  methods: {
    onMouseMove(event, intersected) {
      if (this.object) {
        this.object.material.color.setStyle("#fff");
      }
      if (intersected) {
        this.object = intersected.object;
        this.object.material.color.setStyle("#13ce66");
      }
    },
  },
};
</script>