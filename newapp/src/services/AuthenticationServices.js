import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('users/create', credentials)
  }
}
// AuthenticationService.register({
//    email: 'teste',
//    password: '123456'
// })
