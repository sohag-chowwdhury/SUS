<template>
  <div>
    <svg
      style="margin-top: -15%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,64L48,101.3C96,139,192,213,288,256C384,299,480,309,576,282.7C672,256,768,192,864,170.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,117.3C672,117,768,107,864,133.3C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>

    <div style="margin-left: 5%; margin-top: -20%; margin-right: 5%">
      <v-layout row wrap justify-center class="my-2">
        <v-flex xs12 md12 lg12 text-center>
          <div data-aos="fade-right">
            <h1 style="text-align: center !important; font-weight: 800">
              Contact Us
            </h1>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md6 lg6 xl6>
          <v-card>
            <v-form class="mx-2 my-2">
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field
                v-model="subject"
                label="Subject"
                required
              ></v-text-field>

              <v-text-field
                label="E-mail"
                v-model="email"
                required
              ></v-text-field>
              <v-textarea v-model="description" placeholder="Your details">
              </v-textarea>

              <v-btn
                :disabled="!velidator"
                color="success"
                class="mr-4 my-2"
                block
                type="submit"
              >
                Send
              </v-btn>
            </v-form>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 lg6 md4 xl6 text-center class="mt-1">
          <v-card class="mx-2 mt-2" style="border-radius:15px; ">
            <div data-aos="fade-left" class="mx-2" style="width: 100%">
              <l-map
                :zoom="zoom"
                :options="{ zoomControl: false }"
                :center="postDetails"
                style="height: 425px; width: 100%; border-radius:25px;"
              >
                <l-tile-layer :url="url" :attribution="attribution" />
                <l-marker :lat-lng="postDetails" />
                <l-icon-default :image-path="path" />
              </l-map>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIconDefault } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIconDefault,
  },
  data: () => ({
    marker: latLng(23.8467759, 90.246388),
    zoom: 17,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    officeData: {},
    postDetails:[23.8467759,90.246388],
    locations: [
      {
        lat: 23.8467759,
        lng: 90.246388,
        label: "Social Upliftment Society, 76/A, Uttar Para, Savar Union 1340",
      },
    ],
    center: {
      lat: 23.8467759,
      lng: 90.246388,
    },
    name: "",
    email: "",
    subject: "",
    description: "",
  }),

  computed: {
    velidator() {
      return (
        this.name != "" &&
        this.email != "" &&
        this.subject != "" &&
        this.description != ""
      );
    },
    userAuth() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },
};
</script>
<style  scoped>
.card-text {
  height: 85px;
  overflow: hidden;
}
.card-text-email {
  height: 75px;
  overflow: hidden;
}
.card-text-contact {
  height: 75px;
  overflow: hidden;
}
.header_text h1 {
  font-family: Century Gothic;
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 35px;
  font-weight: 900;
  letter-spacing: 0;
  color: #0d0d0e;
  margin-left: 10%;
  margin-right: 10%;
}
</style>