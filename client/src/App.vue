<template>
  <div id="app" class="container">
    <form @submit.prevent>
      <!-- Input[text] -->
      <div class="form-group">
        <h5>Name</h5>
        <input type="text" class="form-control" id="name" v-model="ticket.name"/>
      </div>
      <!-- Textarea -->
      <div class="form-group">
        <h5>Question</h5>
        <textarea class="form-control" id="question" v-model="ticket.question"></textarea>
      </div>
      <!-- Input[radio] -->
      <div class="form-group">
        <h5>Feeling</h5>
        <div v-for="(feeling, index) in feelingList" :key="index">
          <input type="radio" :id="feeling.id" :value="feeling" v-model="ticket.feeling" />
          <label for="feeling">{{feeling.title}}</label>
        </div>
      </div>
      <!-- Select -->
      <div class="form-group">
        <h5>Product</h5>
        <select style="width: 100%" v-model="ticket.product">
          <option v-for="(product, index) in productList" :key="index" :value="product">{{product.title}}</option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="send()">Send</button>
      </div>
    </form>
    <div class="ticket">
      <h1 class="header">Ticket</h1>
      <div class="title">Name</div>
      <div>{{ticket.name}}</div>
      <hr />
      <div class="title">Question</div>
      <div>{{ticket.question}}</div>
      <hr />
      <div class="title">Feeling</div>
      <div>{{ticket.feeling.title}}</div>
      <hr />
      <div class="title">Product</div>
      <div>{{ticket.product.title}}</div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      ticket: {
        name: null,
        question: null,
        product: null,
        feeling: null,  
      },
      feelingList: [
        { id: 1, title: "Happy" },
        { id: 2, title: "Angry" }
      ],
      productList: [
        { id: 1, title: "Phone" },
        { id: 2, title: "Notebook" },
      ]
    }
  },
  created() {
    this.ticket.feeling = this.feelingList[0];
    this.ticket.product = this.productList[0];
  },
  methods: {
    send: function() {
      console.log('send');
    }
  }
}
</script>

<style>
#app {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 16px;
}

.ticket {
  margin-top: 22px;
}

.ticket > .header {
  margin-bottom: 12px;
}

.ticket > .title {
  font-weight: bold;
}
</style>