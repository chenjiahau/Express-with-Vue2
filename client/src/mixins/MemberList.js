import memberList from '../data/memberList';

export default {
  data: function () {
    return {
      memberList
    }
  },
  created() {
    this.memberList.map(member => member['messages'] = []);
  },
  methods: {
    getMemberById: function (id) {
      return this.memberList.filter(member => member.id === +id)[0]
    },
    addMessage: function (id, message) {
      this.memberList.map(member => {
        if (member.id === id) {
          member.messages.push({
            id: member.messages.length,
            message
          })
        }
      })
    }
  }
}