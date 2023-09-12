<template>
  <div class="hello">
    OBJ+MTL
    <vue3dViewerVue :height="200" :filePath="filePath" :mtlPath="mtlPath" :backgroundColor="'#ff00ff'" @mousemove="onMouseMove"></vue3dViewerVue>
    FBX
    <vue3dViewerVue :height="200" :filePath="'/fbx/Samba Dancing.fbx'" :backgroundColor="'#ffff00'"></vue3dViewerVue>
  </div>
</template>

<script>
import vue3dViewerVue from './3dViewer/vue3dViewer.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    vue3dViewerVue
  },
  data() {
    return {
      filePath: '/obj/male02.obj',
      mtlPath: '/obj/male02.mtl',
      object: null
    }
  },
  methods: {
    onMouseMove(event, intersected) {
      console.log('event', event);
      if (this.object) {
        this.object.material.color.setStyle('#fff');
      }

      if (intersected) {
        this.object = intersected.object;
        this.object.material.color.setStyle('#13ce66');
      }
    }
  }
}
</script>
<style>
.hello{
  width: 100%;
}
</style>