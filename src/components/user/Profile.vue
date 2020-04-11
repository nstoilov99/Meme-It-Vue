<template>
  <div>
    <div class="col-md-6 profile-info">
      <div class="panel panel-default">
        <div class="text-underline panel-body panel-primary">
          Logged as:
          <b>{{this.user}}</b>
          <span class="text-bold"></span>
        </div>
        <div class="panel-footer profile-form">
          <form @submit.prevent="changeUserInfo">
            <div class="form-group">
              <label for="email">New address</label>
              <input
                v-model="email"
                @blur="$v.email.$touch"
                formControlName="email"
                type="text"
                id="newEmail"
                class="form-control"
                placeholder="john.doe@domain.bg"
              />
              <template v-if="$v.email.$error">
                <p v-if="!$v.email.required" class="error-message">Email is required!</p>
                <p v-else-if="!$v.email.email" class="error-message">Please enter valid email!</p>
              </template>
            </div>
            <div formGroupName="passwords">
              <label for="password">New Password</label>
              <input
                v-model="password"
                @blur="$v.password.$touch"
                formControlName="password"
                type="password"
                id="password"
                class="form-control"
                placeholder="************"
              />
              <template v-if="$v.password.$error">
                <p v-if="!$v.password.required" class="error-message">Password is required!</p>
                <p
                  v-else-if="!$v.password.minLength || !$v.password.maxLength"
                  class="error-message"
                >Password should be between 4 and 12 symbols!</p>
              </template>
            </div>
            <div class="form-group">
              <label for="rePassword">Re-Password</label>
              <input
                v-model="rePassword"
                @blur="$v.rePassword.$touch"
                formControlName="rePassword"
                type="password"
                id="rePassword"
                class="form-control"
                placeholder="************"
              />
              <template v-if="$v.rePassword.$error">
                <p v-if="!$v.rePassword.sameAs" class="error-message">Passwords does not match!</p>
              </template>
            </div>
            <button type="submit" class="btn btn-primary">Change profile information</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel-footer">
        <div class="panel panel-default">
          <div class="panel-body panel-primary">My own memes: {{memes.length}}</div>
          <div class="panel-footer">
            <ul class="list-group">
              <li v-for="m in memes" :key="m.memeId" class="list-group-item">
                <div class="card">
                  <h3>{{m.memeTitle}}</h3>
                  <img v-bind:src="m.imageUrl" alt="404" style="width:100%" />
                  <button
                    @click="deleteMeme(m._id)"
                    type="submit"
                    class="btn btn-primary btn-block"
                  >Delete</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

import authAxios from "@/axios";
import memesMixin from "../mixins/user-memes-mixin";

export default {
  mixins: [validationMixin, memesMixin],
  data() {
    return {
      user: sessionStorage.getItem("user"),
      userId: sessionStorage.getItem("userId"),
      email: sessionStorage.getItem("user"),
      password: "",
      rePassword: ""
    };
  },
  created() {
    this.getAllMemes();
    console.log(this.memes);
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
    changeUserInfo() {
      const payload = {
        email: this.email,
        password: this.password
      };

      // Project Settings -> Web API key
      authAxios
        .put("user/" + sessionStorage.getItem("userId"), payload)
        .then(res => {
          //   const { email, _id } = res.data;
          console.log(res);

          //   sessionStorage.setItem("user", email);
          //   sessionStorage.setItem("userID", _id);
          this.$router.go();
        })
        .catch(err => {
          console.error(err);
        });
    },
    deleteMeme(memeId) {
      authAxios
        .delete("memes/" + memeId)
        .then(res => {
          //   const { email, _id } = res.data;
          console.log(res);

          this.$router.go();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
p.error-message {
  color: red;
  font-style: italic;
}
.card {
  max-width: 475px;
  margin: auto;
  text-align: center;
  font-family: arial;
}
h3 {
  text-decoration: underline;
}
.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 25%;
  margin: auto;
  margin-top: 15px;
  font-size: 18px;
}
</style>