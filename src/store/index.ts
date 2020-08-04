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
   },
   subscriber:{
     id:"",
     email:""
   }
  },
  mutations: {
    UPDATE_USER(state,payload){
      state.user = Object.assign(state.user,payload)
    },
    UPDATE_SUBSCRIBER(state,payload){
      state.subscriber = Object.assign(state.subscriber, payload)
    }
  },
  actions: {
    getUser(context, payload) {
      return api.get(`/user/${payload}`).then(response => {
        context.commit("UPDATE_USER", response.data);
      });
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      return api.post("/user", payload);
    },
    getSubscriber(context,payload){
      return api.get(`/subscriber/${payload}`).then(response=>{
        context.commit("UPDATE_SUBSCRIBER",response.data);
      })
    },
    createSub(context,payload){
      context.commit("UPDATE_SUBSCRIBER", { id: payload.id });
      return api.post("/subscriber", payload);
    }
  },

})
