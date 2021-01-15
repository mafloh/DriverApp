import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/index.js'
import NoSleep from 'nosleep.js'

Vue.prototype.$NoSleep = NoSleep

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  beforeCreate() { this.$store.commit('initialiseStore')},
  render: h => h(App)
}).$mount('#app')
