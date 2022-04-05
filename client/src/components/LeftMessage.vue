<template>
  <div class="left-message">
    <strong>Left Message</strong>
    <hr/>
    <b-form-group>
      <b-form-textarea
        id="textarea"
        placeholder="Say something..."
        v-model="message"
      ></b-form-textarea>
    </b-form-group>
    <b-button
      type="submit"
      variant="primary"
      @click="sendMessage()"
      :disabled="!message"
    >Submit</b-button>
    <div class="card messages" v-for="(message) in messages" :key="message.id">
      <div class="card-body">
        <h5 class="card-title">#{{message.id + 1}}</h5>
        <p class="card-text">{{message.message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MemberList from '../mixins/MemberList';

export default {
  name: 'LeftMessage',
  mixins: [MemberList],
  data: function() {
    return {
      message: null
    }
  },
  methods: {
    sendMessage: function() {
      this.addMessage(this.$parent.member.id, this.message);
      this.message = null;
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
  .left-message {
    margin-top: 48px;
  }

  .messages {
    margin: 6px 0 2px 0;
  }

  textarea {
    height: 212px;
    margin-bottom: 22px;
  }

  button {
    width: 100%;
  }
</style>