<template>
  <div >
    <div style="margin: 5% 5% 0% 5%">
    <v-layout  row wrap justify-center>
      <v-flex class="header_text" xs12 md12 lg12 sm12 text-center>
        <div data-aos="fade-right">
          <h1
            style="
              margin-bottom: 1% !important;
              text-align: center;
              color: #000000 !important;
              font-weight:800;
             
            "
          >
            Governance Structure
          </h1>
        </div>
      </v-flex>
      <v-flex v-for="(i, index) in table" :key="index" xs12 sm12 md4 lg4 xl4 text-center>
        <v-card class="background1 mx-1" color="" v-if="index == 0" >
          <div class="gov" data-aos="fade-right" >
          <h4 class="">{{ i.title }}</h4>
          <p class="mt-2">{{ i.description }}</p>
        </div>
        </v-card>
        <v-card color="" v-if="index == 1" class="mx-1 background2">
          <div  class="gov" data-aos="fade-left" >
          <h4 class="">{{ i.title }}</h4>
          <p >{{ i.description }}</p>
        </div>
        </v-card>
        <v-card   color="" v-if="index == 2" class="mx-1 background">
          <div class="gov" data-aos="fade-right">
          <h4 class="">{{ i.title }}</h4>
          <p>{{ i.description }}</p>
        </div>
        </v-card>
      </v-flex>
    </v-layout>
    </div>
    <svg v-if="!isHome"
      style="margin-top: -24%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,64L48,101.3C96,139,192,213,288,256C384,299,480,309,576,282.7C672,256,768,192,864,170.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <svg v-if="!isHome" style="margin-top: -2%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,117.3C672,117,768,107,864,133.3C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>

  </div>
</template>
<script>
export default {
  data() {
    return {
      table: [
        {
          title: "Governance Structure",
          description:
            "SUS Governance Structure consists of: a General Committee and an Executive Committee.",
        },
        {
          title: "General Committee",
          description:
            "SUS has a General Committee comprising twenty five members who elect the members of the Executive Committee for every three years. The members of the General Body meet twice a year to review the annual performance of the organization, approves annual budget and provide future directions.",
        },
        {
          title: "Executive Committee (EC)",
          description:
            "SUS has a seven member led Executive Committee consisting of Chairman-1, Vice-Chairman-1, General Secretary-1, Assistant General Secretary-1, Treasurer-1 and Executive Member-2 who meet on a quarterly basis to oversee the performance of the organizational management and provide necessary direction for proper functioning of all management units and departments of the organization. Apart from the scheduled meetings, the honorable members of the Executive Committee also meet in discussion as and when required by the organization.",
        },
      ],
    };
  },
  computed: {
    isHome() {
      return this.$route.path == "/governance";
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {}
@media only screen and (min-width: 600px) {}
.background2 {
    color: #fff;
    background: linear-gradient(
      -45deg,
      #0099FF,
      #0689e0,
      #45b5ff,
      #189cf5,
      #0099FF,
      #25a6fc,
      #0099FF,
      #0099FF,
      #1a9ef7
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 12s ease infinite;
    -moz-animation: Gradient 12s ease infinite;
    animation: Gradient 12s ease infinite;
  }
.background1 {
    color: #fff;
    background: linear-gradient(
      -45deg,
      #0490ec,
      #0099FF,
      #25a6fc,
      #0099FF,
      #0099FF,
      #48a9e9,
      #0099FF,
      #0689e0,
      #55b4f3
      
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 12s ease infinite;
    -moz-animation: Gradient 12s ease infinite;
    animation: Gradient 12s ease infinite;
  }
.background {
    color: #fff;
    background: linear-gradient(
      -45deg,
       #25a6fc,
      #0099FF,
      #0099FF,
      #0591ee,
      #0099FF,
      #2a7fb8,
      #0099FF,
      #0689e0,
      #066bad
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 20s ease infinite;
    -moz-animation: Gradient 20s ease infinite;
    animation: Gradient 20s ease infinite;
  }
    @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
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
 .gov h4 {
 
  font-family: Century Gothic;
  padding: 8px;
  font-size: 1.6em;
  color: #ffffff;
  text-align: center;
  margin: 5% 3% 5% 3%;

}

.gov p {
  font-size: 1.05em !important;
  font-family: Century Gothic;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.6em;
  color: #fdfdff;
  text-align: justify;
  margin: 5% 3% 5% 3%;
  padding: 5px;
}
</style>
