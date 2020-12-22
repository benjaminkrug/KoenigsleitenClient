<template>
  <div class="test">
    <div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      {{ text }}
      {{ text1 }}
      {{ password }}
    </div>
  </div>
</template>

<script>
import HelloWorld from '../HelloWorld.vue'

export default {
  name: 'AppComponent',
  components: {
    HelloWorld
  },
  data() {
    return {
      active: true,
      text: 'testString',
      text1: 'rsaString',
      password: 'testString'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.test {
  display: flex;
  margin: 20px;
  flex-direction: row;
  background-color: white;
}
</style>
