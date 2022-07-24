<template>
  <div>
      <h1>Datos de un Deporte</h1>



      <b-container class="bv-example-row">
          <b-row>
            <b-col></b-col>
            <b-col>


            <b-container>

                            <b-card
                              v-bind:title="titulo"
                              v-bind:img-src="imagen"
                              img-alt="Image"
                              img-top
                              tag="article"
                              style="max-width: 20rem;"
                              class="mb-2"
                            >

                              <b-img v-bind:src="icono" fluid v-bind:alt="titulo"></b-img>
                              <b-card-text>
                                 {{ descripcion }}
                              </b-card-text>

                              <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>

            </b-container>










            </b-col>
            <b-col></b-col>
          </b-row>
        </b-container>


  </div>
</template>

<script>
export default{
  name: 'UnDeporte',
  props:{
      titulo: String,
      imagen: String,
      icono: String,
      descripcion: String,
  }
}
</script>

<style scoped>
</style>
