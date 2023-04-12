<template>
  <div class="controls">
    <div class="buttons">
      <!-- 开启水平旋转 -->
      <button @click="setHorizontal()">
        Only {{ horizontalCtrl ? "disable" : "enable" }} horizontal
      </button>
      <!-- 开启垂直旋转 -->
      <button @click="setVertical()">
        Only {{ verticalCtrl ? "disable" : "enable" }} vertical
      </button>
      <!-- 设置水平旋转最大/小角度 -->
      <button @click="setHorizontal('range')">
        set horizontal rotation value range
      </button>
      <!-- 设置垂直旋转最大/小角度 -->
      <button @click="setVertical('range')">
        set vertical rotation value range
      </button>
    </div>
    <vue3dLoader
      v-if="!refersh"
      filePath="/models/collada/stormtrooper/stormtrooper.dae"
      :scale="{ x: 0.1, y: 0.1, z: 0.1 }"
      :verticalCtrl="verticalCtrl"
      :horizontalCtrl="horizontalCtrl"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      verticalCtrl: false,
      horizontalCtrl: false,
      refersh: false,
    };
  },
  methods: {
    setVertical(type='') {
      this.horizontalCtrl = false;
      if (type === "range") {
        // set vertical angle range
        this.verticalCtrl = { min: 0, max: 1 };
      } else {
        this.verticalCtrl = true;
        // this.horizontalCtrl = { min: 0, max: Math.PI };
      }
      this.refersh3d();
    },

    setHorizontal(type='') {
      this.verticalCtrl = false;
      if (type === "range") {
        // set horizontal angle range
        this.horizontalCtrl = { min: 1, max: 2 };
      } else {
        this.horizontalCtrl = true;
        // this.verticalCtrl = { min: -Math.PI, max: Math.PI };
      }
      this.refersh3d();
    },

    refersh3d() {
      this.refersh = true;
      this.$nextTick(() => {
        this.refersh = false;
      });
    },
  },
};
</script>
<style scoped>
.controls {
  height: 600px;
}
.buttons {
  padding: 10px;
  text-align: center;
}
button {
  margin: 0 5px;
  background-color: rgb(12, 54, 240);
  outline: none;
  border: none;
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
}
button:hover {
  background-color: #ccc;
  color: rgb(12, 54, 240);
}
</style>