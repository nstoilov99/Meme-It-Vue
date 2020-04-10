<template>
  <div class="topnav">
    <router-link class='link' to="/">Home</router-link>
    <router-link class='link' to="/news">News</router-link>
    <router-link v-if="!isAuth" class='link-float-right' to="/register">Register</router-link>
    <router-link v-if="!isAuth" class='link-float-right' to="/login">Login</router-link>

    <a v-if="isAuth" class='link-float-right' @click="onLogout">Logout</a>
    <router-link v-if="isAuth" class='link-float-right' to="/register">Profile</router-link>
  </div>
    
</template>

<script>
export default {
  props: {
    isAuth: Boolean
  },
  name: "Navigation",
  methods: {
    onLogout() {
      this.$emit('onAuth', false);
      this.$cookie.delete('x-auth-token', {domain: 'localhost'});
      
    }
  }
};
</script>

<style>
.topnav {
  background-color: #333;
  overflow: hidden;
  
  text-decoration: none;
}

/* Style the links inside the navigation bar */
.topnav .link{
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav .link-float-right{
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav .router-link-exact-active {
  background-color: #2e6da4;
  color: white;
}
</style>