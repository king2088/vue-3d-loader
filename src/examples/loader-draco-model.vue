<template>
  <div class="draco-demo" v-if="props.lang === 'zh'">
    Draco 解码器（wasm）默认从项目内自托管路径 <code>assets/draco/gltf/</code> 加载；
    可通过 <code>dracoDir</code> 属性覆盖，例如指向 jsdelivr 等 CDN 镜像
  </div>
  <div class="draco-demo" v-if="props.lang != 'zh'">
    The Draco decoder (wasm) defaults to the self-hosted <code>assets/draco/gltf/</code>
    path. Override it with the <code>dracoDir</code> prop (e.g. a jsdelivr CDN mirror).
  </div>
  <vue3dLoader
    filePath="/models/gltf/LittlestTokyo.glb"
    :cameraPosition="{ x: 10, y: 700, z: 1000 }"
    :enableDraco="true"
    outputEncoding="sRGB"
  />
</template>
<script lang="ts" setup>
const props = defineProps({
  lang: String,
});
</script>
<style>
.draco-demo {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: red;
  width: 480px;
  background-color: #f2f2f2;
  padding: 5px 10px;
  line-height: 2;
}
.draco-demo a {
  color: #fff;
  background-color: blue;
  padding: 2px 8px;
  border-radius: 4px;
  margin: 0 5px;
}
.draco-demo a:hover {
  color: #fff;
  background-color: rgb(17, 235, 126);
}
</style>