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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/legal",
    name: "Legal",
    component: Legal,
  },
  {
    path: "/structure",
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
    path: "/geographical",
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
