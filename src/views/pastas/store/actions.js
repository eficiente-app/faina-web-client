import axios from '@/plugins/axios'

export const listar = async ({ commit }) => {
  try {
    // Example use axios
    const res = await axios.get('/pasta')

    if (!res.data.erro) {
      commit('pastas', res.data)
    }
  } catch (error) {
    return error
  }
}

export const exibir = async ({ commit }, id) => {
  try {
    // Example use axios
    const res = await axios.get('/pasta/' + id)
    if (!res.data.erro) {
      return res.data[0]
    }
  } catch (error) {
    return error
  }
}

export const inserir = async ({ commit }, pasta) => {
  try {
    // Example use axios
    const res = await axios.post('/pasta/', pasta)
    return res.data
  } catch (error) {
    return error
  }
}

export const editar = async ({ commit }, pasta) => {
  try {
    // Example use axios
    const res = await axios.put('/pasta/', pasta)
    return res.data
  } catch (error) {
    return error
  }
}

export const deletar = async ({ commit }, id) => {
  try {
    const res = await axios.delete('/pasta/' + id)
    return res.data
  } catch (error) {
    return error
  }
}
