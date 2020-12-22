<template>
  <div class="im">
    <h1 class="name">
      {{ testdata[hausePosition].name}}
    </h1>
    <div class="background" v-bind:style="testdata[hausePosition]">
      <div  v-for="way in testdata[hausePosition].ways" :key="way.id" class="clickbox" v-bind:style="way.style" @click="navigateTo(way.position)">

      </div>
    </div>
  </div>
</template>

<script>

import data from './hauseStyleData';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      hausePosition: 0
    }
  },
  methods: {
    navigateTo(position) {
      this.hausePosition = position
    }
  },
  computed: {
    testdata () {
      return data
    }
  }
}
</script>

<style scoped>
.im{
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.background{
  height: 700px;
  width: 1400px;
  border-style: solid;
  z-index: 1;
  display: flex;
  position: relative;
}

.clickbox{
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  background-color: rgba(0,0,0,0.06);
  border-radius: 50px;
}
.clickbox:hover{
  border-style: solid;
}
</style>
