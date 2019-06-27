import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
     info: {
       name: '',
       bai: '',
       q1: {
         answers: [],
         score: 0
       },
       q2: {
         answers: [],
         score: 0
       },
       q3: {
         answers: [],
         score: 0
       }
     }
   },
   mutations: {
      updateData(state, newData) { 
         state.info = Object.assign({}, state.info, newData);
      },
      resetData(state) {
         Object.assign(state, {info: {
                                     name: '',
                                     bai: '',
                                     q1: {
                                       answers: [],
                                       score: 0
                                     },
                                     q2: {
                                       answers: [],
                                       score: 0
                                     },
                                     q3: {
                                       answers: [],
                                       score: 0
                                     }
         }})
      }
   }     
})