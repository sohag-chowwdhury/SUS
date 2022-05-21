<template>
  <div style="margin: 5% 5% 5% 5%">
    <v-layout>

   
    <gallery
          :images="images"
          :index="index"
          @close="index = null"
        ></gallery>
      
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
       
      ],
      index: null,
     }
   }
}
</script>