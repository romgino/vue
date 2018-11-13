<template>
<v-layout row wrap>
   <v-flex>
      <v-card>
        <v-card-title primary-title>
          <strong>Registros</strong>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
           {{ $store.state.isUserLoggedIn }}
           {{ $store.state.user._id }}
           {{ $store.state.user.role }}
           {{ $store.state.user.name }}

        </v-card-text>
      </v-card>
      <br>
      <v-card>
        <v-card-title>
          Registros
        </v-card-title>
        <v-card-text>
           <!-- {{ registros.mesano }} <br/> -->
           {{ dataAtualFormatada() }}
        </v-card-text>
      </v-card>
       <br>
      <!-- <v-card v-for="(lista, index) in listaServiços" :key="index">
        <v-toolbar>
          <v-toolbar-items class="hidden-sm-and-down" style="rgba(0, 0, 0, 0.5)">
            <input
              type="number"
              :ref="'lista'+index"
              @click="soma($event)"
              value=0
              min="0"
              disabled
            />
            <v-btn
              color="teal"
              flat
              name="ok"
              v-on:click="soma('lista'+index, registros._id, index, $store.state.user.name, lista.name)"
            >
              <span></span>
              <v-icon x-large>arrow_upward</v-icon>
            </v-btn>
            <v-btn
              color="teal"
              flat
              v-on:click="subtrai('lista'+index)"
            >
              <span></span>
              <v-icon x-large>arrow_downward</v-icon>
            </v-btn>
              <v-spacer></v-spacer>
            <v-toolbar-title>{{ lista.name }}</v-toolbar-title>
          </v-toolbar-items>
        </v-toolbar>
      </v-card> -->
      <br>
      <v-card v-for="(lista, i) in registroDia" :key="i">
        <v-toolbar>
          <v-toolbar-items class="hidden-sm-and-down" style="rgba(0, 0, 0, 0.5)">
            <input
              type="number"
              :ref="'lista'+i"
              @click="soma($event)"
              value=0
              min="0"
              disabled
            />
            <v-toolbar-title
              :ref="'lista'+i"
              @click="soma($event)">
              {{ lista.qtd }}</v-toolbar-title>
            <v-btn
              color="teal"
              flat
              name="ok"
              v-on:click="soma(registros._id, i, $store.state.user.name, lista.servico)"
            >
              <span></span>
              <v-icon x-large>arrow_upward</v-icon>
            </v-btn>
            <v-btn
              color="teal"
              flat
              v-on:click="subtrai(registros._id, i, $store.state.user.name, lista.servico)"
            >
              <span></span>
              <v-icon x-large>arrow_downward</v-icon>
            </v-btn>
              <v-spacer></v-spacer>
            <v-toolbar-title>{{ lista.servico }}</v-toolbar-title>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
   </v-flex>
</v-layout>
</template>

<script>
import RegistroServices from '@/services/RegistroServices'
export default {
  data: () => {
    return {
      registros: [],
      listaServiços: [],
      registroDia: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      this.registros = (await RegistroServices.index()).data.data
      this.listaServiços = (await RegistroServices.index()).data.listaServicos
      // console.log('regis', this.registros)
      // console.log('lista', this.listaServiços)
      this.preparaServico(this.registros)
    },
    dataAtualFormatada () {
      var data = new Date()
      var dia = data.getDate().toString()
      var diaF = (dia.length === 1) ? '0' + dia : dia
      var mes = (data.getMonth() + 1).toString() // +1 pois no getMonth Janeiro começa com zero.
      var mesF = (mes.length === 1) ? '0' + mes : mes
      var anoF = data.getFullYear()
      return diaF + '/' + mesF + '/' + anoF
    },
    async soma (id, index, user, servico) {
      // console.log(this.registroDia)
      var valorRegistro
      var conter = -1
      this.registroDia.forEach(e => {
        conter++
        if (conter === index) {
          valorRegistro = e.qtd + 1
          e.qtd = valorRegistro
        }
      })
      // console.log(valorRegistro)
      var dados = {
        'id': id,
        'index': index,
        'user': user,
        'servico': servico,
        // 'qtd': this.$refs[lista][0].value
        'qtd': valorRegistro
      }
      // console.log(id)
      // console.log(this.$refs[lista][0].value)
      await RegistroServices.addServico(dados)
    },
    async subtrai (id, index, user, servico) {
      var valorRegistro
      var conter = -1
      this.registroDia.forEach(e => {
        conter++
        if (conter === index) {
          valorRegistro = e.qtd - 1
          e.qtd = valorRegistro
        }
      })
      var dados = {
        'id': id,
        'index': index,
        'user': user,
        'servico': servico,
        // 'qtd': this.$refs[lista][0].value
        'qtd': valorRegistro
      }
      // console.log(id)
      // console.log(this.$refs[lista][0].value)
      await RegistroServices.subServico(dados)
    },
    async preparaServico (dados) {
      // var teste = 0
      var data = new Date()
      var dia = data.getDate().toString()
      this.listaServiços.forEach(t => {
        this.registroDia.push({
          'qtd': 0,
          'servico': t.name
        })
      })
      // console.log('cheguei')
      // console.log(this.registroDia)
      // console.log(dia)
      // console.log(dados.listadia)
      dados.listadia.forEach(e => {
        // console.log(e.dia)
        if (e.dia === parseInt(dia, 10)) {
          e.atendente.forEach(e1 => {
            if (e1.nome === this.$store.state.user.name) {
              e1.registro.forEach(e2 => {
                this.registroDia.forEach(r => {
                  if (r.servico === e2.servico) {
                    r.qtd = e2.qtd
                  }
                })
              })
            }
          })
        }
      })
      // console.log('dia', this.registroDia)
    }
  }
}
</script>

<style>
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    cursor:pointer;
    display:block;
    width:8px;
    color: #333;
    text-align:center;
    position:relative;
}
   input[type=number] {
   -moz-appearance: textfield;
   appearance: textfield;
   margin: 0;
}
</style>
