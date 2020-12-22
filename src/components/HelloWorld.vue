<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        {{ test }}
        <button @click="backendTest"> hallo </button>
          {{getUserNam()}}
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
        test: 'test'
    }
  },
  methods: {
    backendTest() {
      axios
          .get('/User')
          .then(response => {
              this.test = response.data
          })
    },
    getUserNam () {
      return this.$auth.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
