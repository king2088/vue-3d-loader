# Get started

## Install

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# yarn
yarn add vue-3d-loader
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# npm
npm install vue-3d-loader
```

  </CodeGroupItem>
</CodeGroup>

## Use

### Use in global

If use in global, insert code in entry file：

```javascript
/* vue2 */
import vue3dLoader from "vue-3d-loader";
Vue.use(vue3dLoader)

/* vue3 */
import vue3dLoader from "vue-3d-loader";
createApp(App).use(vue3dLoader).mount('#app')
```

### Non-global use

insert code in your vue files:

```javascript
// vue3dLoader in {...}
import { vue3dLoader } from "vue-3d-loader";
```

Use tags in your components `<vue3dLoader></vue3dLoader>`

### demo code

```vue
<vue3dLoader
  :height="200"
  :showFps="true"
  :filePath="['/fbx/1.fbx', '/obj/2.obj', '/gltf/3.gltf']"
  :mtlPath="[null, '/obj/2.mtl', null]"
  :backgroundColor="0xff00ff"
></vue3dLoader>
```
