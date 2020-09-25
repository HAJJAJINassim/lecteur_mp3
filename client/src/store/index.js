import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   LogedIn:false
  },

  mutations: {
    TEST_TOKEN(state,payload){
      if(payload){
        state.LogedIn=true;
      }else{
        state.LogedIn=false;
      }
    }
  },

  actions: {
  
  },
  modules: {
  }
})
