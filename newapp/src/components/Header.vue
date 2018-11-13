<template>
<div>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
      v-if="$store.state.isUserLoggedIn"
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click="navegateTo({name: 'servicos'})">
            <v-list-tile-title>Serviços</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click="navegateTo({name: 'registros'})">
            <v-list-tile-title>Registros</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="$store.state.isUserLoggedIn"></v-toolbar-side-icon>
        <v-toolbar-title>App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outline v-if="!$store.state.isUserLoggedIn" @click="navegateTo({name: 'login'})">Entrar</v-btn>
        <v-btn outline v-if="!$store.state.isUserLoggedIn" @click="navegateTo({name: 'register'})">Registrar</v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn" @click="logout()">Sair</v-btn>
    </v-toolbar>
    </div>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  }),
  methods: {
    navegateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'root' })
    }
  }
}
</script>
