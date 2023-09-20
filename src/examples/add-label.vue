<template>
  <div class="add-label-page">
    <div class="top">
      <button @click="changeLabelPosition">Change label position</button>
      <button @click="changeTextLabelName">Change text label name</button>
      <button @click="resetLabels">Reset labels</button>
    </div>
    <vue3dLoader
      :filePath="filePath"
      backgroundColor="#cccccc"
      :labels="labels"
      :scale="[{ x: 20, y: 20, z: 20 }, { x: 0.5, y: 0.5, z: 0.5 }]"
      @load="getScene"
      :enableAxesHelper="true"
      :enableGridHelper="true"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      filePath: ['/models/gltf/DamagedHelmet.gltf', '/models/fbx/Samba Dancing.fbx'],
      labels: [
          // image label
          {
            image: "./assets/label1.png",
            position: { x: 100, y: 100, z: 100 },
            scale: { x: 50, y: 50, z: 50 },
            sid: 1, // custom id
          },
          {
            image: "./assets/label2.png",
            position: { x: 200, y: 300, z: 0 },
            scale: { x: 50, y: 50, z: 50 },
            sid: 2,
          },
          // text label
          {
            text: "I'm Text Label",
            position: { x: 200, y: 2, z: 0 },
            scale: { x: 50, y: 50, z: 0 },
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
        ],
      timer: null
    };
  },
  methods: {
    changeLabelPosition() {
      this.labels[0].position = { x: 100, y: 100, z: 200 };
    },
    changeTextLabelName() {
      if (this.labels[2].text === "I'm Text Label") {
        this.labels[2].text = "My name is change";
        return
      }
      this.labels[2].text = "I'm Text Label"
    },
    resetLabels() {
      this.labels[0].position = { x: 100, y: 100, z: 100 };
      this.labels[2].text = "I'm Text Label";
    },
    getScene(scene) {
      console.log('e', scene);
      // this.setLabels()
    }
  },
};
</script>
<style>
  .add-label-page{
    width: 100%;
    height: 100%;
  }
  .top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }
  .top button {
    margin: 0 2px;
  }
</style>