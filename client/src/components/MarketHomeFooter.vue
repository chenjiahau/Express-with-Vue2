<template>
  <div class="fixed-bottom bottom-footer">
  </div>  
</template>

<script>
export default {
  created() {
    console.log('bottom footer');
  }
}
</script>

<style scoped>
  .bottom-footer {
    width: 100%;
    height: 32px;
    background-color: red;
  }
</style>