<template>
  <div class="register-form">
  <form>
      <h2 class="text-center">Register</h2>       
      <div class="form-group">
          <input type="text" class="form-control" placeholder="E-mail"  name="email" id="email">
          <p class="error-message">Please enter valid gmail.com email!</p>
      </div>
      <div>
        <div class="form-group">
          <input
          type="password" name="password" id="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
          <input
          type="password" name="rePassword" id="rePassword" class="form-control" placeholder="Re-password" required>
        </div>
        <p class="error-message" >Passwords don't match!</p>
      </div>
      <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Register</button>
      </div>    
  </form>
  <p class="text-center"><router-link to="/login">Login</router-link></p>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);

.register-form {
    width: 340px;
    margin: 50px auto;
}
  .register-form form {
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