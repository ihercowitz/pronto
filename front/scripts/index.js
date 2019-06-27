import Vue from 'vue'
import MainLayout from './components/MainLayout'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import store from './store'
import { ToastPlugin } from 'bootstrap-vue'
Vue.use(ToastPlugin)

Vue.use(BootstrapVue)

Vue.prototype.$http = axios

Vue.prototype.$url = process.env.NODE_ENV === 'development'? 'http://localhost:3000' : '/'

Vue.prototype.$showMessage = function (response) {
        var messages = {
           200: {
              title: 'Sucesso',
              message: 'Prontuario salvo!',
              variant: 'success' 
           },
           400: {
              title: 'Erro!',
              message: 'Erro ao salvar o Prontuario!',
              variant: 'error'            
           }
        }
        this.$bvToast.toast(messages[response].message, {
          title: messages[response].title,
          variant: messages[response].variant,
          solid: true
     })
   }

new Vue({
   store,
   render: h => h(MainLayout),
   }).$mount('#app')