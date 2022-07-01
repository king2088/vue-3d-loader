<template>
  <div>
    <div class="menu">
      <ul>
        <li v-for="item in menu" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <loaderFilePathVue />
  </div>
</template>
<script>
import loaderFilePathVue from "./loaderFilePath.vue";
export default {
  data() {
    return {
      menu: [
        { id: 1, name: "加载一个模型" },
        { id: 2, name: "加载多个模型" },
        { id: 3, name: "设置场景高宽" },
        { id: 4, name: "材质及纹理" },
        { id: 5, name: "背景颜色及透明度" },
        { id: 6, name: "交互控制" },
        { id: 7, name: "旋转模型" },
        { id: 8, name: "事件" },
        { id: 9, name: "灯光" },
        { id: 10, name: "显示FPS信息" },
        { id: 11, name: "相机位置及旋转" },
        { id: 12, name: "加载进度" },
      ],
    };
  },
  components: {
    loaderFilePathVue,
  },
};
</script>
<style>
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 5px 10px;
}
li:hover {
  background-color: rgb(88, 88, 88);
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