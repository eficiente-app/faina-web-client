import Vue from 'vue'
import axios from 'axios'

const Axios = axios.create({
  baseURL: `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/`,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('faina:token')
  }
})

Vue.prototype.$axios = Axios

export default Axios
