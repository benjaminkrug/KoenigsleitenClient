<template>
  <GalerieWrapper>
    <template #body>
      <div class="innerGrid">
        <b-card-group deck>
          <div v-for="galerieData in dataOdd" :key="galerieData.id">
            <div class="empty150"/>
            <CardWrapper
              :image="galerieData.imageUrl" :text="galerieData.text"
              position='right' :date="galerieData.date"
              @click.native="moveToGalerie(galerieData)"
            />
          </div>
        </b-card-group>
      </div>
      <div>
        <div class="center">
          2020
        </div>
        <div class="line"/>
      </div>
      <div class="innerGrid">
        <b-card-group deck>
          <div v-for="galerieData in dataEven" :key="galerieData.id">
            <CardWrapper
              :image="galerieData.imageUrl" :text="galerieData.text"
              position='left' :date="galerieData.date"
              @click.native="moveToGalerie(galerieData)"
            />
            <div class="empty150"/>
          </div>
        </b-card-group>
      </div>
    </template>
  </GalerieWrapper>
</template>

<script>

import CardWrapper from "./Cards/CardWrapper"
import GalerieWrapper from "./GalerieWrapper"

export default {
  name: 'GalerieHome',
  components: {
    CardWrapper,
    GalerieWrapper
  },
  data() {
    return {
      data: [
        {
          id: 1,
          imageUrl: "https://placekitten.com/350/120",
          text: "Hey du.",
          date: "2020"
        },
        {
          id: 2,
          imageUrl: "https://placekitten.com/350/110",
          text: "Wintersauferei.",
          date: "2018"
        },
        {
          id: 3,
          imageUrl: "https://placekitten.com/350/130",
          text: "sommerUrlaub mit der Familie.",
          date: "2018"
        },
        {
          id: 4,
          imageUrl: "https://placekitten.com/350/140",
          text: "TestString.",
          date: "2017"
        },
      ]
    }
  },
  methods: {
    moveToGalerie (data) {
      this.$router.push(this.$route.fullPath + '/' + data.id)
    }
  },
  computed: {
    dataOdd() {
      return this.data.filter(function(value, index) {
        return index % 2 !== 0;
      })
    },
    dataEven() {
      return this.data.filter(function(value, index) {
        return index % 2 === 0;
      })
    }
  }
}
</script>

<style scoped>
.innerGrid{
  margin: 70px 10px
}
.empty150{
  height: 150px
}
.center{
  position: absolute;
  top:20; left:0;
  width: 100%;
  text-align: center;
}
.line{
  margin-top: 30px;
  height: 90%;
  background-color: black;
  align-items: center;
}
</style>
