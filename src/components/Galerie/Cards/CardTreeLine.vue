<template>
  <div class="buffer">
    <div v-if="showLine">
      {{ date }}
    </div>
    <div v-if="showLine" class="line"/>
</div>
</template>

<script>
export default {
  name: 'CardWrapper',
  components: {
  },
  props: {
    date: String,
    showLine: Boolean,
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
.buffer{
  align-self: center;
}
.line{
  background-color: black;
  height: 2px;
}
</style>
