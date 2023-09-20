<template>
  <vue3dLoader
    :filePath="filePath"
    backgroundColor="#cccccc"
    :position="[{ x: 0, y: 0, z: 0 }, { x: 100, y: 100, z: 100}]"
    :labels="labels"
    :scale="[{ x: 10, y: 10, z: 10 },{ x: 0.5, y: 0.5, z: 0.5 }]"
    :enableAxesHelper="true"
    :enableGridHelper="true"
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
const filePath = ['/models/gltf/DamagedHelmet.gltf', '/models/fbx/Samba Dancing.fbx']
labels.value = [
  // image label
  {
      image: "./assets/label1.png",
      position: { x: 0, y: 0, z: 200 },
      scale: { x: 50, y: 50, z: 50 },
      sid: 1, // custom id
    },
    {
      image: "./assets/label2.png",
      position: { x: 150, y: 0, z: 200 },
      scale: { x: 50, y: 50, z: 50 },
      sid: 2,
    },
    // text label
    {
      text: "I'm Text Label",
      position: { x: 200, y: 200, z: 200 },
      scale: { x: 50, y: 50, z: 10 },
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
]

function changeLabelPosition() {
  labels.value[0].position = { x: 100, y: 0, z: 200 };
}

function changeTextLabelName() {
  if (labels.value[2].text === "I'm Text Label") {
    labels.value[2].text = "My name is change";
    return
  }
  labels.value[2].text = "I'm Text Label";
}

function resetLabels() {
  labels.value[0].position = { x: 0, y: 0, z: 200 };
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