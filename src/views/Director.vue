<template>
  <div style="margin:12% 5% 5% 5%">
      <v-layout row wrap justify-center>
    <v-flex xs12 sm11 md10 lg10  xl10 text-start class="">
      <v-card class="mx-2 mt-xs-4 mt-sm-4" color="blue darken-1" dark>
        <div
          data-aos="zoom-in-up"
          class="d-flex flex-no-wrap justify-space-between"
        >
          <div>
            <v-card-subtitle v-text="text3"></v-card-subtitle>
            <v-card-title class="text-h5" v-text="text4"></v-card-title>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="ed"></v-img>
          </v-avatar>
        </div>
      </v-card>
      <v-card class="mx-2">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <p class="my-1">
            We are going to start a new year with a dream of building a society
            where the people will able to overcome all of barriers in the path
            of leading a life of full enjoyment of rights recognized by the
            country. During the last financial year, particularly in the later
            part of this reporting period ranging from March to June 2020, we
            came across some unexpected and deadly events like, COVID-19,
            Amphan, a super cyclone etc. that jeopardized the normal life of our
            people. Even today we are struggling for coping with the situation.
            Amid huge obstacles and barriers, we could not stop our journey and
            are constantly providing our support to the people in distress. We
            are continuing our field operation with our planned interventions
            among the targeted community people. This Annual Report has actually
            depicted the intervention package and achievements that we
            accomplished and attained with the fabulous support of all relevant
            stakeholders. In fact, the end of one year is the beginning of
            another new year. So, it is our desire to have consistent supports
            and cooperation from our existing development partners and
            well-wishers in the journey towards our destination. So, we would
            like to welcome anyone or organizations to partner with us to
            collectively work for people who need an opportunity to change their
            situations. Finally, I, on behalf of the SUS family, express my
            heart-felt gratitude to all stakeholders including our honorable
            board members who extended their supports and cooperation in
            successful accomplishment of all intervention packages and targets
            rightly set at the start of this reporting period.
          </p>
          <h5>Hamida Begum
          </h5>
            <h5>Executive Director
            </h5>
                <h5>Social Upliftment Society (SUS)
            </h5>
        </div>
      </v-card>
    </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text1: "MESSAGE FROM THE ",
      text2: "CHAIRMAN ",
      text3: "MESSAGE FROM THE ",
      text4: "EXECUTIVE DIRECTOR  ",
      cr: require("@/assets/img/slider2.png"),
      ed: require("@/assets/img/slider3.png"),
    };
  },
};
</script>
<style scoped>
p {
    font-size: 1em !important;
    text-align: left;
    font-family: Century Gothic;
    font-size: 1;
    margin: auto;
    letter-spacing: 0px;
    line-height: 1.8em;
    color: #070707;
    padding: 3% 3% 3% 3%;
  }
  h5 {
    font-size: 1em !important;
    text-align: left;
    font-family: Century Gothic;
    font-size: 1;
    margin: auto;
    letter-spacing: 0px;
    color: #070707;
    padding: 0% 3% 3% 3%;
    font-weight: bold;
  }
</style>