import Api from '@/services/Api'
export default {
  register (credentials) {
    return Api().post('registros/create', credentials)
  },
  index (dados) {
    return Api().get('registros', dados)
  },
  addServico (dados) {
    return Api().post('registros/addServico', dados)
  },
  subServico (dados) {
    return Api().post('registros/addServico', dados)
  }
}
