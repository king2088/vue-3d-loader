<template>
  <div class="multiple-models">
    <div class="options">
      <input
        name="Fruit"
        type="checkbox"
        @change="setPosition"
        v-model="checkedPosition"
      />set position
      <input
        name="Fruit"
        type="checkbox"
        @change="setScale"
        v-model="checkedScale"
      />set scale
      <input
        name="Fruit"
        type="checkbox"
        @change="setRotation"
        v-model="checkedRotation"
      />set rotation
    </div>
    <vue3dLoader
      :filePath="filePath"
      :scale="scale"
      :position="position"
      :rotation="rotation"
      :cameraPosition="{ x: -500, y: -200, z: -300 }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      filePath: [
        "/models/fbx/Samba Dancing.fbx",
        "/models/collada/pump/pump.dae",
      ],
      scale: [
        { x: 0.4, y: 0.4, z: 0.4 },
        { x: 1, y: 1, z: 1 },
      ],
      position: [
        { x: 1, y: 0, z: 0 },
        { x: 80, y: 40, z: 200 },
      ],
      rotation: [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: -5, z: -10 },
      ],
      checkedPosition: true,
      checkedScale: true,
      checkedRotation: true,
    };
  },
  methods: {
    setPosition() {
      if (this.checkedPosition) {
        this.position = [
          { x: 1, y: 0, z: 0 },
          { x: 80, y: 40, z: 200 },
        ];
        return;
      }
      this.position = [];
    },
    setScale() {
      if (this.checkedScale) {
        this.scale = [
          { x: 0.4, y: 0.4, z: 0.4 },
          { x: 1, y: 1, z: 1 },
        ];
        return;
      }
      this.scale = [];
    },
    setRotation() {
      if (this.checkedRotation) {
        this.rotation = [
          { x: 0, y: 0, z: 0 },
          { x: 0, y: -5, z: -10 },
        ];
        return;
      }
      this.rotation = [];
    },
  },
};
</script>
<style scoped>
.multiple-models {
  width: 100%;
  height: 100%;
}
.options {
  position: absolute;
  left: 20px;
  top: 10px;
  z-index: 10000;
  background-color: aquamarine;
  padding: 4px 8px;
  font-size: 12px;
}
</style>