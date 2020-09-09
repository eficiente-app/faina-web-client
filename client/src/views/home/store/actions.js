import axios from '@/plugins/axios'

export const listarTarefas = async ({ commit }) => {
  try {
    const res = await axios.get('inicio/tarefas')

    if (!res.data.erro) commit('tarefas', res.data)

    return res.data
  } catch (error) {
    return error
  }
}
