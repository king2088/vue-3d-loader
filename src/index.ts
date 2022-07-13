import { App } from 'vue';
import * as Three from 'three';
import vue3dLoader from './3dLoader/vue3dLoader.vue'

export { Three }

const components = [vue3dLoader]

const INSTALL_KEY = Symbol('VUE_3D_LOADER_INSTALLED')

const install = (app: App) => {
  if ((app as any)[INSTALL_KEY]) return;
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default { install, ...components }

export { install, vue3dLoader }