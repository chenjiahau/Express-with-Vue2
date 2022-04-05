import memberList from '../data/memberList';

export default {
  data: function () {
    return {
      memberList
    }
  },
  methods: {
    getMemberById: function (id) {
      return this.memberList.filter(member => member.id === +id)[0]
    }
  }
}