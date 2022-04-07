import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'localhost:8080';
Vue.http.headers.common['Content-Type'] = 'application/json; charset=utf-8';
Vue.http.interceptors.push((request, next) => {
  console.log('interceptors');
  next();
});

import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');
