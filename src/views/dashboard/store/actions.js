export const login = async ({ commit }, param) => {
  try {
    commit('registros', ['teste'])
    return param
  } catch (error) {
    return error
  }
}
