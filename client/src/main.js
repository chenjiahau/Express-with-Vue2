import Vue from 'vue'
import VueRouter from 'vue-router';

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue';
import MarketHome from './components/MarketHome';
import MemberList from './components/MemberList';
import MemberDetail from './components/MemberDetail';

Vue.use(BootstrapVue);

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MarketHome },
    { path: '/member-list', component: MemberList },
    { path: '/member-list/member/:id', component: MemberDetail },
    { path: '*', component: MarketHome }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
