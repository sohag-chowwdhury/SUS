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

import AnimalHealthCare from './components/Infrastructure/AnimalHealthCare.vue'
import MilkChillingPlant from './components/Infrastructure/MilkChillingPlant.vue'
import NurseryDevelopmentCentre from './components/Infrastructure/NurseryDevelopmentCentre.vue'
import SolidPaperBoard from './components/Infrastructure/SolidPaperBoard.vue'
import TrainingCenter from './components/Infrastructure/TrainingCenter.vue'
import TrainingRehabilitationCenter from './components/Infrastructure/TrainingRehabilitationCenter.vue'

import Contact from './components/Share/Contact.vue'
import ContactV from './components/Contact/ContactV.vue'

import Gallery from './components/Gallery/Gallery.vue'
import News from './components/News/News.vue'


import NavBarOr from './components/Share/NavBarOr.vue'
import Navbar from './components/Share/Navbar.vue'



import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps"
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

Vue.component('animal-health-care', AnimalHealthCare)
Vue.component('milk-chilling-plant', MilkChillingPlant)
Vue.component('nursery-development-centre', NurseryDevelopmentCentre)
Vue.component('solid-paper-board', SolidPaperBoard)
Vue.component('training-center', TrainingCenter)
Vue.component('training-rehabilitation-center', TrainingRehabilitationCenter)
Vue.component('contact', Contact)
Vue.component('inner-contatc', ContactV)
Vue.component('gallery', Gallery)

Vue.component('news', News)

Vue.component('navbar', Navbar)
Vue.component('navbar-or', NavBarOr)






Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDQaMSz3EAEWnTN3M0h8jv3oHVDldO9TS0",
    libraries: "places"
  }
});
Vue.component('Footer', footer)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
Vue.use(BootstrapVue)
Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
