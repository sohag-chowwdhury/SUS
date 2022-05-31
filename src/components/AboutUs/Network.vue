<template>
  <div style="margin: 5% 5% 0% 5%">
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
            {{ data.title }}
          </h1>
        </div>
      </v-flex>
      <v-flex
        v-for="(i, index) in data.arr"
        :key="index"
        xs12
        sm12
        md12
        lg12
        xl12
        text-center
      >
        
            <v-card color="blue lighten-4" class="mx-1">
              <div class="gov" data-aos="fade-right">
                <p class="mt-2">{{ i }}</p>
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
      data: {
        title: "Linkage and Network",
        arr: [
          "Excellent working relationship/linkage has been developed with local level GoB service providers like DAE, DLS, and Department of Mass Education, Department of Health and Family Welfare, Department of Social welfare, Department of Woman affairs etc", "SUS Linkages and Network with other organizations are with: Micro-Credit, Summit, Washington; PKSF-Net Work; InM; ADAB; NGO-Forum; Anukul Foundation, MDF; Credit Development Forum (CDF); Traffic Watch Bangladesh(TWB); WBB Trust.",
          
        ],
      },
    };
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {}
@media only screen and (min-width: 600px) {}
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
  
  font-size: 1.8em;
  color: #000000;
  text-align: center;
  margin: 5% 3% 5% 3%;

}

.gov p {
  font-size: 1.05em !important;
  font-family: Century Gothic;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.6em !important;
  color: #000000;
  text-align: justify;
  font-weight: 500;
  margin: 0% 5% 0% 5%;
  padding: 2%;
 
}
</style>