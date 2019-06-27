<template>
  <b-navbar type="dark" variant="dark" :sticky=true>
    <b-navbar-nav>
      <b-nav-item>{{ screenId }} - Score: {{ score }} </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto" >
       <b-button-group size="sm">
        <b-button variant="success" @click="saveData">Finalizar e Salvar</b-button>
      </b-button-group>
    </b-navbar-nav>
  </b-navbar>   
</template>

<script>
export default {
  name: 'ToolBar',
  props: ['screenId'],
  methods: {
    saveData() {
      this.$emit('saveData')
    }
  },
  computed: {
    score: {
      get() {
        return this.$store.state.info[this.screenId].score
      }
    }
  }
}
</script>