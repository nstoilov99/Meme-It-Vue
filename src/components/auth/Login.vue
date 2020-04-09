<template>
<div class="login-form">
  <form >
      <h2 class="text-center">Login</h2>       
      <div class="form-group">
          <input type="text" class="form-control" placeholder="E-mail" name="email" id="email"
          pattern="[a-zA-Z0-9.-_]{6,}@gmail\.com" required>
          <p class="error-message">Please enter valid gmail.com email!</p>
      </div>
        <div class="form-group">
          <input name="password" id="password"
          class="form-control" placeholder="Password">
        </div>
        <p class="error-message" >Please enter a password!</p>
      <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Login</button>
      </div>     
  </form>
  <p class="text-center"><router-link to="/register">Create an Account</router-link></p>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);

.login-form {
  width: 340px;
    margin: 50px auto;
}
  .login-form form {
    margin-bottom: 15px;
      background: #f7f7f7;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
      padding: 30px;
  }
  .login-form h2 {
      margin: 0 0 15px;
  }
  .form-control, .btn {
      min-height: 38px;
      border-radius: 2px;
  }
  .btn {        
      font-size: 15px;
      font-weight: bold;
  }
</style>