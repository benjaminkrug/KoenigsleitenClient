<template>
    <div class="app">
        <a href="#"
           @click="$oidc.signIn()"
           v-if="$oidc.isAuthenticated">Signin</a>
        <a href="#"
           @click="$oidc.signOut()"
           v-if="$oidc.isAuthenticated">Signout</a>
        <NavWrapper />
        <div class="app-router">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavWrapper from './Nav/NavWrapper.vue'

export default {
  name: 'AppComponent',
  components: {
    NavWrapper
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
.app {
  display: flex;
  height: 100%;
  margin-top: 20px;
}
.app-router{
  width: 100%;
}
</style>
