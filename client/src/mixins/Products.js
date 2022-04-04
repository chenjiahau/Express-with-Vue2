const allProducts = [
  { id: 1, category: 'phone', title: 'iPhone 12', price: 1999 },
  { id: 2, category: 'notebook', title: 'Macbook pro 14', price: 5999 }
]
export default {
  data: function () {
    return {
      searchedProduct: null,
      allProducts: []
    }
  },
  created() {
    this.allProducts = allProducts.slice();
  },
  methods: {
    getProduct: function (category, productTitle) {
      this.searchedProduct = this.allProducts.filter(product => product.category === category && product.title === productTitle)[0]
    }
  }
}