<template>
  <v-app>
    <go-top :size="50" :right="28"  bg-color="#057637" :radius="20"></go-top>
    <navbar v-if="isHome"></navbar>
    <navbar-or v-if="!isHome"></navbar-or>
    <main>
      <router-view></router-view>
      <contact></contact>
      <Footer></Footer>
    </main>
  </v-app>
</template>
<script>
import GoTop from "@inotom/vue-go-top";
export default {
  components: {
    GoTop,
  },
  computed: {
    isHome() {
      return this.$route.path == "/";
    },
  },
};
</script>

