<template>
  <div id="app" class="container">
    <div class="block">
      <h1>{{title}}({{memberCount}})</h1>
    </div>
    <div class="block">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Alive</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(member, index) in memberList' :key="index">
            <th scope="row">{{member.id}}</th>
            <td>{{member.first_name}} {{member.last_name}}</td>
            <td>{{member.email}}</td>
            <td>{{member.gender}}</td>
            <td>{{liveState(member)}}</td>
            <td>
              <button @click="changeAlive({id: member.id, alive: member.alive})">{{member.alive === true ? 'To Dead' : 'To Alive'}}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  data: function() {
    return {
    }
  },
  methods: {
    ...mapActions('member', ['changeAlive'])
    // ...mapActions({
    //   'changeAlive': 'member/changeAlive'
    // })
  },
  computed: {
    title() {
      return 'Member List'
    },
    liveState() {
      return function(member) {
        if (member.alive)
          return 'Alive';
        else
          return 'Died';
      }
    },
    ...mapGetters('member', [ 'memberList', 'memberCount' ])
    // ...mapGetters({
    //   'memberList': 'member/memberList',
    //   'memberCount': 'member/memberCount'
    // })
  }
}
</script>

<style>
  .block {
    margin: 12px 0;
  }

  input {
    margin-right: 6px;
  }
</style>
