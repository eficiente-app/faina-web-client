import axios from '@/plugins/axios'

export const listar = async ({ commit }) => {
  try {
    // Example use axios
    const res = await axios.get('/tarefa/etapa/tipo')

    if (!res.data.erro) {
      commit('etapas', res.data)
    }
  } catch (error) {
    return error
  }
}

export const exibir = async ({ commit }, id) => {
  try {
    // Example use axios
    const res = await axios.get('/tarefa/etapa/tipo/' + id)
    if (!res.data.erro) {
      return res.data[0]
    }
  } catch (error) {
    return error
  }
}

export const inserir = async ({ commit }, etapa) => {
  try {
    // Example use axios
    const res = await axios.post('/tarefa/etapa/tipo/', etapa)
    return res.data
  } catch (error) {
    return error
  }
}

export const editar = async ({ commit }, etapa) => {
  try {
    // Example use axios
    const res = await axios.put('/tarefa/etapa/tipo/', etapa)
    return res.data
  } catch (error) {
    return error
  }
}

export const deletar = async ({ commit }, id) => {
  try {
    const res = await axios.delete('/tarefa/etapa/tipo/' + id)
    return res.data
  } catch (error) {
    return error
  }
}
