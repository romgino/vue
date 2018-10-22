import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('users/create', credentials)
  },
  logar (dados) {
    return Api().post('users/logar', dados)
  }
}
// AuthenticationService.register({
//    email: 'teste',
//    password: '123456'
// })
