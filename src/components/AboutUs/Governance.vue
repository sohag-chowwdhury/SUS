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
        <v-card color="deep-purple darken-1" v-if="index == 0" class="mx-1">
          <div class="gov" data-aos="fade-right" >
          <h4 class="text-uppercase">{{ i.title }}</h4>
          <p class="mt-2">{{ i.description }}</p>
        </div>
        </v-card>
        <v-card color="green darken-3" v-if="index == 1" class="mx-1">
          <div  class="gov" data-aos="fade-left" >
          <h4 class="text-uppercase">{{ i.title }}</h4>
          <p >{{ i.description }}</p>
        </div>
        </v-card>
        <v-card   color="blue darken-1" v-if="index == 2" class="mx-1">
          <div class="gov" data-aos="fade-right">
          <h4 class="text-uppercase">{{ i.title }}</h4>
          <p>{{ i.description }}</p>
        </div>
        </v-card>
      </v-flex>
    </v-layout>
    </div>
    <svg
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
    <svg style="margin-top: -2%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
};
</script>

<style scoped>
 .gov h4 {
 
  font-family: Century Gothic;
  
  font-size: 1.8em;
  color: #ffffff;
  text-align: center;
  margin: 5% 3% 5% 3%;

}

.gov p {
  font-size: 0.9em !important;
  font-family: Century Gothic;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #fdfdff;
  text-align: justify;
  margin: 5% 3% 5% 3%;
}
</style>
