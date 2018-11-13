import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('servicos/create', credentials)
  },
  index (dados) {
    return Api().get('servicos', dados)
  }
}
