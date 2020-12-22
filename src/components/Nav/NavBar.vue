<template>
  <div :class="nav">
    <b-navbar vertical type="dark" variant="dark">
      <b-navbar-nav>
        <NavButton class="inner-button" link="/" text="Home"/>
        <AuthButton class="inner-button"/>
        <NavButton class="inner-button" link="/galerie" text="Galerie"/>
        <NavButton class="inner-button" link="/häusle" text="Häusle"/>
        <NavButton class="inner-button" link="/test/bild" text="Town"/>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

import NavButton from '../Buttons/NavButton.vue'
import AuthButton from '../Buttons/AuthButton.vue'

export default {
  name: 'NavBar',
  components: {
    NavButton,
    AuthButton
  },
  props: {
    hover: Boolean
    },
    data() {
      return {
      }
    }
}
</script>

<style scoped>
.nav{
  //text-align: right;
}

.inner-button{
  margin-top: 8px;
  margin-left: 8px;
}
</style>
