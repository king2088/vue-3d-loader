<template>
  <div class="example">
    <div class="menu">
      <ul>
        <li
          :class="currentMenuId === item.id ? 'active' : ''"
          v-for="item in menu"
          :key="item.id"
          @click="getMenuId(item.id)"
        >
          {{ getCurrentLanguageName(item.id) }}
        </li>
      </ul>
    </div>
    <loadAModelVue v-if="currentMenuId === 1" />
    <!-- <loaderFilePathVue /> -->
  </div>
</template>
<script>
// import loaderFilePathVue from "./loaderFilePath.vue";
import loadAModelVue from "./load-a-model.vue";
export default {
  components: {
    // loaderFilePathVue,
    loadAModelVue,
  },
  data() {
    return {
      menu: [
        { id: 1, name_CN: "加载一个模型", name_EN: "Load a model" },
        { id: 2, name_CN: "加载多个模型", name_EN: "Load multiple models" },
        { id: 3, name_CN: "设置场景高宽", name_EN: "Height and width" },
        { id: 4, name_CN: "材质及纹理", name_EN: "Materials and textures" },
        { id: 5, name_CN: "背景颜色及透明度", name_EN: "Background" },
        { id: 6, name_CN: "交互控制", name_EN: "Control" },
        { id: 7, name_CN: "旋转模型", name_EN: "Rotary model" },
        { id: 8, name_CN: "事件", name_EN: "Event" },
        { id: 9, name_CN: "灯光", name_EN: "Light" },
        { id: 10, name_CN: "显示FPS信息", name_EN: "Show stats" },
        { id: 11, name_CN: "相机位置及旋转", name_EN: "Camera" },
        { id: 12, name_CN: "加载进度", name_EN: "Progress bar" },
      ],
      currentMenuId: 1,
    };
  },
  methods: {
    getLocal() {
      let lang = navigator.language.substring(0, 2) || "zh";
      return lang;
    },
    getCurrentLanguageName(id) {
      let menuItem = this.menu.filter((item) => item.id === id)[0];
      let lang = this.getLocal();
      if (lang === "zh") {
        return menuItem.name_CN;
      } else {
        return menuItem.name_EN;
      }
    },
    getMenuId(id) {
      this.currentMenuId = id;
    },
  },
};
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
  padding: 5px 10px;
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