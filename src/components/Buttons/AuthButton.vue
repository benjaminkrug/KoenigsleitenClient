<template>
  <div @click.prevent="authLogin">
    <b-navbar-item to="home" >Login</b-navbar-item>
  </div>
</template>

<script>

export default {
  name: 'AuthButton',
  components: {
  },
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    authLogin () {
      this.$auth.loginWithRedirect();
    },
  }
}
</script>

<style scoped>
.nav-button-1{
  background-color: inherit;
}
.nav-link{
  text-decoration: none;
}
</style>
