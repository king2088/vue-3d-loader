<template>
  <div class="content">
    <vue3dLoader
      :filePath="filePath"
      :scale="{ x: 0.4, y: 0.4, z: 0.4 }"
      :cameraPosition="{ x: 100, y: 200, z: 30 }"
      @process="onProcess"
    />
    <div class="process">
      current model: {{ currentModelIndex }}, loadding: {{ process + "%" }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const filePath = ref();
filePath.value = ["/models/obj/male02.obj", "/models/fbx/Samba Dancing.fbx"];
const currentModelIndex = ref();
const process = ref(0);
function onProcess(event: any, index: number) {
  process.value = Math.floor((event.loaded / event.total) * 100);
  if (index != 0) {
    currentModelIndex.value = index;
  }
}
</script>
<style>
.content {
  height: 100%;
}
.process {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 8px;
  background-color: aquamarine;
  color: red;
}
</style>