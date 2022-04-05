<template>
  <div class="view-message">
    <div class="d-flex justify-content-between">
      <div><strong>View Message</strong></div>
      <div>
        <b-dropdown
          id="numberList"
          class="m-md-2"
          :text="selectedViewStyle.label"
        >
          <b-dropdown-item
            v-for='(vs, index) in viewStyle'
            :key="index"
            @click="changeViewStyle(vs)"
          >
            {{vs.label}}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <hr/>
    <div class="card messages" v-for="(message) in messages" :key="message.id">
      <div class="card-body">
        <h5 class="card-title">#{{message.id + 1}}</h5>
        <p
          class="card-text"
          v-bind:class="{
            'normal-style': selectedViewStyle.value === 'normal',
            'large-style': selectedViewStyle.value === 'large',
          }"
        >{{message.message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MemberList from '../mixins/MemberList';

export default {
  name: 'ViewMessage',
  mixins: [MemberList],
  data: function() {
    return {
      selectedViewStyle: {},
      viewStyle: {
        normal: {
          value: 'normal',
          label: 'Normal'
        },
        large: {
          value: 'large',
          label: 'Large'
        }
      }
    }
  },
  created() {
    this.selectedViewStyle = this.viewStyle.normal;
  },
  watch:{
    $route (to){
      if (!to.query.viewstyle)
        return;

      const newValue = to.query.viewstyle;
      if (newValue === 'normal') {
        this.selectedViewStyle = this.viewStyle.normal;
      } else {
        this.selectedViewStyle = this.viewStyle.large;
      }
    }
  },
  methods: {
    changeViewStyle: function(viewStyle) {
      this.$router.push({
        name: 'viewMessage',
        query: {
          viewstyle: viewStyle.value
        }
      })
      .catch(()=>{});
    }
  },
  computed: {
    messages: function() {
      return this.$parent.member.messages;
    }
  }
}
</script>

<style scoped>
  .view-message {
    margin-top: 48px;
  }

  .messages {
    margin: 6px 0 2px 0;
  }

  .normal-style {
    font-size: 1rem;
  }

  .large-style {
    font-size: 2rem;
  }
</style>