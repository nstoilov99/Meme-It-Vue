import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(VueCookie);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
