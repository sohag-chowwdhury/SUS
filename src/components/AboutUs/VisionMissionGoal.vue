<template>
  <div style="margin: 4% 5% 0% 5%">
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
            Vision, Mission & Goal
          </h1>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 xl6> 
        <div data-aos="fade-left"
          style="min-height:300px;"
       class="pa-7  rounded-circle d-inline-block background2"
      >
        <h1 class="text-gola">Vision</h1>
        <p class="text-goal-p">Social Upliftment Society (SUS) seeks a country of social justice, where poverty has been overcome and people live in dignity and security.</p>
      </div> </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 md6 lg6 xl6> <div
     
      >
         <div
         data-aos="fade-right"
          style="min-height:300px;"
       class="pa-7  rounded-circle d-inline-block background "
      >
        <h1 class="text-gola">Mission</h1>
        <p class="text-goal-p">Social Upliftment Society (SUS) seeks a country of social justice, where poverty has been overcome and people live in dignity and security.</p>
      </div>
      </div> </v-flex>
      <v-flex xs12 sm6 md6 lg6 xl6>
        <div
        style="min-height:300px;"
       class="pa-7  rounded-circle d-inline-block background1"
      >
        <h1 class="text-gola">Goal</h1>
        <p class="text-goal-p">To ensure effective participation of the disadvantaged community people in the process of planning and implementing various development projects and programs both at the local and national levels.</p>
      </div>
      </v-flex>
    </v-layout>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 600px) {}
@media only screen and (min-width: 600px) {} 

.background2 {
    color: rgb(17, 17, 17);
    background: linear-gradient(
      -45deg,
       #0099FF,
      #0689e0,
      #066bad,
      #024470,
      #0099FF,
      #25a6fc,
      #014470,
      #0364a5,
      #014674
    );
    background-size: 400% 400%;
   -webkit-animation: Gradient 30s ease infinite;
    -moz-animation: Gradient 30s ease infinite;
    animation: Gradient 30s ease infinite;
  }
.background1 {
    color: rgb(10, 10, 10);
    background: linear-gradient(
      -45deg,
      #022a4e,
      #880376,
      #ee7752,
      #813d05,
      #23a6d5,
      #025844,
      #07e76c,
      #59db1d,
      #6bd409
      
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 30s ease infinite;
    -moz-animation: Gradient 30s ease infinite;
    animation: Gradient 30s ease infinite;
  }
.background {
    color: rgb(10, 10, 10);
    background: linear-gradient(
      -45deg,
      #07e76c,
      #db1d1d,
      #2799b6,
      #225e96,
      #f504d5,
      #ee7752,
      #e73c7e,
      #23a6d5,
      #23d5ab
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
 .text-goal-p {
    font-size: 1.05em !important;
    font-family: Century Gothic;
    letter-spacing: 1px;
    color: #f6f6fd;
    opacity: 1;
    line-height: 1.5em;
    margin-top: 5%;
    font-weight: 500;
    text-align: center;
 }
</style>