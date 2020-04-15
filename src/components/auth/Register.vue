<template>
  <div class="register-form">
    <form  @submit.prevent="register">
      <h2 class="text-center">Register</h2>
      <div class="form-group">
        <input type="text" id="email" name="email" v-model="email" @blur="$v.email.$touch"  class="form-control" placeholder="E-mail"/>
        <template v-if="$v.email.$error">
            <p v-if="!$v.email.required" class="error-message">Email is required!</p>
            <p v-else-if="!$v.email.email" class="error-message">Please enter valid email!</p>
        </template>
        
      </div>
      <div>
        <div class="form-group">
          <input
            v-model="password"
            @blur="$v.password.$touch" 
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Password"
          />
        <template v-if="$v.password.$error">
            <p v-if="!$v.password.required" class="error-message">Password is required!</p>
            <p v-else-if="!$v.password.minLength || !$v.password.maxLength" class="error-message">Password should be between 4 and 12 symbols!</p>
        </template>
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="rePassword"
            @blur="$v.rePassword.$touch" 
            name="rePassword"
            id="rePassword"
            class="form-control"
            placeholder="Re-password"
          />
        </div>
        <template v-if="$v.rePassword.$error">    
            <p v-if="!$v.rePassword.sameAs" class="error-message">Passwords does not match!</p>
        </template>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Register</button>
      </div>
    </form>
    <p class="text-center">
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import userMixin from "../mixins/user-register-mixin"
import { required, email, sameAs, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin, userMixin],
  data() {
    return {
      email: "",
      password: "",
      rePassword: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4), 
      maxLength: maxLength(13)
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  },
  methods: {
    register() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.userRegister(payload);
    }
  }
};
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
.form-control,
.btn {
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