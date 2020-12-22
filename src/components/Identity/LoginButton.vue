<template>
    <div class="hello">
      <router-link class="nav-link" to="/login">Login</router-link>
    </div>
</template>

<script>

export default {
  name: 'LoginButton',
  props: {
    hover: Boolean
    },
    data() {
      return {
          test: 'Login Page'
      }
    },
    methods: {
    }
}
</script>

<style scoped>
.nav-link{
  text-decoration: none;
}
</style>
