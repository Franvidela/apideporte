<template>
  <div class="home">


    <b-container class="bv-example-row">
        <b-row>
          <b-col cols="8">




          <template>
            <div>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                <b-form-group id="input-group-2" label="Consulta tu Deporte:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Ingrese deporte"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Consultar</b-button>
                <b-button type="reset" variant="danger">Borrar</b-button>
              </b-form>
              <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card>
            </div>
          </template>










          </b-col>
          <b-col cols="4"> <Conteo tipo="total" /></b-col>
        </b-row>
  </b-container>

    <div v-if="mostraruno">
        <UnDeporte v-bind:titulo="eltitulo" v-bind:imagen="laimagen" v-bind:icono="elicono" v-bind:descripcion="ladescripcion" />
    </div>
    <div v-else>
        <DatosDeportes msg="Los Deportes"/>
    </div>





  </div>
</template>

<script>
import { mapState } from 'vuex'
import Conteo from '@/components/Conteo.vue'
// @ is an alias to /src
import DatosDeportes from '@/components/DatosDeportes.vue'
import UnDeporte from '@/components/UnDeporte.vue'

export default {
  name: 'HomeView',
  components: {
    DatosDeportes, Conteo, UnDeporte
  },
  data:()=>{
      return{

            form: {
              name: '',
            },
            show: true,
            mostraruno: false,

            eltitulo:'',
            laimagen: '',
            elicono:'',
            ladescripcion:'',


      }
  },
  methods:{

      onSubmit(event) {
      event.preventDefault();
      this.mostraruno = false;
      for(let sport of this.thesports ){
          if(sport.strSport == this.form.name){
              console.log('Existe el deporte: ' + this.form.name);
              this.eltitulo = sport.strSport;
              this.laimagen = sport.strSportThumb;
              this.elicono = sport.strSportIconGreen;
              this.ladescripcion = sport.strSportDescription;
              this.mostraruno = true;
          }
      };

      if(this.mostraruno  == false){
            alert('NO EXISTE EL DEPORTE');
            this.form.name='';
      }


    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },


  }, //fib methods
  computed:{
      ...mapState(["thesports"]),
  }, //fin computed
}
</script>
