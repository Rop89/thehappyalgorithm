import Vue from 'vue';
import Vuex from 'vuex';
import { api } from "@/../services.js";
Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
   user:{
     name:"",
     email:"",
     message:""
   }
  },
  mutations: {
    UPDATE_USER(state,payload){
      state.user = Object.assign(state.user,payload)
    }
  },
  actions: {
    getUser(context, payload) {
      return api.get(`/user/${payload}`).then(response => {
        context.commit("UPDATE_USER", response.data);
      });
    }
  },
  modules: {
  }
})
