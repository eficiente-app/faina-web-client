export default {
  registros (state, params) {
    params.forEach(element => {
      // element
    })
    state.registros = params
  },
  tipos (state, params) {
    state.tipos = params
  }
}
