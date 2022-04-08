import Vue from 'vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

import App from './App.vue'
import store from './store/store';

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
