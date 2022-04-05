<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link
            tag="a"
            to="/"
            exact
          >
            Market
          </router-link>
        </li>
       <li class="breadcrumb-item active" aria-current="page">Member List</li>
      </ol>
    </nav>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(member, index) in memberList' :key="index">
          <th scope="row">{{member.id}}</th>
          <td>{{member.first_name}}</td>
          <td>{{member.last_name}}</td>
          <td>
            <router-link
              tag="button"
              class="btn btn-primary"
              :to="{name: 'memberDetail', params: { id: member.id }}"
            >
              Detail
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
import MemberList from '../mixins/MemberList';

export default {
  name: 'MemberList',
  mixins: [MemberList]
}
</script>

<style scoped>

</style>