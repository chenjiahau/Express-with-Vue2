import Vue from 'vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.mixin({
  data: function () {
    return {
      version: '1.0'
    }
  },
  filters: {
    uppercase: function(value) {
      return value.toUpperCase();
    }
  }
})

import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')
