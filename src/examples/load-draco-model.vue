<template>
  <div style="height: 100%">
    <div class="draco-demo">
      使用此功能需要下载<a
        href="https://github.com/king2088/vue-3d-loader/blob/master/public/assets/draco.7z"
        >draco解码器</a
      >，并解压放到本地项目assets目录中，draco路径应为：“assets/draco/gltf/”
    </div>
    <vue3dLoader
      filePath="/models/gltf/LittlestTokyo.glb"
      :cameraPosition="{ x: 10, y: 700, z: 1000 }"
      :enableDraco="true"
      outputEncoding="sRGB"
    />
  </div>
</template>
<script>
export default {};
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