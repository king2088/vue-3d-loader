<template>
  <div class="example">
    <div class="menu">
      <ul>
        <li
          :class="currentMenuId === item.id ? 'active' : ''"
          v-for="(item, index) in menu"
          :key="item.id"
          @click="getMenuId(item.id)"
        >
          {{ index + 1 + ". " + getCurrentLanguageName(item.id) }}
        </li>
      </ul>
    </div>
    <loadAModelVue v-if="currentMenuId === 1" />
    <loadMultipleModelsVue v-if="currentMenuId === 2" />
    <heightAndWidthVue v-if="currentMenuId === 3" />
    <materialsAndTexturesVue v-if="currentMenuId === 4" />
    <backgroundColorAndAlphaVue v-if="currentMenuId === 5" />
    <interactiveControlsVue v-if="currentMenuId === 6" />
    <rotateModelVue v-if="currentMenuId === 7" />
    <eventModelVue v-if="currentMenuId === 8" />
    <lightModelVue v-if="currentMenuId === 9" />
    <showFpsVue v-if="currentMenuId === 10" />
    <cameraPositionAndRotateVue v-if="currentMenuId === 11" />
    <processBarVue v-if="currentMenuId === 12" />
    <parallelLoadModelVue v-if="currentMenuId === 13" />
    <addLabel v-if="currentMenuId === 14" />
  </div>
</template>
<script setup lang="ts">
import loadAModelVue from "./load-a-model.vue";
import loadMultipleModelsVue from "./load-multiple-models.vue";
import heightAndWidthVue from "./height-and-width.vue";
import materialsAndTexturesVue from "./materials-and-textures.vue";
import backgroundColorAndAlphaVue from "./background-color-and-alpha.vue";
import cameraPositionAndRotateVue from "./camera-position-and-rotate.vue";
import interactiveControlsVue from "./interactive-controls.vue";
import rotateModelVue from "./rotate-model.vue";
import eventModelVue from "./event-model.vue";
import lightModelVue from "./light-model.vue";
import showFpsVue from "./show-fps.vue";
import processBarVue from "./progress-bar.vue";
import parallelLoadModelVue from "./parallel-load-model.vue";
import AddLabel from "./add-label.vue";
import { onMounted, ref } from "vue";
const menu = ref();
menu.value = [
  { id: 1, name_CN: "加载一个模型", name_EN: "Load a model" },
  { id: 2, name_CN: "加载多个模型", name_EN: "Load multiple models" },
  { id: 3, name_CN: "设置场景高宽", name_EN: "Height and width" },
  { id: 4, name_CN: "材质及纹理", name_EN: "Materials and textures" },
  { id: 5, name_CN: "背景颜色及透明度", name_EN: "Background" },
  { id: 6, name_CN: "交互控制", name_EN: "Control" },
  { id: 7, name_CN: "旋转模型", name_EN: "Rotate model" },
  { id: 8, name_CN: "事件", name_EN: "Event" },
  { id: 9, name_CN: "灯光", name_EN: "Light" },
  { id: 10, name_CN: "显示FPS信息", name_EN: "Show stats" },
  { id: 11, name_CN: "相机位置及旋转", name_EN: "Camera" },
  { id: 12, name_CN: "加载进度", name_EN: "Progress bar" },
  { id: 13, name_CN: "并行加载", name_EN: "Parallel load" },
  { id: 14, name_CN: "标注", name_EN: "Add label" },
];
const currentMenuId = ref(1);

function getLocal() {
  let lang = navigator.language.substring(0, 2) || "zh";
  return lang;
}
function getCurrentLanguageName(id: number) {
  let menuItem = menu.value.filter((item: any) => item.id === id)[0];
  let lang = getLocal();
  if (lang === "zh") {
    return menuItem.name_CN;
  } else {
    return menuItem.name_EN;
  }
}
function getMenuId(id: number) {
  currentMenuId.value = id;
}
</script>
<style>
.example {
  height: 100%;
}
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 8px 10px;
}
li.active {
  background-color: rgb(88, 88, 88);
  text-decoration: underline;
}
li:hover {
  background-color: rgb(88, 88, 88);
  text-decoration: underline;
}
.menu {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  opacity: 0.8;
  background-color: #000;
  color: #fff;
  text-align: left;
  font-size: 12px;
}
</style>