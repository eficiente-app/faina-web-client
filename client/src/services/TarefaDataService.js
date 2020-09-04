import http from '../http-common'

class TarefaDataService {
  getAll () {
    return http.get('/tarefa')
  }

  get (id) {
    return http.get(`/tarefa/${id}`)
  }

  create (data) {
    return http.post('/tarefa', data)
  }

  update (id, data) {
    return http.put(`/tarefa/${id}`, data)
  }

  delete (id) {
    return http.delete(`/tarefa/${id}`)
  }

  deleteAll () {
    return http.delete('/tarefa')
  }

  findByTitle (titulo) {
    return http.get(`/tarefa?titulo=${titulo}`)
  }
}

export default new TarefaDataService()
