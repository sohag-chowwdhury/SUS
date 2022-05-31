<template>
  <div style="margin: 5% 5% 5% 5%">
    <v-layout row wrap justify-center>
      <v-flex class="header_text" xs12 md12 lg12 sm12 text-center>
        <div data-aos="fade-right">
          <h1
            style="
              margin-bottom: 1% !important;
              text-align: center;
              color: black;
              font-weight: 800;
            "
          >
            Gallery
          </h1>
        </div>
      </v-flex>
      <div>
        <gallery
          :images="images"
          :index="index"
          @close="index = null"
        ></gallery>
      </div>
      <v-flex
        class="my-4"
        style="margin-bottom: 5% !important"
        xs12
        md12
        lg12
        sm12
        text-center
      >
        <v-card style="margin-left: 5%; margin-right: 5%">
          <v-layout class="mx-2 my-2" row wrap justify-center>
            <v-flex
              xs12
              md4
              lg3
              xl3
              sm6
              @click="index = imageIndex"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              text-center
            >
              <div
                data-aos="fade-left"
                class="image"
                :style="{
                  backgroundImage: 'url(' + image + ')',
                  width: '98%',
                  height: '250px',
                }"
              ></div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import VueGallery from "vue-gallery";
export default {
  components: {
    gallery: VueGallery,
  },
  data() {
    return {
      images: [
        require("@/assets/img/E-0.jpg"),
        require("@/assets/img/V-1.jpg"),
        require("@/assets/img/E-1.jpg"),
        require("@/assets/img/ST-2.jpg"),
        require("@/assets/img/E-2.jpg"),
        require("@/assets/img/ST-5.jpg"),
        require("@/assets/img/E-3.jpg"),
        require("@/assets/img/V-4.jpg"),
        require("@/assets/img/ST-1.jpg"),
        require("@/assets/img/V-5.jpg"),
        require("@/assets/img/E-5.jpg"),
        require("@/assets/img/V-6.jpg"),
      ],
      index: null,
    };
  },
};
</script>
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 3px solid #0820f7;
  margin-top: 5px !important;
}
 h1 {
    font-size: 2em;
    font-family: Century Gothic;
    letter-spacing: 1px;
    color: #f6f6fd;
    opacity: 1;
    margin-top: 5%;
    font-weight: 800;
    text-align: center;
  }
</style>