<template>
  <v-layout color="primary" row wrap>
    <v-flex>
      <v-card>
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
        <v-card-text>
        lista aqui
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Header from '@/components/Header'
import ServicoServices from '@/components/Servico'
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
      }
    }
  },
  methods: {
    async create () {
      try {
        await ServicoServices.post(this.servico)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>
</style>
