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
<script>
export default {
  data() {
    return {
      filePath: ["/models/obj/male02.obj", "/models/fbx/Samba Dancing.fbx"],
      currentModelIndex: 0,
      process: 0,
    };
  },
  methods: {
    onProcess(event, index) {
      // console.log("event", event, index);
      this.process = Math.floor((event.loaded / event.total) * 100);
      if (index != 0) {
        this.currentModelIndex = index;
      }
    },
  },
};
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