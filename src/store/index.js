import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import dashboard from '../views/dashboard/store/'
import pastas from '../views/pastas/store'
import tarefas from '../views/tarefas/store'
import etapas from '../views/etapas/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    dashboard,
    pastas,
    tarefas,
    etapas
  }
})
