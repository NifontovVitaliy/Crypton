import Vue from 'vue'
import Vuex from 'vuex'
import { API_HOST } from '../url.js'

Vue.use(Vuex)

export default
  new Vuex.Store({
    state: {
      peoples: [],
      likedPeople: []
    },
    mutations: {
      setPeoples: (state, peoples) => state.peoples = peoples,
      setLikedPeople: (state, likedPerson) => {
        state.likedPeople.push(likedPerson);
        localStorage.setItem('LikedPeoples', JSON.stringify(state.likedPeople));
      }
    },
    actions: {
      async getPeoples({
        commit
      }) {
        const result = await fetch(`${API_HOST}/people`);
        const peoples = await result.json();
        commit('setPeoples', peoples.results);
      },
      setLikedPeople({commit},character){
        commit('setLikedPeople',character);
      }
    }
    // ,
    // mounted() {
    //   this.state.likedPeople = JSON.parse(localStorage.getItem('LikedPeoples') || []);      
    // }
  })



