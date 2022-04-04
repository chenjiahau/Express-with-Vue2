<template>
  <div id="app" class="container">
    <h1>Version {{version}}</h1>
    <phone-product></phone-product>
    <notebook-product></notebook-product>
  </div>
</template>

<script>
import PhoneProduct from './components/PhoneProduct.vue';
import NotebookProduct from './components/NotebookProduct.vue';

export default {
  name: 'App',
  components: {
    PhoneProduct,
    NotebookProduct
  }
}
</script>

<style>
#app {
  margin-top: 20px;
}
</style>
