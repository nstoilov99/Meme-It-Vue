import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueCookie from 'vue-cookie'
import { ModalPlugin } from 'bootstrap-vue'


Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(ModalPlugin);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
