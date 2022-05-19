import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import footer from './components/home/footer.vue'

import Achievement from './components/AboutUs/Achievement.vue'
import Geographical from './components/AboutUs/Geographical.vue'
import Governance from './components/AboutUs/Governance.vue'
import KeyProgram from './components/AboutUs/KeyProgram.vue'
import Legal from './components/AboutUs/Legal.vue'
import Management from './components/AboutUs/Management.vue'
import Network from './components/AboutUs/Network.vue'
import Origin from './components/AboutUs/Origin.vue'
import SusClients from './components/AboutUs/SusClients.vue'
import VisionMissionGoal from './components/AboutUs/VisionMissionGoal.vue'

import BootstrapVue from 'bootstrap-vue'

Vue.component('achievement', Achievement)
Vue.component('geographical', Geographical)
Vue.component('governance', Governance)
Vue.component('Key-program', KeyProgram)
Vue.component('legal', Legal)
Vue.component('management', Management)
Vue.component('network', Network)
Vue.component('origin', Origin)
Vue.component('sus-clients', SusClients)
Vue.component('vision-mission-goal', VisionMissionGoal)


Vue.component('Footer', footer)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
