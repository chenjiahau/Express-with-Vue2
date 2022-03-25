<template>
  <div id="app">
    <Sendessage></Sendessage>
  </div>
</template>

<script>
import Sendessage from './components/SendMessage.vue'

export default {
  name: 'App',
  components: {
    Sendessage
  }
}
</script>

<style>
#app {
  margin-top: 20px;
}
</style>
