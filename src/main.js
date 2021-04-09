import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toastr from 'vue-toastr'
import swal from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(toastr)
Vue.use(swal)
new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
