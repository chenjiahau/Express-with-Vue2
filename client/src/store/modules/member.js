import memberList from '../../data/memberList';

export default {
  namespaced: true,
  state: {
    list: memberList
  },
  getters: {
    memberList: (state) => {
      return state.list;
    },
    memberCount: (state) => {
      return state.list.length;
    },
  },
  actions: {
    changeAlive(context, payload) {
      setTimeout(() => context.commit('changeAlive', payload), 1000);
    }
  },
  mutations: {
    changeAlive(state, payload) {
      state.list.map(member => {
        if (member.id === payload.id) {
          member.alive = !member.alive
        }
      });
    }
  }
};