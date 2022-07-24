import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      thesports:[],
  },
  getters: {
      conteoCards(state){
        const { thesports } = state;
        return thesports.length;
      },
      conteoEvent(state){
        const { thesports } = state;
        let contadorEvent = 0;
        for(let sport of thesports){
            if(sport.strFormat == 'EventSport'){
              contadorEvent++;
            }
        }
        return contadorEvent;
      },
      conteoTeam(state){
        const { thesports } = state;
        let contadorTeam = 0;
        for(let sport of thesports){
            if(sport.strFormat == 'TeamvsTeam'){
              contadorTeam++;
            }
        }
        return contadorTeam;
      },

  },
  mutations: {
      changeSports(state,sport){
        state.thesports.push(sport);
      }
  },
  actions: {
    async getSports({ commit }){
    const res = await fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php");
    const json = await res.json();
    console.log(json);

    for(let sport of json.sports){
      commit("changeSports", sport);
    }

  },


  },
  modules: {
  }
})
