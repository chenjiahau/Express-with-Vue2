import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');
