import Vue from 'vue'
import VueRouter from 'vue-router';

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue';
import MarketHome from './components/MarketHome';
import MemberList from './components/MemberList';
import MemberDetail from './components/MemberDetail';
import PageNotFound from './components/PageNotFound';

Vue.use(BootstrapVue);

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MarketHome },
    { path: '/member-list', name: 'memberList', component: MemberList },
    {
      path: '/member-list/member/:id',
      props: true,
      name: 'memberDetail',
      component: MemberDetail
    },
    { path: '*', component: PageNotFound }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
