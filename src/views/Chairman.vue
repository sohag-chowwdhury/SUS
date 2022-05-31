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
            <v-card-title class="text-h5" v-text="text2"></v-card-title>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="cr"></v-img>
          </v-avatar>
        </div>
      </v-card>
      <v-card class="mx-2">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <p class="my-1">
           I, as the Chairman of the Executive Committee of Social Upliftment Society (SUS) am overwhelmingly delighted and feel honoured to present the Annual Report of the Social Upliftment Society (SUS) for the financial year 2019-2020. This report actually accounts in brief the activities and achievements that were accomplished during this said period.

In this reporting year, SUS was able to reach more than 40,000 Nos. of people living across its program implementation areas. It was also able to maintain its reputation as a national organization providing services to the targeted disadvantaged people including the excluded people living in its working areas. SUS has been particularly trying to expand its operations in poverty prone urban areas. Special emphasis is being given to social and economic empowerment of the poor women, livelihood and entrepreneurship development, the agricultural development and food security and child rights development.

We have been constantly growing and learning through our involvement with the development partners, donors and other groups like, the local level community groups, CSOs, NGOs and representatives of the society.

Our success is the success of the disadvantaged community people for whom we are working. With the ongoing support of our donors and other development partners, board and volunteers, Social Upliftment Society (SUS) will be ready to take and tackle any challenge ahead in 2021.

          </p>
           <h5>Mirza Tareq Md. Mamtazur Rahman
          </h5>
            <h5>Chairman, Executive Committee
            </h5>
                <h5>Social Upliftment Society (SUS)
            </h5>
            <p style="font-weight:bold !important;">Note: On 27 June 2020 our honorable Chairman of the Executive Committee of SUS Mr. Mirza Tareq Md. Mamtazur Rahman passed away.</p>
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
</style>