import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import dashboard from '../views/dashboard/store/'

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
    dashboard
  }
})
