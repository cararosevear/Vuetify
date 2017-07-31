// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from './services/firebase'
import VueResource from 'vue-resource'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(Vuefire)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {users: firebase.database.ref('users')},
  router,
  template: '<App/>',
  components: { App }
})
