<template>
  <div id="app" class="container">
    <div class="block">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
    }
  },
  created() {
    console.log(this.$store.state);
  }
}
</script>

<style>
  .block {
    margin: 12px 0;
  }

  input {
    margin-right: 6px;
  }
</style>
