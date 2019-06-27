<template>
   
   <b-button-group>
      <b-button @click="setSelection('')" :class="{ 'btn-success': '' === selectedValue }">Em branco</b-button>
      <b-button v-for="(item, index) in 4" :key="index" @click="setSelection(index)" :class="{ 'btn-success': index === selectedValue }">{{ item }}</b-button>
    </b-button-group>

  

</template>

<script>
export default {
  name: 'answer',
  props: ['selected'],
  data() {
    return {
      selectedValue: this.selected
    }
  },
  methods: {
    setSelection: function(index) {
      this.selectedValue = index
      this.$emit('aswered', index)
    }
  }  
}
</script>