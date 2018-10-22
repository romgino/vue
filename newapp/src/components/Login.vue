<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <br><br>
      <v-card ref="form" autocomplete="off">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[ruless.required]"
            label="Nome Completo"
            required
          ></v-text-field>
          <v-text-field
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            v-model="password"
            label="Senha"
            value=""
            :rules="[ruless.required, ruless.min]"
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="logar">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Header from '@/components/Header'
import AuthenticationService from '@/services/AuthenticationServices'
export default {
  components: {
    'v-header': Header
  },
  // name: 'Register',
  data () {
    return {
      show1: false,
      show2: false,
      select: null,
      valid: false,
      name: '',
      password: '',
      ruless: {
        required: value => !!value || 'Required.',
        min: v1 => v1.length >= 8 || 'Min 8 characters',
        emailMatch: () => 'The email and password you entered don\'t match',
        compare: v => v !== '123' || 'ok'
      }
    }
  },
  watch: {
  },
  methods: {
    async logar () {
      try {
        const response = await AuthenticationService.logar({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConf: this.passwordConf,
          turno: this.turno
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        // console.log('register button was clicked', this.name, this.email, this.password, this.turno, this.passwordConf)
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
