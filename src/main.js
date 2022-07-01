import Vue from 'vue'
import App from './App.vue'
import vue3dLoader from './index'

Vue.config.productionTip = false
Vue.use(vue3dLoader)

new Vue({
  render: h => h(App),
}).$mount('#app')
