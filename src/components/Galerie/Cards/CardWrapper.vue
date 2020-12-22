<template>
  <div>
    <b-card img-alt="Card image">
      <div class="cardHeader">
        <CardTreeLine :showLine="position === 'left'" :date="date"/>
        <b-card-img :src="image" alt="Image" bottom></b-card-img>
        <CardTreeLine :showLine="position === 'right'" :date="date"/>
      </div>
      <b-card-text>
        {{ text }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import CardTreeLine from "./CardTreeLine"

export default {
  name: 'CardWrapper',
  components: {
    CardTreeLine
  },
  props: {
    image: String,
    text: String,
    position: String,
    date: String
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
.cardHeader{
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}
.line{
  background-color: black;
  height: 2px;
  align-self: center;
}
</style>
