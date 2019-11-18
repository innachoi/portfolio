import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './requests';
import SimpleVueValidation from 'simple-vue-validator';


Vue.use(SimpleVueValidation);

store.$axios = axios;

new Vue({
  el: "#app-root",
  router,
  store,
  axios,
  render: h => h(App)
});