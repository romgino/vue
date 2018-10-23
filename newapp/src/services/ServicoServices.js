import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('servicos/create', credentials)
  },
  logar (dados) {
    return Api().get('servicos', dados)
  }
}