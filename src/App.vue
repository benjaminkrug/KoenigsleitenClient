<template>
    <div class="bild-123">
        <AppComponent />
    </div>
</template>

<script>
import AppComponent from './components/AppComponent.vue'

export default {
  name: 'App',
  components: {
    AppComponent
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.bild-123{
  background-image:url("./assets/Start/See.jpg");
  position: fixed;
  background-size:cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
