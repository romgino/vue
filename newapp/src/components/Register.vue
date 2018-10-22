<template>
<v-layout justify-center>
  <v-flex xs12 sm10 md8 lg6>
    <br><br>
    <v-card ref="form">
      <v-card-text>
        <v-text-field
          ref="name"
          v-model="name"
          :rules="[ruless.required]"
          label="Nome Completo"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
        <v-select
          v-model="turno"
          ref="turno"
          :rules="ruless.required"
          :items="turnos"
          label="Turno"
          placeholder="Selecione..."
          required
        ></v-select>
        <v-text-field
          :append-icon="show1 ? 'visibility_off' : 'visibility'"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          v-model="password"
          label="Senha"
          value=""
          :rules="[ruless.required, ruless.min]"
        ></v-text-field>
        <v-text-field
          :append-icon="show2 ? 'visibility_off' : 'visibility'"
          :type="show2 ? 'text' : 'password'"
          @click:append="show2 = !show2"
          v-model="passwordConf"
          label="Confirmação Senha"
          id="passwordConf"
          value=""
          :rules="[ruless.required]"
        ></v-text-field>
      </v-card-text>
      <v-divider class="mt-5"></v-divider>
      <v-card-actions>
        <v-btn flat>Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
        </v-slide-x-reverse-transition>
        <v-btn color="primary" flat @click="register">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationServices'
export default {
  // name: 'Register',
  data () {
    return {
      show1: false,
      show2: false,
      select: null,
      valid: false,
      name: '',
      email: '',
      turno: '',
      password: '',
      passwordConf: '',
      turnos: ['manha', 'tarde'],
      ruless: {
        required: value => !!value || 'Required.',
        min: v1 => v1.length >= 8 || 'Min 8 characters',
        emailMatch: () => 'The email and password you entered don\'t match',
        compare: v => v !== '123' || 'ok'
      },
      emailRules: [
        (v) => !!v || 'campo obrigatório',
        // eslint-disable-next-line
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  watch: {
    password (value) {
      console.log('email foi mudado', value)
    },
    name () {
      this.errorMessages = ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        name: this.name,
        email: this.email,
        password: this.password,
        passwordConf: this.passwordConf,
        turno: this.turno
      })
      // console.log('register button was clicked', this.name, this.email, this.password, this.turno, this.passwordConf)
      console.log(response.data)
    },
    submit () {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true
        this.$refs[f].validate(true)
      })
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
