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
       
        xs12
        sm12
        md12
        lg12
        xl12
        text-center
      >
        
            <v-card color="blue lighten-4" class="mx-1">
              <div class="gov" data-aos="fade-left">
                <p class="mt-2">{{ data.description }}</p>
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
        title: "Geographical Coverage ",
         description:"SUS is implementing its program and projects in six Districts and eleven Upazilas: Dhaka (Savar, Dhamrai, Keraniganj), Gazipur (Sadar, Kaliakoir), Manikganj (Singair), Narsingdi (Sadar, Shibpur), Mymensingh (Sadar) and Lakshmipur (Sadar, Kamolnagar)."
      },
    };
  },
};
</script>
<style scoped>
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