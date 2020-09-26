import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   LogedIn:false
  },

  mutations: {
    LOGIN(state){
      state.LogedIn=true;
    },
    LOGOUT(state){
      state.LogedIn=false;
    }
  },

  actions: {
   login(contexte,payload){
    
      axios.post("http://localhost:3000/user/login",payload).
      then(res=>{
          if(res.status=="200"){
            localStorage.setItem('token', res.data.token);
            contexte.commit("LOGIN");
            router.push("/Music");
          }
      });
   },
   logout(contexte){
     contexte.commit("LOGOUT");
     localStorage.clear();
     router.push("/Login")
   }
  
  },
  modules: {
  }
})
