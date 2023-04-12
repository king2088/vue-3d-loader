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
<script lang="ts" setup>
import { nextTick, ref } from "vue";
const verticalCtrl: any = ref(false);
const horizontalCtrl: any = ref(false);
const refersh = ref(false);

function setVertical(type?: string) {
  horizontalCtrl.value = false;
  if (type === "range") {
    // set vertical angle range
    verticalCtrl.value = { min: 0, max: 1 };
  } else {
    verticalCtrl.value = true;
    // horizontalCtrl.value = { min: 0, max: Math.PI };
  }
  refersh3d();
}

function setHorizontal(type?: string) {
  verticalCtrl.value = false;
  if (type === "range") {
    // set horizontal angle range
    horizontalCtrl.value = { min: 1, max: 2 };
  } else {
    horizontalCtrl.value = true;
    // verticalCtrl.value = { min: -Math.PI, max: Math.PI };
  }
  refersh3d();
}

function refersh3d() {
  refersh.value = true;
  nextTick(() => {
    refersh.value = false;
  });
}
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