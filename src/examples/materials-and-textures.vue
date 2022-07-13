<template>
  <div>
    <div v-for="item in loaderList" :key="item.title">
      <h1>{{ item.title }}</h1>
      <vue3dLoader
        :height="item.height"
        :showFps="item.showFps"
        :filePath="item.filePath"
        :mtlPath="item.mtlPath"
        :textureImage="item.textureImage"
        :backgroundColor="item.backgroundColor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const object = ref(null);
const loaderList = ref();
loaderList.value = [
  {
    title: "OBJ+MTL",
    filePath: "/models/obj/male02.obj",
    mtlPath: "/models/obj/male02.mtl",
    showFps: false,
    height: 400,
  },
  {
    title: "FBX+JPG",
    filePath: "/models/fbx/stanford-bunny.fbx",
    textureImage: "/models/fbx/brick.png",
    height: 400,
  },
];
function onMouseMove(event: MouseEvent, intersected: any) {
  // console.log('event', event);
  if (object.value) {
    (object.value as any).material.color.setStyle("#fff");
  }

  if (intersected) {
    object.value = intersected.object;
    (object.value as any).material.color.setStyle("#13ce66");
  }
}
</script>
<style>
h1 {
  font-size: 20px;
}
</style>