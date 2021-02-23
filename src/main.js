import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import './registerServiceWorker'
import './plugins/axios'
import '@/plugins/validate'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import SnackBar from './components/snack.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

Vue.component('snack', SnackBar)
Vue.component('fnatable', () => import('./components/table'))
Vue.component('modal', () => import('./components/modal'))

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
