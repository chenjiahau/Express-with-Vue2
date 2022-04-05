<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <router-link
        tag="a"
        class="navbar-brand"
        to="/"
        exact
      >
        Market
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link
            tag="a"
            class="nav-link"
            active-class="active"
            to="/member-list"
          >
            Member List
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TopNavigation'
}
</script>

<style scoped>
  .navbar-brand {
    margin-left: 22px;
  }
</style>