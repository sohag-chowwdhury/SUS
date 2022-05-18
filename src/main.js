import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import footer from './components/home/footer.vue' 
import Email from './components/Email.vue'
import EmailVerification from './components/EmailVerification.vue'


Vue.component ('Footer', footer)
Vue.component ('email', Email)
Vue.component ('emailVerifay', EmailVerification)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
