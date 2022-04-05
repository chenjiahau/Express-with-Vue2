<template>
  <div id="app">
    <top-navigation></top-navigation>
    <router-view class="app-body"></router-view>
  </div>
</template>

<script>
import TopNavigation from './components/TopNavigation.vue';

export default {
  name: 'App',
  components: {
    TopNavigation
  }
}
</script>

<style>
  .app-body {
    padding: 12px 16px 0 16px;
  }
</style>
