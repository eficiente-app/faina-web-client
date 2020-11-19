export const login = async ({ commit }, param) => {
  try {
    commit('notificacao', {
      color: 'error',
      text: 'Sucesso'
    })
    return param
  } catch (error) {
    return error
  }
}
