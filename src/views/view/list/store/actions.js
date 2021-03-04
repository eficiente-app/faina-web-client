import axios from '@/plugins/axios'

export const listar = async ({ commit }, dados) => {
  try {
    const res = await axios.get('/view/list', {
      params: dados
    })

    if (res && !res.erro) commit('registros', res.data.data)

    return res.data
  } catch (error) {
    return null
  }
}
