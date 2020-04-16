<template>
  <div class="create-form">
  <form @submit.prevent="createMeme">
      <h2 class="text-center">Upload your meme!</h2>       
      <div class="form-group">
          <label for="memeTitle">Title</label>
          <input v-model="memeTitle" @blur="$v.memeTitle.$touch" type="text" class="form-control" placeholder="Title" name="Title">
          <template v-if="$v.memeTitle.$error">
            <p v-if="!$v.memeTitle.required" class="error-message">Title is required!</p>
        </template>
      </div>
        <div class="form-group">
            <label for="memeTitle">Image URL</label>
          <input v-model="imageUrl" @blur="$v.imageUrl.$touch" type="imageUrl" name="imageUrl" id="imageUrl"
          class="form-control" placeholder="https://...">
        </div>
        <template v-if="$v.imageUrl.$error">
            <p v-if="!$v.imageUrl.required" class="error-message">Please enter a http url!</p>
            <p v-else-if="!$v.imageUrl.httpRegex" class="error-message">Url should start with http!</p>
        </template>
      <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Create</button>
      </div>     
  </form>
</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, helpers} from "vuelidate/lib/validators";
import memeMixin from "../mixins/meme-create-mixin.js";

const httpRegex = helpers.regex('httpRegex', /https?:\/\/.*/)

// import authAxios from "@/axios";
export default {
    mixins: [validationMixin, memeMixin],
  data() {
    return {
      memeTitle: "",
      imageUrl: "",
    };
  },
  validations:{
    memeTitle: {
      required,
      
    },
    imageUrl: {
      required,
      httpRegex
    },
  },
  methods: {
    createMeme() {
      const payload = {
        memeTitle: this.memeTitle,
        imageUrl: this.imageUrl,
      };
      this.memeCreate(payload);  
    }
  }
}
</script>

<style scoped>
.create-form {
  width: 450px;
    margin: 50px auto;
}
  .create-form form {
    margin-bottom: 15px;
      background: #f7f7f7;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
      padding: 30px;
  }
  .create-form h2 {
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