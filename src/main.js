import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Textra from 'vue-textra'

Vue.use(Textra);
new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  render: h => h(App),
}).$mount('#app')


