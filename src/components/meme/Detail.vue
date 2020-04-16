<template>
  <div>
    <div class="card">
      <h2>{{meme.memeTitle}}</h2>
      <img v-bind:src="meme.imageUrl" alt="404" style="width:50%" />
    </div>
    <p class="comment" v-for="c in comments" :key="c.id">{{c}}</p>
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
import commentMixin from "../mixins/meme-comment-mixin";

export default {
  data() {
    return {
      comment: ""
    };
  },
  beforeCreate() {
    this.$emit("onAuth", this.$cookie.get("x-auth-token") !== null);
  },
  created() {
    this.getMeme(this.$route.params.id);
  },
  methods: {
    memeComment() {
      const payload = {
        comment: this.comment
      };
      this.createComment(payload);
    }
  },
  mixins: [memesMixin, commentMixin]
};
</script>

<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);
form {
  margin-top: 50px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}
.comment {
  margin-top: 50px;
  margin-left: 350px;
  margin-right: 350px;
  padding:25px;
  border: 2px solid lightblue;  
  background-color:rgb(247, 253, 255);
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: lightblue;
  border-right-color: lightblue;
  border-bottom-color: lightblue;
  border-left-color: lightblue; 
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