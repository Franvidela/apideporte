<template>
  <div class="event">
    <h1>Esta es la vista de EventSports</h1>
        <b-container class="bv-example-row">
            <b-row>
              <b-col></b-col>
              <b-col></b-col>
              <b-col> <Conteo tipo="event" /></b-col>
            </b-row>
      </b-container>


        <div id="lascards" v-for="deporte in thesports">
          <b-card v-if="deporte.strFormat=='EventSport'"
            v-bind:title="deporte.strSport"
            v-bind:img-src="deporte.strSportThumb"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >

            <b-img v-bind:src="deporte.strSportIconGreen" fluid v-bind:alt="deporte.strSport"></b-img>
            <b-card-text>
               {{ deporte.strSportDescription }}
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>


  </div>
</template>

<script>
import Conteo from '@/components/Conteo.vue'
import { mapState } from 'vuex'
export default{
  name: 'EventView',
  components:{
      Conteo,
  },
  computed:{
    ...mapState(["thesports"]),
  }
}
</script>

<style scoped>
#lascards{
  display: inline-block;
}
</style>
