import axios from '@/plugins/axios'

export const listar = async ({ commit }, params) => {
  try {
    // Example use axios
    const res = await axios.get('/pasta', params)

    return res.data
  } catch (error) {
    return error
  }
}
