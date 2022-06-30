<template>
  <div>
    <div v-for="item in loaderList" :key="item.title">
      <h1>{{ item.title }}</h1>
      <vue3dViewer
        :height="item.height"
        :showFps="item.showFps"
        :filePath="item.filePath"
        :mtlPath="item.mtlPath"
        :backgroundColor="item.backgroundColor"
      ></vue3dViewer>
    </div>
  </div>
</template>

<script>
import vue3dViewer from "../3dLoader/vue3dLoader.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    vue3dViewer,
  },
  data() {
    return {
      object: null,
      loaderList: [
        {
          title: "加载OBJ+MTL(材质)",
          filePath: "/obj/male02.obj",
          mtlPath: "/obj/male02.mtl",
          backgroundColor: "#ff00ff",
          showFps: false,
          height: 400,
        },
        {
          title: "加载FBX",
          filePath: "/fbx/Samba Dancing.fbx",
          mtlPath: null,
          backgroundColor: "#ffff00",
          showFps: true,
          height: 200,
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