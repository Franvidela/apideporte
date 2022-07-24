<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

              <div id="lascards" v-for="deporte in thesports">
                <b-card
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
import { mapState } from 'vuex'
export default {
  name: 'DatosDeportes',
  props: {
    msg: String
  },
  computed:{
    ...mapState(["thesports"]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#lascards{
  display: inline-block;
}
</style>
