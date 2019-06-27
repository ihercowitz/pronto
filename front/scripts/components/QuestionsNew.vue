<template>
  <b-container>
   <b-row align-h="between">
    <b-col cols="4"><b-button variant="warning" v-if="questionInfo.previous !==  undefined" @click="changeScreen(questionInfo.previous)">Anterior</b-button></b-col>
    <b-col cols="4"><b-button variant="warning" v-if="questionInfo.next !== undefined" @click="changeScreen(questionInfo.next)">Proximo</b-button></b-col>
   </b-row>
    
    <b-row class="row-table">
      <div class='questions mt-5 text-center' v-for='(item, index) in answers' :key='index'>
         <b-card>
            <h6 slot="header" class="mb-0"># {{ index + 1 }}</h6>
            <b-card-text> <answer :selected='answers[index]' @aswered="updateAnswered($event, index)"/> </b-card-text>
         </b-card>         
      </div>
    </b-row>
  </b-container>
</template>

<script>
import answer from './Answer'

export default {
  name: 'questionsN',
  components: {
    answer
  },
  props: ['id', 'questionInfo'],
  data() {
    return {
      answers: this.$store.state.info[this.id].answers.length > 0? this.$store.state.info[this.id].answers : Array(this.questionInfo.totalQuestions).fill(''),
      score: this.$store.state.info[this.id].score
    }
  },
  methods: {
    updateAnswered(answer, questionNumber) {
      this.answers[questionNumber] = answer!== ''? parseInt(answer): ''   
      this.score = this.answers.filter(el => el !== "").reduce((acc, item) => acc + item) 
      this.$store.commit('updateData',  { [this.id] : {'answers': this.answers, 'score': this.score } })
    },
    changeScreen(screen) {
      this.$emit('changeScreen', screen, { [this.id] : {'answers': this.answers, 'score': this.score } })
    },
  }
}
</script>

<style lang="scss">
  .row-table {
    display: contents;
    margin-left: 0;
    margin-right: 0;
  }
</style>