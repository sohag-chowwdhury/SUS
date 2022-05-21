<template>
  <div style="margin: 5% 5% 5% 5%">

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
           SUS Stakeholders / Clients
          </h1>
        </div>
      </v-flex>
     
      <v-flex xs12 sm12 md12 lg12 xl12>
          <v-layout class="mx-1 my-2" row wrap justify-center>
            <v-flex xs12 sm12 md4 lg4 xl4 v-for="(i, indexIn) in table" :key="indexIn" >
                <b-card v-if="indexIn == 0"  style="height:350px; background:#448AFF;">
                   <div data-aos="flip-right">
                     <h3>{{i.title}}</h3>
                      <p>{{i.description}}</p>
                   </div>
                </b-card>
                <b-card v-if="indexIn == 1"  style="height:350px;background:#2979FF;">
                  <div data-aos="zoom-in">
                     <h3>{{i.title}}</h3>
                <p>{{i.description}}</p>
                  </div>
                </b-card>
                <b-card v-if="indexIn == 2"  style="height:350px; background:#2962FF;">
                    <div data-aos="flip-left">
                      <h3>{{i.title}}</h3>
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
      table: [
        {
          title: "Primary Stakeholders",
          description:
            "The primary stakeholders are those who directly benefit from or those people whose problems are addressed by the SUS’s development projects and programs. The primary stakeholders of SUS include (but not limited to): Vulnerable Community people, Slum/Squatter Dwellers, Disadvantaged women, children, elderly people, Youth & Adolescents, Physically challenged people etc.",
        },
        {
          title: "Secondary Stakeholders",
          description:
            "The secondary stakeholders are the intermediary actors or target groups in the process of delivering aid to the primary stakeholders. These secondary stakeholders carry out project activities and provide project services to the primary stakeholders or direct beneficiaries. The secondary stakeholders of SUS include (but not limited to): Project staff, Professional Experts engaged in service delivery process: Community Leaders,Community Volunteers both at the organizational and community levels,Religious leaders (Imams), School teachers, etc.",
        },
        {
          title: "Tertiary Stakeholders",
          description:
            "The tertiary Stakeholders are those external parties who are not directly engaged in aid delivery process, but can influence decisions for a project or program. The tertiary stakeholders of SUS include (but not limited to): Donors, Elected Representatives of LGIs, Representatives of Local Administration and other Govt. and Private officials, CSOs, Alliance & Networks, Representatives of NGOs etc.",
        },
      ],
    };
  },
};
</script>

<style scoped>


h3 {
  font-size: 0.8em;
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
  font-size: .9em;
  line-height: 20px;
  color: hsl(0, 100%, 100%);
}

.innerText{
  font-weight: bold;
}
</style>
