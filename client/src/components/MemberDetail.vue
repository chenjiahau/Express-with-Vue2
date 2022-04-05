<template>
  <div v-if="member">
    <nav aria-label="breadcrumb" class="d-flex justify-content-between">
      <div>
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
      </div>
      <div>
        <b-dropdown
          id="memberList"
          class="m-md-2"
          :text="member['first_name'] + ' ' + member['last_name']"
        >
          <b-dropdown-item
            v-for='(memberItem, index) in memberList'
            :key="index"
            @click="changeMember(memberItem.id)"
          >
            {{memberItem['first_name']}} {{memberItem['last_name']}}
          </b-dropdown-item>
        </b-dropdown>
      </div>
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
  props: {
    id: String
  },
  data: function() {
    return {
      member: null
    }
  },
  created() {
    this.member = this.getMemberById(this.id);
  },
  watch: {
    id(newValue) {
      this.member = this.getMemberById(newValue);
    }
  },
  methods: {
    changeMember: function(memberId) {
      if (memberId === this.member.id)
        return;

      this.$router.push({
        name: 'memberDetail',
        params: {
          id: memberId.toString()
        }
      })
    }
  }
}
</script>

<style scoped>
  .card {
    margin-bottom: 12px;
  }
</style>