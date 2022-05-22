<template>
  <div>
    <div
      class="header"
      :style="{
        'background-image':
          'url(' + require('@/assets/img/headerBg1.jpeg') + ')',
      }"
    >
      <v-layout
        v-on:mouseover="mouseover"
        v-on:mouseleave="mouseleave"
        class="overly"
        row
        wrap
        justify-center
      >
        <v-flex xs10 sm10 md10 lg10 text-start>
          <div class="main_header_text" data-aos="fade-up">
            <h2>
              Social Upliftment Society (SUS) is <br />
              <span :class="hover ? 'hoverEfect' && 'left-dely' : ''">
                a women-led
              </span>
              Non-Political, Not-for-Profit
              <br />
              & Non-Governmental Organization (NGO).
            </h2>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <svg
      style="margin-top: -5%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,197.3C560,235,640,277,720,288C800,299,880,277,960,256C1040,235,1120,213,1200,218.7C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
    <div style="margin-top: -15%">
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex class="header_text" xs10 sm10 md10 lg10>
            <div data-aos="fade-right">
              <h1 style="text-align: center !important">
                Vision , Mission & Goal
              </h1>
            </div>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-center class="header2">
          <div
            class="mt-2"
            v-for="(item, index) in sliderData"
            :key="item.index"
          >
            <v-layout row wrap v-if="slide == index">
              <v-flex class="hide" xs12 sm6 md6 lg6 text-start>
                <div data-aos="flip-left">
                  <v-img class="left-dely slider slider-img" :src="item.img">
                  </v-img>
                </div>
              </v-flex>
              <v-flex xs10 sm6 md6 lg6 text-start>
                <div data-aos="fade-down-right" class="slider-h">
                  <h1 class="slider-number">{{ index + 1 }}</h1>
                  <h1 :class="index > 0 ? 'slider1-h1' : ''" class="slider-h1">
                    {{ item.title }}
                  </h1>
                  <p class="slider-p" style="height: 140px; color: #000000">
                    {{ item.description }}
                  </p>
                  <v-btn text style="" class="btn-design1 button1 mt-3"
                    >Read More <v-icon>mdi-arrow-right</v-icon></v-btn
                  >
                </div>
                <br />
                <v-layout class="hide" row wrap justify-start>
                  <v-flex xs12 text-end class="mt-3">
                    <i
                      style="font-size: 3.7em; color: #000000"
                      class="fas fa-chevron-left left-dely-b mr-2"
                      size="2x"
                      v-if="slide == 1 || slide == 2"
                      @click="btnLeft(index)"
                    ></i>
                    <i
                      style="font-size: 3.7em;  color#000000"
                      class="fas fa-chevron-right right-dely ml-2"
                      v-if="slide == 0 || slide == 1"
                      @click="btnRight(index)"
                    ></i>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex class="hideLg" xs12 sm6 md6 lg6 text-start>
                <v-img class="left-dely slider-img" :src="item.img"> </v-img>
              </v-flex>

              <v-flex class="hideLg mt-3" xs12 text-end>
                <v-layout row wrap justify-center>
                  <v-flex xs3 text-start>
                    <i
                      style="font-size: 2.7em; color: #000000"
                      class="fas fa-chevron-left left-dely-b mr-2"
                      size="2x"
                      v-if="slide == 1 || slide == 2"
                      @click="btnLeft(index)"
                    ></i>
                  </v-flex>
                  <v-flex xs3 text-end>
                    <i
                      style="font-size: 2.7em; color: #000000"
                      class="fas fa-chevron-right right-dely ml-2"
                      v-if="slide == 0 || slide == 1"
                      @click="btnRight(index)"
                    ></i>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </div>
        </v-layout>
      </v-container>
      <svg
        style="margin-top: -5%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1340 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L48,229.3C96,235,192,245,288,208C384,171,480,85,576,80C672,75,768,149,864,149.3C960,149,1056,75,1152,58.7C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
    <svg
      style="margin-top: -5%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,197.3C560,235,640,277,720,288C800,299,880,277,960,256C1040,235,1120,213,1200,218.7C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
    <!-- second -->
    <v-layout style="margin-top: -30%" row wrap justify-center class="header2">
      <v-flex class="header_text" xs10 sm10 md10 lg10>
        <div data-aos="fade-right">
          <h1 style="text-align: center !important">Aphorism</h1>
        </div>
      </v-flex>

      <v-flex xs12 sm6 md6 lg6 text-start>
        <v-layout row wrap justify-center>
          <v-flex
            xs12
            sm12
            md12
            lg12
            text-start
            style="margin-right: 2%; margin-top: 2%; margin-left: 10%"
          >
            <v-card color="blue darken-4" dark>
              <div
                data-aos="zoom-in-down"
                class="d-flex flex-no-wrap justify-space-between"
              >
                <div>
                  <v-card-subtitle v-text="text1"></v-card-subtitle>
                  <v-card-title class="text-h5" v-text="text2"></v-card-title>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="cr"></v-img>
                </v-avatar>
              </div>
            </v-card>
            <v-card>
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <p class="my-1">
                  I, as the Chairman of the Executive Committee of Social
                  Upliftment Society (SUS) am overwhelmingly delighted and feel
                  honoured to present the Annual Report of the Social Upliftment
                  Society (SUS) for the financial year 2019-2020. This report
                  actually accounts in brief the activities and achievements
                  that were accomplished during this said period. In this
                  reporting year, SUS was able to reach more than 40,000 Nos. of
                  people living across its program implementation areas. It was
                  also able to maintain its reputation as a national
                  organization providing services to the targeted disadvantaged
                  people including the excluded people living in its working
                  areas. SUS has been particularly trying to expand its
                  operations in poverty prone urban areas. Special emphasis is
                  being given to social and economic empowerment of the poor
                  women, livelihood and entrepreneurship development, the
                  agricultural development and food security and child rights
                  development.
                </p>
                <v-btn
                  style="margin-left: 70%"
                  text
                  class="btn-design1 button1 my-3"
                  >Read More <v-icon>mdi-arrow-right</v-icon></v-btn
                >
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 text-start class="mt-8">
        <v-layout
          row
          wrap
          justify-center
          style="margin-left: 2%; margin-top: 3%; margin-right: 10%"
        >
          <v-flex xs12 sm12 md12 lg12 text-start class="">
            <v-card color="blue darken-1" dark>
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
            <v-card>
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <p class="my-1">
                  We are going to start a new year with a dream of building a
                  society where the people will able to overcome all of barriers
                  in the path of leading a life of full enjoyment of rights
                  recognized by the country.During the last financial year,
                  particularly in the later part of this reporting period
                  ranging from March to June 2020, we came across some
                  unexpected and deadly events like, COVID-19, Amphan, a super
                  cyclone etc. that jeopardized the normal life of our people.
                  Even today we are struggling for coping with the situation.
                  Amid huge obstacles and barriers, we could not stop our
                  journey and are constantly providing our support to the people
                  in distress. We are continuing our field operation with our
                  planned interventions among the targeted community people.
                  This Annual Report has actually depicted the intervention
                  package and achievements that we accomplished and attained
                  with the fabulous support of all relevant
                </p>
                <v-btn
                  style="margin-left: 70%"
                  text
                  class="btn-design1 button1 my-3"
                  >Read More <v-icon>mdi-arrow-right</v-icon></v-btn
                >
              </div>
            </v-card>
           
          </v-flex>
          
        </v-layout>
      </v-flex>
    </v-layout>
    <svg
      style="margin-top: -8%"
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

    <v-layout row wrap justify-center style="margin-top: -25%">
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
  name: "Home",
  data() {
    return {
      slide: 0,
      hover: false,
      explore: false,
      typeCheck: false,
      indexValue: 0,
      text1: "MESSAGE FROM THE ",
      text2: "CHAIRMAN ",
      text3: "MESSAGE FROM THE ",
      text4: "EXECUTIVE DIRECTOR  ",
      filterItem: [],
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
      type: "",
      cr: require("@/assets/img/slider2.png"),
      ed: require("@/assets/img/slider3.png"),
      bag: require("@/assets/img/bagCarve.png"),

      logo: require("@/assets/img/logo.png"),
      sliderData: [
        {
          img: require("@/assets/img/slider1.jpg"),
          title: "Vision",
          description:
            "Social Upliftment Society (SUS) seeks a country of social justice, where poverty has been overcome and people live in dignity and security.",
        },
        {
          img: require("@/assets/img/slider2.jpg"),
          title: "Mission",
          description:
            "SUS aims at building socially and economically empowered society where the people will be able to plan, prioritize and implement their own development programs.",
        },
        {
          img: require("@/assets/img/slider3.jpg"),
          title: "Goal",
          description:
            "To ensure effective participation of the disadvantaged community people in the process of planning and implementing various development projects and programs both at the local and national levels",
        },
      ],
    };
  },
  methods: {
    btnLeft(e) {
      if (e <= 2) {
        this.slide = this.slide - 1;
      }
    },
    btnRight(e) {
      if (e >= 0) {
        this.slide = this.slide + 1;
      }
    },
    exploreMethode() {
      this.explore = true;
    },
    exploreMethodeMin() {
      this.explore = false;
    },
    filterData(e, i) {
      (this.type = ""), (this.explore = false), (this.typeCheck = true);
      this.indexValue = i;
      this.type = e;
      this.filterItem.length = 0;
      this.features.map((item) => {
        if (item.type == e) {
          this.filterItem.push(item);
        }
      });
      if ("All" == e) {
        (this.explore = false), (this.filterItem = []);
      }
    },
    mouseover() {
      this.hover = true;
    },
    mouseleave() {
      this.hover = false;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .hover {
    color: rgb(red, green, blue);
  }
  .header {
    height: 550px;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .heder-btn {
    margin-left: 10%;
  }

  .fiture {
    margin: auto;
  }
  .overly {
    background: rgba(39, 28, 77, 0.7);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .header-logo {
    margin-top: 10%;
    width: 160px;
    margin-left: 10%;
    margin-right: 10%;
  }
  h2 {
    font-family: Century Gothic;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 30px;
    font-weight: 600;
    margin-left: 10%;
    margin-right: 10%;
    letter-spacing: 0;
    color: #f2f2f2;
  }
  .slider-img {
    width: 410px;
    overflow: hidden;
    height: 250px;
  }
  .slider-number {
    margin-top: 20%;
    font-size: 250px;
    opacity: 0.8;
    margin-left: 14%;
    opacity: 0.2;
    color: #0528ec;
  }
  .hide {
    display: none !important;
  }
  .slider-h1 {
    font-size: 40px;
    font-family: Century Gothic;
    letter-spacing: 3px;
    width: 220px;
    margin-left: 34%;
    color: #34374c !important;
    opacity: 1;
    font-weight: 800;
    margin-top: -27%;
  }
  .slider1-h1 {
    font-size: 40px;
    font-family: Century Gothic;
    letter-spacing: 3px;
    width: 220px;
    margin-left: 38%;
    color: #34374c !important;
    font-weight: 800;
    margin-top: -29%;
  }
  .margin-head {
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .btn-design {
    margin-left: 27%;
  }
  .btn-design1 {
    margin-top: -70px !important;
    margin-left: 55%;
    font-size: 0.8em;
  }
  .slider-p {
    font-size: 0.85em;
    font-family: Century Gothic;
    margin-left: 22%;
    margin-top: 0%;
    text-align: justify;
    font-weight: 500;
  }

  .button3 {
    background-color: white;
    color: black;
  }
  .button3:hover {
    color: red;
    font-size: 13px;
  }
  .button-text {
    font-size: 0.8em;
  }
  .button2 {
    width: 85px !important;
    margin: 2%;
  }
  .button1:hover {
    color: red;
    font-size: 12px;
  }
  .fiture h3 {
    font-size: 1em;
    font-family: Century Gothic;
    margin: 3%;
    font-weight: 700;
  }
  .fiture p {
    font-size: 0.9em;
    font-family: Century Gothic;
    margin-left: 10%;
    margin-right: 10%;
    text-align: justify;
  }
  p {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
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
    line-height: 60px;
    letter-spacing: 0;
  }
  h1 {
    font-family: Century Gothic;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0;
    color: #3e3e4a;
    margin-left: 10%;
    margin-right: 10%;
    line-height: 60px;
    letter-spacing: 0;
  }
  .main-heading {
    color: #777;
    text-transform: uppercase;
  }
  .left-dely {
    color: red;
    display: inline-block;
    font-weight: 700;
    animation: moveInLeft 1s ease-out;
  }
  .left-dely-b {
    color: red;
    display: inline-block;
    font-weight: 700;
    animation: moveInLeft 1s ease-out;
  }
  .right-dely {
    display: inline-block;

    letter-spacing: 2px;
    animation: moveInLeft 1s ease-out;
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    80% {
      transform: translateX(-10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
}
@media only screen and (min-width: 601px) {
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 3px solid #0820f7;
    margin-top: 5px !important;
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
  .hoverEfect {
    color: rgb(red, green, blue);
    font-family: Century Gothic;
    margin-top: 3% !important;
    margin-bottom: 3% !important;
    font-size: 38px !important;
    font-weight: 600 !important;
    letter-spacing: 0 !important;
    color: #f2f2f2;
  }
  .header {
    height: 800px;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .hideLg {
    display: none !important;
  }
  .header2 {
    height: 600px;
  }
  .header2-bg {
   
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .overly {
    background: rgba(29, 35, 88, 0.7);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .header-logo {
    width: 180px;
    margin-top: 15%;
  }
  .slider-h {
    position: relative;
    height: 300px;
  }
  .slider {
    background: transparent linear-gradient(180deg, #ee2b47 0%, #00118a 100%) 0%
      0% no-repeat padding-box;
    opacity: 0.9;
    width: 500px;
    height: 530px;
  }
  .slider-img {
    width: 500px;
    height: 560px;
  }
  h2 {
    font-family: Century Gothic;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0;
    color: #f2f2f2;
  }

  .slider-number {
    margin-top: 20%;
    font-size: 340px;
    opacity: 0.2;
    color: #514386;
  }
  .slider-h1 {
    font-size: 65px;
    font-family: Century Gothic;
    letter-spacing: 3px;
    width: 220px;
    color: #2a2a2b;
    opacity: 1;
    margin-left: 20%;
    font-weight: 800;
    margin-top: -17%;
  }
  .slider1-h1 {
    font-size: 65px;
    font-family: Century Gothic;
    letter-spacing: 3px;
    width: 220px;
    font-weight: 800 !important;
    color: #2a2a2b;
    opacity: 1;
    margin-left: 20%;
    font-weight: 500;
    margin-top: -18%;
  }
  .margin-head {
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .btn-design {
    margin-left: 10%;
  }
  .btn-design1 {
    margin-left: 18%;
  }
  .btn-design3 {
    color: #1d1b1b;
  }
  .slider-p {
    font-size: 1em !important;
    font-family: Century Gothic;
    margin-left: 20% !important;
    line-height: 27px;
    margin-top: 7% !important;
    font-weight: 500;
    text-align: left;
    letter-spacing: 0px;
    color: #34374c;
    opacity: 1;
  }

  p {
    font-size: 1em !important;
    text-align: left;
    font-family: Century Gothic;
    font-size: 1;
    margin: auto;
    letter-spacing: 0px;
    color: #34374c;
  }
  .header2 p {
    font-size: 1.1em !important;
    text-align: left;
    font-family: Century Gothic;
    font-size: 1;
    margin: auto;
    letter-spacing: 0px;
    color: #34374c;
    margin-left: 5%;
  }
  .main_header_text {
    margin-top: 25%;
  }
  .button3 {
    background-color: white;
    color: black;
  }
  .button3:hover {
    color: red;
    font-size: 13px;
  }
  .button2 {
    width: 120px !important;
    margin: 2%;
  }
  .button1:hover {
    color: red;
    font-size: 15px;
  }
  .fiture h3 {
    font-size: 1em;
    font-family: Century Gothic;
    letter-spacing: 1px;
    margin: 3%;
    color: #43465a;
    font-weight: 700;
  }
  .fiture p {
    font-size: 0.9em;
    font-family: Century Gothic;
    margin-left: 10%;
    margin-right: 10%;
    text-align: start;
    margin-top: 1%;
  }
  h1 {
    text-align: left;
    font-family: Century Gothic;
    margin-top: 12%;
    margin-bottom: 3%;
    margin-left: 5%;
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 0;
    color: #34374c;
    opacity: 1;
    line-height: 60px;
    letter-spacing: 0px;
  }
  .main-heading {
    color: #777;
    text-transform: uppercase;
  }
  .left-dely {
    color: red;
    display: inline-block;
    font-weight: 700;
    animation: moveInLeft 1s ease-out;
  }
  .right-dely {
    display: inline-block;
    font-size: 1rem;
    letter-spacing: 2px;
    animation: moveInBottom 1s ease-out;
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    80% {
      transform: translateX(-10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
}
</style>
