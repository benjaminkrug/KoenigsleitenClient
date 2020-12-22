<template>
  <div class="nav-bar" @mouseover="active=false" @mouseleave="active=true">
    <div>
      <div v-if="active">
        -
      </div>
      <div v-else>
        >
        <NavBar class="nav"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'NavWrapper',
  components: {
    NavBar
  },
  data() {
    return {
      active: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.nav-bar {
  width: 2%;
  height: auto;
  position: absolute;
  float: right;
  right: 0px;
  margin-top: 5px;
  margin-bottom: 15px;
  transition: all 0.3s linear;
  overflow-x: hidden;
}
.nav-bar:hover {
  width: 10%;
  background-color: rgba(0,0,0,0.2);
  border-radius: 6px;
}
</style>
