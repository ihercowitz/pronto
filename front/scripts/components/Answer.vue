<template>
  <div> 
   <b-button-group v-if="!isBoolean">
      <b-button @click="setSelection('')" :class="{ 'btn-success': '' === selectedValue }">Em branco</b-button>
      <b-button v-for="(item, index) in 4" :key="index" @click="setSelection(index)" :class="{ 'btn-success': index === selectedValue }">{{ item }}</b-button>
    </b-button-group>
  
     <b-button-group v-if="isBoolean">
      <b-button @click="setSelection('')" :class="{ 'btn-success': '' === selectedValue }">Em branco</b-button>
      <b-button :key="yes" @click="setSelection('Y')" :class="{ 'btn-success': 'Y' === selectedValue }">Sim</b-button>
      <b-button :key="yes" @click="setSelection('N')" :class="{ 'btn-success': 'N' === selectedValue }">Nao</b-button>
    </b-button-group>
  </div>

</template>

<script>
export default {
  name: 'answer',
  props: ['selected', 'isBoolean'],
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