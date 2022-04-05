<template>
  <div v-if="member">
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
        <li class="breadcrumb-item">
          <router-link
            tag="a"
            :to="{ name: 'memberList' }"
            exact
          >
            Member List
          </router-link>
        </li>
       <li class="breadcrumb-item active" aria-current="page">{{member['first_name']}} {{member['last_name']}}</li>
      </ol>
    </nav>
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">{{member['first_name']}} {{member['last_name']}}</p>
      </div>
    </div>
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">Email</h5>
        <p class="card-text">{{member['email']}}</p>
      </div>
    </div>
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">Gender</h5>
        <p class="card-text">{{member['gender']}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MemberList from '../mixins/MemberList';

export default {
  name: 'MemberDetail',
  mixins: [MemberList],
  data: function() {
    return {
      member: null
    }
  },
  created() {
    this.member = this.getMemberById(this.$route.params.id);
  }
}
</script>

<style scoped>
  .card {
    margin-bottom: 12px;
  }
</style>