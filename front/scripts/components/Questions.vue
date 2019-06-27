<template>
  <b-container>
   <b-row align-h="between">
    <b-col cols="4"><b-button variant="warning" v-if="previous !== ''" @click="changeScreen(previous)">Anterior</b-button></b-col>
    <b-col cols="4"><b-button variant="warning" v-if="next !== ''" @click="changeScreen(next)">Proximo</b-button></b-col>
   </b-row>
    
    <b-row class="row-table">
      <div class='questions mt-5 text-center' v-for='(item, index) in questions' :key='index'>
         <b-card>
            <h6 slot="header" class="mb-0"># {{ index + 1 }}</h6>
            <b-card-text> <answer selected='answers[index]' @aswered="updateAnswered($event, index)"/> </b-card-text>
         </b-card>         
      </div>
    </b-row>
  </b-container>
</template>

<script>
import answer from './Answer'

export default {
  name: 'questions',
  components: {
    answer
  },
  props: {
    totalQuestions: Number,
    previous: {
      type: String,
      default: ""
    },
    next: {
      type: String,
      default: ""
    },
    id: String
  },
  data() {
    return {
      answers: Array(this.totalQuestions).fill(0),
      questions: Array(this.totalQuestions).fill(0),
      score: 0
    }
  },
  methods: {
    updateAnswered(answer, questionNumber) {
      this.questions[questionNumber] = answer!== ''? parseInt(answer): ''   
      this.score = this.questions.filter(el => el !== "").reduce((acc, item) => acc + item) 
      this.$store.commit('updateData',  { [this.id] : {'answers': this.questions, 'score': this.score } })
    },
    changeScreen(screen) {
      this.$emit('changeScreen', screen, { [this.id] : {'answers': this.questions, 'score': this.score } })
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