<template>
  <v-app>
    <v-app-bar
      height="45px"
      :color="
        scrollPosition > 702
          ? 'light-blue darken-4'
          : '' || (scrollPosition < 701 && scrollPosition > 95)
          ? 'light-blue darken-3'
          : '' || scrollPosition < 94
          ? 'transparent'
          : ''
      "
      elevation="0"
      app
    >
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        color="grey lighten-2"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-nav-icon class="d-none d-sm-flex mx-lg-7 mx-md-2 mx-sm-1"
        ><v-img :src="img" max-width="38px"></v-img
      ></v-app-bar-nav-icon>
      <v-spacer class="d-md-none d-lg-flex"></v-spacer>

      <span v-for="(item, index) in nabItem" :key="item.index">
        <v-toolbar-title
<<<<<<< HEAD
<<<<<<< HEAD
          @click="buttonClick(index, item.to)"
=======
>>>>>>> master
=======
          @click="buttonClick( item.to)"
>>>>>>> master
          v-if="index < 4"
          class="white--text hidden mx-lg-1 mx-md-1 mx-sm-1"
        >
          <span
            style="cursor: pointer"
            :class="
              scrollPosition > 702 && index + 1 === indexValue
                ? 'seleted'
                : '' || (scrollPosition < 701 && index + 1 === indexValue)
                ? 'seleted'
                : '' || scrollPosition > 702
                ? 'nav1'
                : ''
            "
            class="nav"
          >
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="background-color: transparent"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ item.name }}
                </v-btn>
              </template>

              <v-list
                :color="
                  item.submanu === true
                    ? 'light-blue darken-4'
                    : 'light-blue darken-4'
                "
                style="margin-top: 0px"
                min-width="10%"
              >
                <v-list-item v-for="(i, index) in item.subManu" :key="index">
                  <v-list-item-title style="color: #ffffff">{{
                    i.name
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span></v-toolbar-title
        >
      </span>
      
      <span v-for="(item, index) in nabItem" :key="item.index">
        <v-toolbar-title
          @click="buttonClick( item.to)"
          v-if="index > 3"
          class="white--text hidden mx-lg-1 mx-md-1 mx-sm-1"
        >
          <span
            style="cursor: pointer"
            :class="
              scrollPosition > 702 && index + 1 === indexValue
                ? 'seleted'
                : '' || (scrollPosition < 701 && index + 1 === indexValue)
                ? 'seleted'
                : '' || scrollPosition > 702
                ? 'nav1'
                : ''
            "
            class="nav"
          >
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="background-color: transparent"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ item.name }}
                </v-btn>
              </template>

              <v-list
                :color="
                  item.submanu === true
                    ? 'light-blue darken-4'
                    : 'light-blue darken-4'
                "
                style="margin-top: 0px"
                min-width="10%"
              >
                <v-list-item v-for="(i, index) in item.subManu" :key="index">
                  <v-list-item-title style="color: #ffffff">{{
                    i.name
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span></v-toolbar-title
        >
      </span>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary color="white">
      <v-list>
        <v-list-item> <v-img :src="img1" max-width="124"></v-img></v-list-item>
        <v-divider></v-divider>
        <span v-for="(item, index) in nabItem" :key="item.index">
          <v-list-item
            @click="buttonClick(index)"
            v-if="index < 3"
            class="mx-4"
          >
            <span :class="index + 1 == indexValue ? 'seleted' : ''"
              >{{ item.name }}
            </span>
          </v-list-item>
        </span>

        <span v-for="(item, index) in nabItem" :key="item.index">
          <v-list-item
            @click="buttonClick(index)"
            v-if="index > 4"
            class="mx-4"
          >
            <span :class="index + 1 == indexValue ? 'seleted' : ''"
              >{{ item.name }}
            </span>
          </v-list-item>
        </span>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <main>
      <router-view></router-view>
      <contact></contact>
      <Footer></Footer>
    </main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      marker: false,
      indexValue: 0,
      nabItem: [
        { name: "Home", submanu: false, to: "/" },
        {
          name: "About us",
          submanu: true,
          to: "/about",
          subManu: [
            { name: " Origin of the organization", to: "/origin" },
            { name: "Legal Status", to: "/legal" },
            { name: "Vision, Mission, Goal", to: "/vision" },
            { name: "Governance Structure", to: "/governance" },
            { name: "Management Structure", to: "/management" },
            { name: "Key Programmatic areas", to: "/areas" },
            { name: "SUS Stakeholders / Clients", to: "/clients" },
            { name: "Geographical Coverage", to: "/coverage" },
            { name: "Linkage and Network", to: "/linkage" },
            { name: "Achievement and Milestone of SUS", to: "/achievement" },
          ],
        },

        {
          name: "Infrastructure",
          submanu: true,
          to: "/infrastructure",
          subManu: [
            { name: "SUS Training Center", to: "/center" },
            { name: "Animal Health Care Centers", to: "/health_care" },
            { name: "Milk Chilling Plant", to: "/chilling_plant" },
            {
              name: " Training and Rehabilitation Center",
              to: "/rehabilitation",
            },
            {
              name: "Solid Paper Board Packaging Center",
              to: "/packaging_center",
            },
            { name: "Nursery Development Centre ", to: "/nursery_center" },
          ],
        },
        {
          name: "Archive",
          submanu: true,
          to: "/archive",
          subManu: [
            { name: "Annual Reports", to: "/center" },
            { name: "Audit Reports", to: "/health_care" },
            { name: "All Publications", to: "/chilling_plant" },
            { name: "Case studies", to: "/rehabilitation" },
            { name: "Newsletter", to: "/packaging_center" },
          ],
        },
        { name: "Projects", submanu: false, to: "/project" },
        { name: "Budget", submanu: false, to: "/budget" },
        { name: "Career", submanu: false, to: "/career" },
        { name: "Photo Gallery", submanu: false, to: "/photo" },
        { name: "News", submanu: false, to: "/news" },
        { name: "Contact us", to: "/Contact" },
      ],
      group: null,
      dynamic: "",
      scrollPosition: null,
      img: require("@/assets/img/logo2.png"),
      img1: require("@/assets/img/footer.png"),
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    buttonClick(e) {
       this.$router.push(e)
    },
    onRoute(e) {
      console.log(e);
    },
    mouseover(e) {
      this.indexValue = e + 1;
      console.log(this.indexValue);
    },
    mouseleave() {
      this.indexValue = 0;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style>
@media only screen and (min-width: 601px) {
  .seleted {
    color: #ef3c55 !important;
    font-weight: bold;
    font-family: Century Gothic;

    border-radius: 20px;
  }
}

@media only screen and (max-width: 600px) {
  .hide {
    display: none !important;
  }
  .seleted {
    color: #ef3c55 !important;
    font-family: Century Gothic;
  }
  .hidden {
    display: none;
  }
}

.nav {
  font-size: 0.78em;
  color: rgb(5, 5, 5);
  font-family: Century Gothic;
}
.nav1 {
  font-size: 0.78em;
  color: rgb(14, 6, 6);
  font-family: Century Gothic;
}
p {
  font-size: 0.82em !important;
  font-family: Century Gothic;
  opacity: 0.99;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #3e3e4a;
}
h4 {
  font-size: 0.8em;
  font-family: Century Gothic;
  opacity: 0.99;
  margin-top: 3px;
  color: #3e3e4a;
  font-weight: 700;
  line-height: 22px;
  font-family: Century Gothic;
}
.header {
  height: 300px;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
