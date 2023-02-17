<template>
  <vue3dLoader
    filePath="/models/gltf/DamagedHelmet.gltf"
    backgroundColor="#cccccc"
    :labels="labels"
    :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
    outputEncoding="sRGB"
  />
  <div class="top">
    <button @click="changeLabelPosition">Change label position</button>
    <button @click="changeTextLabelName">Change text label name</button>
    <button @click="resetLabels">Reset labels</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const labels = ref();
labels.value = [
  // image label
  {
    image: "./assets/label1.png",
    position: { x: -0.5, y: 1, z: 0 },
    scale: { x: 0.6, y: 0.6, z: 0.6 },
    sid: 1, // custom id
  },
  {
    image: "./assets/label2.png",
    position: { x: 0.5, y: 1.2, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    sid: 2,
  },
  // text label
  {
    text: "I'm Text Label",
    position: { x: 0, y: 2, z: 0 },
    scale: { x: 1.5, y: 0.8, z: 0 },
    textStyle: {
      fontFamily: "Arial",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      color: "#ffffff",
      borderWidth: 8,
      borderRadius: 0,
      borderColor: "#000000",
      backgroundColor: "rgba(0,0,0,1)",
    },
    sid: 3, // 自定义标识，可有可无
  },
];

function changeLabelPosition() {
  labels.value[0].position = { x: -0.2, y: 2, z: 1 };
}

function changeTextLabelName() {
  labels.value[2].text = "My name is change";
}

function resetLabels() {
  labels.value[0].position = { x: -0.5, y: 1, z: 0 };
  labels.value[2].text = "I'm Text Label";
}
</script>
<style>
.top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.top button {
  margin: 0 2px;
}
</style>