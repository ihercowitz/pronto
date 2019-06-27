<template>
    <div class="row" style="margin-top: 10vh">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center"></h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input id="inputName" v-model="form.name" class="form-control" placeholder="Nome do paciente" required autofocus>
                <label for="inputEmail"></label>
              </div>

              <div class="form-label-group">
                <input id="inputBai" type="text" v-model="form.bai" class="form-control" placeholder="Data do BAI" required>
                <label for="inputPassword"></label>
              </div>
              
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="button" v-on:click="saveInitialData">Iniciar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
        
</template>

<script>
export default {
  name: 'InitialScreen',
  data() {
     return {
       form: {
          name: '',
          bai: ''
        }
     }
  },
  methods: {
    saveInitialData() {
       this.$emit('changeScreen', 'q1', this.form)
    }
  }
}
</script>