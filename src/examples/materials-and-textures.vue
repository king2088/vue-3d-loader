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

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      object: null,
      loaderList: [
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
      ],
    };
  },
  methods: {
    onMouseMove(event, intersected) {
      // console.log('event', event);
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
<style>
h1 {
  font-size: 20px;
}
</style>