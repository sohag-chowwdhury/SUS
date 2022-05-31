<template>
  <div style="margin:5% 5% 5% 5%">
    <v-layout row wrap justify-center>
         <v-flex class="header_text" xs12 md12 lg12 sm12 text-center>
        <div data-aos="zoom-in">
          <h1
            style="
              margin-bottom: 5% !important;
              text-align: center;
              color: #000000 !important;
              font-weight: 800;
            "
          >
          {{ table.title }}
          </h1>
        </div>
      </v-flex>
       </v-layout>
      <b-card>
        <div>
          <v-layout row wrap justify-center>
           
             <v-flex xs12 sm12 md12 lg12 x12>
              <p class="my-2" style="font-weight:600">{{table.description}}</p>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 x12 v-for="(i, index) in table.arr" :key="index + '6'">
               <div   data-aos="fade-left">
               <b-card :style="index % 2 === 0 ?'background:#FAFAFA;' : 'background:#EEEEEE;' " min-width="100">
                 <p> {{index + 1}}.   {{ i }}</p>
               </b-card>
               </div>
            </v-flex>
          </v-layout>
          
          
          
        </div></b-card
      >
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {
        title: "Legal Status",
        description:
          "Social Upliftment Society (SUS) is registered as a Non-Governmental Organization (NGO). The particulars of registration are as below:",
        arr: [
          "	NGO Affairs Bureau: No. 1094; Date: 02/11/1996",
          "Microcredit Regulatory Authority (MRA): No. 00161-00209-00014; Date: 05/09/2007",
          "Department of Social Services: No. Dha-02411; Date: 09/05/1990",
          "Directorate of Family Planning: No. 73/95; Date: 26/09/1995",
          "Directorate of Women Affairs: No. 39/91; Date: 17/09/1991",
          "Directorate of Youth Development: No. 97/94; Date: 21/07/1992",
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
h4 {
  font-size: 0.8em;
  font-family: Century Gothic;
  margin: 20px 0;
  font-size: 2em; 
  color: #fdfdff;
  margin-left: 2%;
}

p {
  font-size: 1.05em !important;
  font-family: Century Gothic;
  opacity: 1 !important;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #030303;
   margin-left: 2%;
}
</style>
