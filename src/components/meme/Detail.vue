<template>
  <div>
    <div class="card">
      <h2>{{meme.memeTitle}}</h2>
      <img v-bind:src="meme.imageUrl" alt="404" style="width:50%" />
    </div>
    <form @submit.prevent="memeComment">
      <textarea v-model="comment">
            Comment here...
        </textarea>
      <button type="submit" class="btn btn-primary btn-block">Comment</button>
    </form>
  </div>
</template>

<script>
import memesMixin from "../mixins/meme-mixin";

import authAxios from "@/axios";
export default {
  data() {
    return {
      comment: "",
    };
  },
  beforeCreate() {
    this.$emit("onAuth", this.$cookie.get("x-auth-token") !== null);
  },
  created() {
    this.getAllMemes(this.$route.params.id);
  },
  methods: {
      memeComment() {
      const payload = {
        comment: this.comment
      };
      authAxios
        .put(
          '/memes/detail/'+this.$route.params.id,
            payload
        )
        .then(res => {
            console.log(res);
            
        })
        .catch(err => {
          console.error(err);
        });
    },
    
  },
  mixins: [memesMixin]
};
</script>

<style scoped>
form {
  margin-top: 50px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}

textarea {
  width: 54%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
form button {
  border: none;
  outline: 0;
  margin-top: 50px;
  margin-bottom: 100px;
  padding: 12px;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 25%;
  font-size: 18px;
  margin: auto;
}
</style>