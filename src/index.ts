import { App } from 'vue';
import * as Three from 'three';
import vue3dLoader from './3dLoader/vue3dLoader.vue'

export { Three }

const install = (app: App) => {
  app.component(vue3dLoader.name, vue3dLoader)
}

export default { install, vue3dLoader }

export { vue3dLoader }