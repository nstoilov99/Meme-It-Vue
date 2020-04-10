<template>
  <div id="app">
    <Navigation @onAuth="isAuth = $event" :isAuth="isAuth" />
    <router-view @onAuth="isAuth = $event" :isAuth="isAuth" ></router-view>
  </div>
</template>

<script>
import Navigation from './components/shared/Navigation.vue'

export default {
  name: 'App',
   data: function() {
    return {
      isAuth: this.$cookie.get('x-auth-token') !== null
    }
  },
  components: {
    Navigation
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
