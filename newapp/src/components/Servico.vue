<template>
  <v-layout color="primary" row wrap>
    <v-flex>
      <v-card >
        <v-bottom-sheet v-model="sheet">
          <v-btn
            slot="activator"
            color="purple"
            dark
            justify-center
          >
            Cadastrar Serviços
          </v-btn>
          <v-card>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Cadastro de Serviços</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="name"
                    v-model="servico.name"
                  ></v-text-field>
                  <v-text-field
                    label="observações"
                    v-model="servico.ref"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions justify-center>
                <v-btn color="success" @click="create">Cadastrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-bottom-sheet>
      </v-card>
      <br>
      <v-card>
        <v-card-title primary-title justify-center>
          Lista de Serviços
        </v-card-title>
        <hr>
         <v-data-table
          :headers="headers"
          :items="servicos"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{props.item.name}}</td>
            <td class="text-xs-left">{{props.item.ref}}</td>
            <td class="text-xs-center">
              <v-btn fab dark small color="primary">
                <v-icon> edit </v-icon>
              </v-btn>
              <v-btn fab dark small color="red">
                <v-icon> remove </v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Header from '@/components/Header'
import ServicoServices from '@/services/ServicoServices'

export default {
  components: {
    'v-header': Header
  },
  data: () => {
    return {
      sheet: false,
      servico: {
        name: null,
        ref: null
      },
      servicos: null,
      headers: [
        {
          text: 'Serviços',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Observação',
          value: 'observacao',
          sortable: false,
          align: 'left'
        },
        { text: 'Ações',
          value: 'acoes',
          sortable: false,
          align: 'center'
        }
      ]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async create () {
      try {
        await ServicoServices.register(this.servico)
        alert('Enviado com sucesso!')
        this.sheet = false
        this.servico = {name: null, ref: null}
        this.init()
      } catch (e) {
        console.log(e)
      }
    },
    async init () {
      this.servicos = (await ServicoServices.index()).data
      console.log('servi', this.servicos)
    }
  }
}
</script>

<style>
</style>
