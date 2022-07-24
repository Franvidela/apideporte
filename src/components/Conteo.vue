<template>
  <div id="letras">
          <span > Total deportes:
          <h1 v-if="tipo=='total'">{{ conteoCards }}</h1>
          <h1 v-if="tipo=='event'"> {{ conteoEvent }}</h1>
          <h1 v-if="tipo=='team'"> {{ conteoTeam }} </h1>
          </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  name: 'Conteo',
  props:{
    tipo: String,
  },
  computed:{
    ...mapGetters(["conteoCards", "conteoEvent", "conteoTeam"]),
  },
}
</script>

<style scoped>
#letras{
  color: blue;
}
</style>
