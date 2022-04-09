import Vue from 'vue';
import Vuex from 'vuex';

import member from './modules/member';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    member
  },
  state: {
    version: '1.0'
  },
  getters: {
    nowVersion: (state) => {
      return state.version
    }
  },
  mutations: {
    test() {
      console.log('test');
      return null;
    }
  }
});