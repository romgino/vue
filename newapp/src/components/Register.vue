<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="email" id="email" v-model="email">
    <br>
    <input type="password" name="password" id="password" v-model="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationServices'
export default {
  // name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email foi mudado', value)
  //   }
  // },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      // console.log('register button was clicked', this.email, this.password)
      console.log(response.data)
    }
  }
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
