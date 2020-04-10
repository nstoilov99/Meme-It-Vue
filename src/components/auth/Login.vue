<template>
<div class="login-form">
  <form >
      <h2 class="text-center">Login</h2>       
      <div class="form-group">
          <input v-model="email" @blur="$v.email.$touch" type="text" class="form-control" placeholder="E-mail" name="email" id="email">
          <template v-if="$v.email.$error">
            <p v-if="!$v.email.required" class="error-message">Email is required!</p>
            <p v-else-if="!$v.email.email" class="error-message">Please enter valid email!</p>
        </template>
      </div>
        <div class="form-group">
          <input v-model="password" @blur="$v.password.$touch" name="password" id="password"
          class="form-control" placeholder="Password">
        </div>
        <template v-if="$v.password.$error">
            <p v-if="!$v.password.required" class="error-message">Please enter a password!</p>
            <p v-else-if="!$v.password.minLength || !$v.password.maxLength" class="error-message">Password should be between 4 and 12 symbols!</p>
        </template>
      <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Login</button>
      </div>     
  </form>
  <p class="text-center"><router-link to="/register">Create an Account</router-link></p>
</div>
  
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations:{
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4), 
      maxLength: maxLength(13)
    },
  }

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
  p.error-message {
  color: red;
  font-style: italic;
  }
</style>