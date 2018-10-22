<template>
  <div id="app">
    <v-app id="inspire">
      <v-header></v-header>
      <v-content>
        <v-container fluid fill-height>
          <router-view/>
        </v-container>
      </v-content>
      <v-footer></v-footer>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
