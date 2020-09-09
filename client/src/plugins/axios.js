import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

const Axios = axios.create({
  baseURL: `${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/api`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('ig-relatorio:token')
  }
})

Axios.interceptors.response.use((response) => {
  if (response.data) {
    if (typeof response.data.mensagem === 'string') Vue.prototype.$notificacao(response.data.mensagem)
    else if (typeof response.data.erro === 'string') {
      if (response.data.tipo === 'Error') Vue.prototype.$notificacao(response.data.erro, 'erro')
      else Vue.prototype.$notificacao(response.data.erro, 'erro', true)
    } else if (typeof response.data.atencao === 'string') Vue.prototype.$notificacao(response.data.atencao, 'atencao')
    else if (typeof response.data.informacao === 'string') Vue.prototype.$notificacao(response.data.informacao, 'informacao')
  }

  return response
}, (error) => {
  if (!error.response) {
    Vue.prototype.$notificacao('Erro ao processar requisição. Tente novamente!', 'erro')
  } else if (error.response.status === 401) {
    localStorage.removeItem('ig-relatorio:token')

    router.push('/login')
    Vue.prototype.$notificacao('Por Favor faça login novamente', 'atencao')
  } else if (error.response.status === 403) {
    Vue.prototype.$notificacao('Usuário sem permissão', 'atencao')
  } else if (error.response.status === 404) {
    Vue.prototype.$notificacao('Requisição não encontrada!', 'erro')
  }

  return Promise.reject(error)
})

Vue.prototype.$axios = Axios

export default Axios
