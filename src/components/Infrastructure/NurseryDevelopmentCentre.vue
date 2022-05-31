<template>
  <div style="margin: 10% 5% 10% 5%">
    <v-layout row wrap justify-center>
      <v-flex class="header_text" xs12 md12 lg12 sm12 text-center>
        <div data-aos="fade-right">
          <h1
            style="
              margin-bottom: 1% !important;
              text-align: center;
              color: #000000 !important;
              font-weight: 800;
            "
          >
            Nursery Development Centre
          </h1>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12 text-center>
        <v-card  class="background2">
          <div class="gov" data-aos="fade-right">
            <p class="mt-2" style="color: white">
              Central Nursery Development Project: With the financial support of
              the SUS own fund, SUS has developed a nursery at Savar Upazila of
              Dhaka district. The ultimate beneficiaries of this project are the
              rural farmers including the beneficiaries of the SUS credit
              program. The goal of this project is to encourage rural farm
              families to grow vegetables, fruits and timber trees and to make
              available vegetable seedlings, fruit and timber tree saplings at
              the doorstep of rural farm families. <br /><br />The objectives of
              this project are to: assist in balancing the ecological effect;
              improve the environment of the project area; supplement the
              nutritional food to the beneficiaries; help decrease diseases
              among the beneficiaries. The major activities of this nursery
              project are:Growing seasonal vegetable seedlings and selling at
              low price; Growing improved saplings of various fruit trees and
              selling at low price;Growing saplings of various timber trees and
              selling at low price; Organizing training on vegetable growing,
              tree plantation and environment protection.
            </p>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.background2 {
    color: #fff;
    background: linear-gradient(
      -45deg,
      #0099FF,
      #0689e0,
      #066bad,
      #024470,
      #0099FF,
      #25a6fc,
      #0099FF,
      #0099FF,
      #014674
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 30s ease infinite;
    -moz-animation: Gradient 30s ease infinite;
    animation: Gradient 30s ease infinite;
  }
.background1 {
    color: #fff;
    background: linear-gradient(
      -45deg,
      #024470,
      #0099FF,
      #25a6fc,
      #0099FF,
      #0099FF,
      #014674,
      #0099FF,
      #0689e0,
      #066bad
      
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 30s ease infinite;
    -moz-animation: Gradient 30s ease infinite;
    animation: Gradient 30s ease infinite;
  }
.background {
    color: #fff;
    background: linear-gradient(
      -45deg,
       #25a6fc,
      #0099FF,
      #0099FF,
      #014674,
      #0099FF,
      #024470,
      #0099FF,
      #0689e0,
      #066bad
    );
    background-size: 400% 400%;
     -webkit-animation: Gradient 30s ease infinite;
    -moz-animation: Gradient 30s ease infinite;
    animation: Gradient 30s ease infinite;
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
.gov h4 {
  font-family: Century Gothic;

  font-size: 1.8em;
  color: #000000;
  text-align: center;
  margin: 5% 3% 5% 3%;
}

.gov p {
  font-size: 0.9em !important;
  font-family: Century Gothic;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #020202;
  text-align: justify;
  margin: 0% 5% 0% 5%;
  padding: 2%;
}
</style>
