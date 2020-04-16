<template>
  <div>
    <h1>Memes</h1>
      <div v-if="memes" class="meme-box">
          <div a v-for="m in memes" :key="m.memeId" class="card">
            <h3>{{m.memeTitle}}</h3>
            <img v-bind:src="m.imageUrl" alt="404" style="width:100%" />
              <router-link v-if="isAuth" class='view' :to="'detail/'+m._id" tag="button">Comments</router-link>
          </div>
      </div>
  </div>
</template>

<script>
import memesMixin from '../mixins/memes-mixin'
export default {
    props: {
    isAuth: Boolean
  },
  data: function() {
    return {
    }
  },
  beforeCreate() {
    this.$emit('onAuth', this.$cookie.get('x-auth-token') !== null);
  },
  created() {
    this.getAllMemes();
  },
  mixins: [memesMixin]

};
</script>

<style scoped>
.meme-box{
    max-width: 500px;
    margin: auto;

}
.card {
    max-width: 400px;
    margin: auto;
    text-align: center;
    font-family: arial;
  }
h3 {
    text-decoration: underline;
}
.view{
  margin-top: 1px;
}
  
.card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  .card button:hover {
    opacity: 0.7;
  }
</style>