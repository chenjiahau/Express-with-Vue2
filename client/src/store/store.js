import Vue from 'vue';
import Vuex from 'vuex';
import memberList from '../data/memberList';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    member: {
      list: memberList
    }
  },
  getters: {
    memberList: (state) => {
      return state.member.list;
    },
    memberCount: (state) => {
      return state.member.list.length;
    },
  },
  actions: {
    changeAlive(context, payload) {
      setTimeout(() => context.commit('changeAlive', payload), 1000);
    }
  },
  mutations: {
    changeAlive(state, payload) {
      state.member.list.map(member => {
        if (member.id === payload.id) {
          member.alive = !member.alive
        }
      });
    }
  }
});