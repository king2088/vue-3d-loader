<template>
  <div class="hello">
    <vue3dViewerVue :filePath="filePath" :backgroundColor="'#ff00ff'"></vue3dViewerVue>
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
      filePath: '/obj/tree.obj'
    }
  }
}
</script>
<style>
.hello{
  width: 100%;
  height: 100vh;
}
</style>