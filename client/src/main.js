import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueQuill from 'vue-quill'

Vue.use(VueQuill)

Vue.config.productionTip = false

Vue.component('modal', () => import('./components/modal'))
Vue.component('gantt', () => import('./components/Gantt.vue'))

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
