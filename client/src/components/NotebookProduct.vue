<template>
  <div>
    <h3>{{'Notebook' | uppercase}}</h3>
    <div class="search">
      <span>Search</span>
      <span><input type="text" @keyup.enter="getProduct('notebook', $event.target.value)"/></span>
      <span v-if="searchedProduct">Find out: {{searchedProduct.title}}</span>
    </div>
    <ul>
      <li
        v-for="(product, index) in productList"
        v-bind:key="index"
      >
        {{product.title}}
      </li>
    </ul> 
  </div>
</template>

<script>
import ProductList from '../mixins/Products';

export default {
  name: 'NotebookProduct',
  mixins: [ProductList],
  data: function() {
    return {
      productList: []
    }
  },
  created() {
    const thisObj = this;

    this.allProducts.map((product) => {
      if (product.category === 'notebook') {
        thisObj.productList.push(product);
      }
    });
  }
}
</script>

<style scoped>
.search {
  display: flex;
  gap: 16px;
}
</style>