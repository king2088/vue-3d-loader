<template>
  <div class="controls">
    <div class="buttons">
      <!-- 禁止右键拖动 -->
      <button @click="enablePan = !enablePan">
        {{ enablePan ? "disable" : "enable" }} translation
      </button>
      <!-- 禁止缩放 -->
      <button @click="enableZoom = !enableZoom">
        {{ enableZoom ? "disable" : "enable" }} zoom
      </button>
      <!-- 禁止缩放 -->
      <button @click="enableRotate = !enableRotate">
        {{ enableRotate ? "disable" : "enable" }} rotation
      </button>
    </div>
    <vue3dLoader
      :filePath="'/models/collada/elf/elf.dae'"
      :controlsOptions="{
        enablePan,
        enableZoom,
        enableRotate,
      }"
      :cameraPosition="{ x: 0, y: -10, z: 13 }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      enablePan: true,
      enableZoom: true,
      enableRotate: true,
    };
  },
};
</script>
<style>
.controls {
  height: 600px;
}
.buttons {
  padding: 10px;
}
button {
  margin: 0 5px;
  background-color: rgb(12, 54, 240);
  outline: none;
  border: none;
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
}
button:hover {
  background-color: #ccc;
  color: rgb(12, 54, 240);
}
</style>