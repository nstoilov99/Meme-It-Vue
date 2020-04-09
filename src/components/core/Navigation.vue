<template>
  <div class="topnav">
    <router-link class='link' to="/">Home</router-link>
    <router-link class='link' to="/news">News</router-link>
    <router-link class='link' to="/register">Register</router-link>
    <router-link class='link' to="/login">Login</router-link>
  </div>
</template>

<script>
export default {};
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

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav .router-link-exact-active {
  background-color: #4CAF50;
  color: white;
}
</style>