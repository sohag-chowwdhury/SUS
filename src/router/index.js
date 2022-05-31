import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Legal from "../views/Legal.vue";
import GovernmentStructure from "../views/GovernmentStructure.vue";
import Management from "../views/Management.vue";
import KeyProgram from "../views/KeyProgram.vue";
import SusClients from "../views/SusClients.vue";
import Geographical from "../views/Geographical.vue";
import Network from "../views/Network.vue";
import Achievement from "../views/Achievement.vue";
import Contact from "../views/Contact.vue";
import Gallery from "../views/Gallery.vue";
import News from "../views/News.vue";
import Career from "../views/Career.vue";
import Budget from "../views/Budget.vue";
import Origin from "../views/Origin.vue";
import Vision from "../views/Vision.vue";
import Infrastructure from "../views/Infrastructure.vue";

import Animal from "../views/Infrastructure/Animal.vue";
import Nursery from "../views/Infrastructure/Nursery.vue";
import Rehabilitation from "../views/Infrastructure/Rehabilitation.vue";
import Solid from "../views/Infrastructure/Solid.vue";
import Training from "../views/Infrastructure/Training.vue";

import Program from "../views/Project/Program.vue";
import Projects from "../views/Project/Projects.vue";
import ProjectProgram from "../views/ProjectProgram.vue";
import Director from "../views/Director.vue";
import Chairman from "../views/Chairman.vue"; 
import Covid from "../views/Covid.vue";
import Initiatives from "../views/Initiatives.vue";











Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/director",
    name: "Director",
    component: Director,
  },
  {
    path: "/chairman",
    name: "Chairman",
    component: Chairman,
  },
  {
    path: "/2",
    name: "Initiatives",
    component: Initiatives,
  },
  {
    path: "/1",
    name: "Covid",
    component: Covid,
  },
  {
    path: "/proj",
    name: "ProjectProgram",
    component: ProjectProgram,
  },
  {
    path: "/program",
    name: "Program",
    component: Program,
  },
  {
    path: "/project",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },


  {
    path: "/infrastructure",
    name: "Infrastructure",
    component: Infrastructure,
  },


  {
    path: "/health",
    name: "Animal",
    component: Animal,
  },
  {
    path: "/rehabilitation",
    name: "Rehabilitation",
    component: Rehabilitation,
  },


  {
    path: "/nursery",
    name: "Nursery",
    component: Nursery,
  },
  {
    path: "/packaging",
    name: "Solid",
    component: Solid,
  },
  {
    path: "/center",
    name: "Infrastructure",
    component: Training,
  },

  {
    path: "/legal",
    name: "Legal",
    component: Legal,
  },
  {
    path: "/governance",
    name: "GovernmentStructure",
    component: GovernmentStructure,
  },
  {
    path: "/management",
    name: "Management",
    component: Management,
  },
  {
    path: "/keyprogram",
    name: "KeyProgram",
    component: KeyProgram,
  },
  {
    path: "/susClients",
    name: "SusClients",
    component: SusClients,
  },
  {
    path: "/coverage",
    name: "geographical",
    component: Geographical,
  },
  {
    path: "/network",
    name: "Network",
    component: Network,
  },
  {
    path: "/achievement",
    name: "Achievement",
    component: Achievement,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/photo",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/career",
    name: "Career",
    component: Career,
  },
  {
    path: "/budget",
    name: "Budget",
    component: Budget,
  },
  {
    path: "/origin",
    name: "Origin",
    component: Origin,
  },
  {
    path: "/vision",
    name: "Vision",
    component: Vision,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
