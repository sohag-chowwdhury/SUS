<template>
 <div>
  <div style="margin:5% 5% 5% 5%">
       <v-layout row wrap justify-center>
         <v-flex class="header_text" xs12 md12 lg12 sm12 text-center>
        <div data-aos="zoom-in">
          <h1
            style="
              margin-bottom: 1% !important;
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
      <b-card  style="background:#0277BD; margin-top:3%">
         <v-layout  row wrap justify-center>
              
           <v-flex  xs12 sm6 md8 lg9 xl9>
               <div data-aos="flip-left">
                    <h4  class="text-uppercase"></h4>
                    <p>{{ table.description }}</p>
                  </div>
           </v-flex>
           
         </v-layout>
       </b-card
      >

      <b-row class="my-3">
        <b-col>    
              <v-layout  row wrap justify-center>
                <b-card  style="background:#FAFAFA; width:100%"  class="mt-1 mx-2" v-for="(item, index) in table.arr" :key="index">
                    <v-flex   xs12 sm12 md12 lg12 xl12>
                      <v-layout row wrap justify-center>
                        <v-flex xs5 sm5 md3 lg3 xl3>
                          <div data-aos="flip-left"> <p style="color:#000000 !important;">{{ item.title }}</p></div>
                           
                          </v-flex>
                          <v-flex xs7 sm7 md9 lg9 xl9>
                             <div data-aos="flip-right"> <p style="color:#000000 !important;"> {{ item.description }}</p></div>
                               
                          </v-flex>
                      </v-layout>
                    </v-flex>
                </b-card>
              </v-layout>
              
           
          
        </b-col>
      </b-row>
     

      </div>
      <svg v-if="!isHome" style="margin-top:-30%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,32L1440,320L1440,320L0,320Z"></path>
</svg>
    <svg v-if="!isHome" style="margin-top: -5%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
       img:require("@/assets/img/ST-2.jpg"),
      table: {
        title: "Key Programmatic areas",
        description:
          "SUS Governance Structure consists of: a General Committee and an Executive Committee.",
        arr: [
          {
            title: "Financial Services",
            description:
              "Income Generating Activities (IGAs); Micro Enterprise (ME) and Small and Medium Enterprise (SME); Savings and insurance services; Asset Building including housing; Beggar Rehabilitation.",
          },
          {
            title: "Health",
            description:
              "Basic Health Care and Nutrition Education; Disability and Development; Free health camp.",
          },
          {
            title: "Agriculture",
            description:
              "Fisheries, Poultry and Livestock; Milk Production and Marketing; Tree Plantation, Horticulture, Nursery and Homestead Gardening; Integrated Agricultural Interventions; Action Research in Agricultural Fields.",
          },
          {
            title: "Disaster and Relief",
            description:
              "Disaster Risk Reduction and Climate Change (DRR&CC); Relief and Rehabilitation; Emergency Humanitarian Response.",
          },
          {
            title: "Education",
            description:
              "Non-Formal Primary Education (NFPE); Scholarship for the poor students.",
          },
          {
            title: "Women Empowerment",
            description:
              "Social, Economic and Political Empowerment of Women; Improvement of Lives and Livelihood.",
          },
          {
            title: "Social Safety Net Program (SSNP)",
            description:
              "Vulnerable Group Development (VGD); Vulnerable Group Feeding (VGF).",
          },
          {
            title: "Water, Sanitation and Hygiene (WASH)",
            description: "Safe Water and Sanitation; Water Hygiene.",
          },
          {
            title: "Environment",
            description:
              "Environmental Protection; Conservation of Natural Resources.",
          },
          {
            title: "Human Rights",
            description:
              "Human Rights including child rights; Family Welfare & Child Care; Gender and Development; Senior Citizen Welfare Services; Legal Aid and Legal Education; Social Awareness.",
          },
          {
            title: "Human Development",
            description:
              "Training and Research; Life Skill Development; Communication and Leadership Skill Development.",
          },
        ],
      },
    };
    
  },
   computed: {
    isHome() {
      return this.$route.path == "/keyprogram";
    },
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
.table_nav {
  background: #0d47a1 !important;
  color: white;
}
h4 {
  font-size: 0.8em;
  font-family: Century Gothic; 
  margin: 20px 0;
  font-size: 2em;  
  color: #fefeff;
}

p {
  font-size: 1.05em !important;
  font-family: Century Gothic; 
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.5em !important;
  color: #f2f2f8;
}
</style>
