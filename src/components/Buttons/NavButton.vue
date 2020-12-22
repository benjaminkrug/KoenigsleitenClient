<template>
  <div>
    <b-navbar-item @click="goto">{{ text }}</b-navbar-item>
  </div>
</template>

<script>

export default {
  name: 'NavButton1',
  components: {
  },
  props: {
    link: String,
    text: String,
  },
  data() {
    return {
    }
  },
  methods: {
    goto(){
      this.$router.push(this.link)
    }
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
