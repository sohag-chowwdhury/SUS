<template>
  <div class="main-div">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md10 lg10 xl10 v-for="(item, i) in blog" :key="i">
        <v-card class="mx-1">
          <v-layout row wrap justify-center>
            <v-flex v-for="(l, m) in item.img" :key="m" xs5 sm5 md5 lg5 xl5>
              <v-img class="heiigth-div" :src="l"></v-img>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm12 md12 lg12 x12>
              <h3>{{ item.title }}</h3>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 x12>
              <h4>{{ item.subTitle }}</h4>
            </v-flex>
          </v-layout>
          <v-layout
            row
            wrap
            justify-center
          >
            <v-flex
              v-for="(i, k) in item.listArr"
              :key="k"
              xs12
              sm12
              md12
              lg12
              x12
            >
              <p style="width: 94%; margin-left: 3%">
                {{ i }}
              </p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      images: [
        require("@/assets/img/01.jpg"),
        require("@/assets/img/02.jpg"),
        require("@/assets/img/03.jpg"),
        require("@/assets/img/04.jpg"),
        require("@/assets/img/05.jpg"),
        require("@/assets/img/06.jpg"),
        require("@/assets/img/07.jpg"),
        require("@/assets/img/08.jpg"),
      ],
      index: null,
      cycle: true,

      blog: [
        {
          title: "COVID-19 Crisis and SUS Initiatives to face the situation",
          subTitle:
            "Mid-level and Small MFIs are severely affected by the COVID-19 situation which is briefly stated below.",
          descriptionStatus: false,
          img: [
            require("@/assets/img/News1.jpg"),
            require("@/assets/img/news2.jpg"),
          ],
          list: true,
          listArr: [
            "Social Upliftment Society (SUS) along with other MFIs in Bangladesh could not collect loan instalments from their clients during April and May 2020 as the government halted nationwide operations. As a result, we faced cash flow crisis due to halted operations.",

            "But after May 2020, MFIs has started its microfinance program on a limited scale.",

            "As the majority of the MFI borrowers have already become vulnerable due to the pandemic, this has also created a serious threat to the day-to-day activities of the MFIs and also on their sustainability",

            "Further, on the health issue, some MFIs had to close their branches, change the way they work and reduce their physical contact with the program beneficiary groups",

            "The pandemic has affected the workplace and earnings of the borrowers which have seriously weakened their repayment capacity",

            "Loan defaults possibilities have become higher, administrative costs have risen and the MFIs own debt obligations and liquidity have been facing challenges and concerns for the sustainability of their operations. ",

            "Most of the mid and small levels NGO-MFIs are already facing hardships and difficulties in paying full salaries to their staff last month",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .main-div{
     margin:17% 5% 5% 5%;
 }
 .heiigth-div{
     height: 245px;
 }
  h1 {
    font-size: 2em;
    font-family: Century Gothic;
    letter-spacing: 1px;
    color: #f6f6fd;
    opacity: 1;
    margin: 10% 5% 5% 5%;
    font-weight: 800;
    text-align: center;
  }
  h3 {
    font-family: Century Gothic;
    margin: 3% 3% 3% 3%;
    font-size: 1.3em;
    font-weight: 600;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 3px solid #686869;
    margin-top: 1px !important;
  }
  h4 {
    font-family: Century Gothic;
    margin: 0% 3% 3% 3%;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
  p {
    font-family: Century Gothic;
    margin: 0% 3% 0% 3%;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
}
@media only screen and (min-width: 601px) {
    .main-div{
     margin:8% 5% 5% 5%;
 }
     .heiigth-div{
     height: 445px;
 }
  h1 {
    font-size: 2em;
    font-family: Century Gothic;
    letter-spacing: 1px;
    color: #f6f6fd;
    opacity: 1;
    margin: 0% 5% 5% 5%;
    font-weight: 800;
    text-align: center;
  }
  h3 {
    font-family: Century Gothic;
    margin: 3% 3% 3% 3%;
    font-size: 1.3em;
    font-weight: 600;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 3px solid #686869;
    margin-top: 1px !important;
  }
  h4 {
    font-family: Century Gothic;
    margin: 0% 3% 3% 3%;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
  p {
    font-family: Century Gothic;
    margin: 0% 3% 0% 3%;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
    overflow: hidden;
  }
}
</style>