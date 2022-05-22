<template>
  <v-app>
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
export default {
  computed: {
    isHome() {
      return this.$route.path == "/";
    },
  },
};
</script>

