<template>
  <div class="galerie">
    <slot name="body" />
  </div>
</template>

<script>

export default {
  name: 'GalerieWrapper',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
.galerie{
  background-color: rgba(255,255,255,0.8);
  margin: auto;
  width: 80%;
  height: 90%;
  border-radius: 10px;
  text-align: center;
  display: grid;
  grid-template-columns: 50% 2px 50%;
}
</style>
