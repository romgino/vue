import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Servico from '@/components/Servico'
import Registro from '@/components/Registro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: Servico
    },
    {
      path: '/registros',
      name: 'registros',
      component: Registro
    }

  ]
})
