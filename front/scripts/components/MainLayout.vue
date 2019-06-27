<template>
  <div>
   <ToolBar v-if="active !== 'initial'" @saveData="saveData" :screenId="active"></ToolBar>
     <div class="container">
       <InitialScreen v-if="active == 'initial'" @changeScreen="changeScreen" /></InitialScreen>
       <questionsN :id="active" :key="active" v-if="active !== 'initial'" :questionInfo="questionScreens[active]" @changeScreen="changeScreen"></questions>
     </div>
  </div>   
</template>

<script>
import axios from 'axios';
import ToolBar from './ToolBar'
import InitialScreen from './InitialScreen'
import questionsN from './QuestionsNew'
import answer from './Answer'

export default {
   name: 'MainLayout',
   data() {
     return {
       active: 'initial',
       questionScreens: {
         q1: {
           totalQuestions: 21,
           next: "q2"
         },
         q2: {
           totalQuestions: 22,
           next: "q3",
           previous: "q1"
         },
         q3: {
           totalQuestions: 16,
           previous: "q2"
         }
       }
    }
   },
   components: {
     ToolBar,
     InitialScreen,

     questionsN
   },
   methods: {
     changeScreen(screen, data) {      
        this.$store.commit('updateData', data)
        this.active = screen
     },
     saveData() {
       axios.post(this.$url, this.$store.state.info)
       .then(response => {
          this.active = 'initial'
          this.$showMessage(response.status)
       })

     }
  }
}

</script>