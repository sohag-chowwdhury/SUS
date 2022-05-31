<template>
  <div style="margin: -5% 5% 5% 5%">

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
            {{table.title}}
          </h1>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
         <b-card class="background" style="">
             <div data-aos="flip-left">
               <p>{{table.description}}</p>
             </div>
         </b-card>
      </v-flex>


      <v-flex xs12 sm12 md12 lg12 xl12>
          <v-layout class="mx-1 my-2" row wrap justify-center>
            <v-flex xs12 sm12 md4 lg4 xl4 v-for="(i, index) in table.arr" :key="index + '6'">
                <b-card v-if="index == 0" class="background2"  style="height:250px; ">
                   <div data-aos="flip-right">
                     <h3>{{i.name}}</h3>
                      <p>{{i.description}}</p>
                   </div>
                </b-card>
                <b-card v-if="index == 1" class="background1"  style="height:250px;">
                  <div data-aos="zoom-in">
                     <h3>{{i.name}}</h3>
                <p>{{i.description}}</p>
                  </div>
                </b-card>
                <b-card v-if="index == 2" class="background"  style="height:250px;">
                    <div data-aos="flip-left">
                      <h3>{{i.name}}</h3>
                     <p>{{i.description}}</p>
                    </div>
                </b-card>
            </v-flex>
          </v-layout>
      </v-flex>
    </v-layout>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      table:{
          title: "Management Structure",
          description: "SUS Management Structure consists of: a. Head of SUS Management, b. Senior Management Team (SMT) and c. Operational Staff Members.", 
          arr: [
           {name:"Head of SUS Management",description:"The Executive Director is appointed by the EC and is treated as the Head of the organizational management who shoulders the overall responsibility of efficient and effective management of the organization."}, 
           {name:"Senior Management Team (SMT)",description:"In order to increase coordination across various projects and programs, a committee comprising of all departmental heads is formed in the name of Senior Management Team (SMT)."}, {name:"Staff Members",description:"SUS is implementing its projects and programs deploying a pool of human resources who are dedicated, committed and well experienced in their respective fields."},
          ],
        }
    };
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
h3 {
  
  font-family: Century Gothic;
  opacity: 0.99;
  margin: 20px 0;
  font-size: 1.3em;
  
  color: #fefeff;
}
h4 {
  font-size: 0.8em;
  font-family: Century Gothic;
  opacity: 0.99;
  font-size: 1.9em;
 
  color: #fbfbff;
}
p {
  font-size: 1em !important;
  font-family: Century Gothic;
  opacity: 0.99;
  letter-spacing: 1px;
  font-size: 1.05em !important;
  line-height: 1.5em;
  color: hsl(0, 100%, 100%);
}

.innerText{
  font-weight: bold;
}
</style>