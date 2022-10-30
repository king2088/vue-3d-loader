# 快速上手

## 安装

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add vue-3d-loader
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install vue-3d-loader
```

  </CodeGroupItem>
</CodeGroup>

## 使用

### 全局引入
全局使用，在入口文件中全局安装，代码如下：

```javascript
/* vue2 */
import vue3dLoader from "vue-3d-loader";
Vue.use(vue3dLoader)

/* vue3 */
import vue3dLoader from "vue-3d-loader";
createApp(App).use(vue3dLoader).mount('#app')
```
### 非全局引入

非全局使用，在Vue文件中使用如下代码:
```javascript
// 注意 vue3dLoader 写在 {...} 内
import { vue3dLoader } from "vue-3d-loader";
```
在组件中使用标签`<vue3dLoader></vue3dLoader>`

### 组件标签应用
```vue
<vue3dLoader
  :height="200"
  :showFps="true"
  :filePath="['/fbx/1.fbx', '/obj/2.obj', '/gltf/3.gltf']"
  :mtlPath="[null, '/obj/2.mtl', null]"
  :backgroundColor="0xff00ff"
></vue3dLoader>
```
