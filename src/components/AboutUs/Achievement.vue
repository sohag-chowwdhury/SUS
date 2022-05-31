<template>
  <div>
    <div class="main-div" >

   
      <v-layout>
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
           Achievement and Milestone of SUS
          </h1>
        </div>
      </v-flex>
      </v-layout>
      
      <b-row class="my-3">
        <b-col>
          <b-card>
            <table class="table">
              <thead class="table_nav">
                <tr>
                  <th scope="col"><div data-aos="fade-right"> SL</div></th>
                  <th scope="col"> <div data-aos="zoom-in"> Titles of Projects & Programs</div></th>
                  <th scope="col"><div data-aos="flip-left"> Implementation Period</div> </th>
                  <th scope="col"><div data-aos="flip-right">Funded by</div></th>
                  <th scope="col"><div data-aos="fade-left">Project Location</div></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in table" :key="index">
                  <th scope="row"><div data-aos="fade-right">{{ item.id }}</div></th>
                  <td scope="row"> <div data-aos="zoom-in">{{ item.title }}</div></td>
                  <td scope="row"><div data-aos="flip-left">{{ item.implementation }}</div> </td>
                  <td scope="row"><div data-aos="flip-right"> {{ item.funded }}</div> </td>
                  <td scope="row"> <div data-aos="fade-left">{{ item.location }} </div></td>
                </tr>
              </tbody>
            </table>
          </b-card>
        </b-col>
      </b-row>
       </div>
      <svg v-if="!isHome" style="margin-top:-25%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,85.3C640,75,800,149,960,197.3C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
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
      table: [
        {
          id: "01",
          title: "Credit Program / Projects",
          implementation: "1992 - On going",
          funded: "PKSF",
          location: "SUS Working areas",
        },
        {
          id: "02",
          title:
            "Enhancing Resources and Increasing Capacities of Poor Households towards Elimination of their Poverty (ENRICH)",
          implementation: "2014 - On going",
          funded: "PKSF",
          location: "Shibpur, Narsingdi",
        },
        {
          id: "03",
          title:
            "Promoting Agricultural Commercialization and Enterprises (PACE)",
          implementation: "2016 - Apr 2020",
          funded: "PKSF",
          location: "Savar, Singair & Dhamrai",
        },
        {
          id: "04",
          title:
            "Uplifting the Quality of the Lives of the Elderly People Program",
          implementation: "2018 - On going",
          funded: "PKSF",
          location: "Shibpur, Narsingdi",
        },
        {
          id: "05",
          title:
            "Social Development Program under “Social Advocacy and Knowledge Dissemination Unit” of PKSF",
          implementation: "2018 - On going",
          funded: "PKSF",
          location: "SUS Working areas",
        },
        {
          id: "06",
          title: "SUS Health Care Program",
          implementation: "2015 - On going",
          funded: "SUS Own Fund",
          location: "Savar, Dhaka",
        },
        {
          id: "07",
          title: "Primary Health Care Support Project",
          implementation: "2011 - On going",
          funded: "PKSF",
          location: "Mymensingh Sadar",
        },
        {
          id: "08",
          title: "Distressed Children Training & Rehabilitation Center (DCTRC)",
          implementation: "2014 - On going",
          funded: "SUS Own Fund",
          location: "Savar",
        },
        {
          id: "09",
          title:
            "Save Urban Children from Hazardous Jobs and Links with Academy (SUCHALA) project",
          implementation: "2011 - On going",
          funded: "Anukul Foundation",
          location: "Savar & Mymensingh Sadars",
        },
        {
          id: "10",
          title: "Scholarship Program",
          implementation: "2011 - On going",
          funded: "PKSF & SUS",
          location: "SUS Working areas",
        },
        {
          id: "11",
          title: "Housing Loan Project",
          implementation: "2010 - On going",
          funded: "PKSF",
          location: "SUS Working areas",
        },
        {
          id: "12",
          title: "Vulnerable Group Development (VGD) Project",
          implementation: "2019 - On going",
          funded: "SSNP of MoWCA",
          location: "B.Baria",
        },
        {
          id: "13",
          title: "SUS Central Nursery Development",
          implementation: "2000  - On going",
          funded: "SUS Own Fund",
          location: "Savar, Dhaka",
        },
        {
          id: "14",
          title: "Solid Paper Board Packaging Project",
          implementation: "1998 - On going",
          funded: "SUS Own Fund",
          location: "Savar, Dhaka",
        },
        {
          id: "15",
          title: "Other Projects and Activities",
          implementation: "On going",
          funded: "Own Fund, PKSF",
          location: "SUS Working areas",
        },
      ],
    };
  },
   computed: {
    isHome() {
      return this.$route.path == "/achievement";
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .main-div {
    margin: 15% 5% 5% 5%;
  }
  .table_nav {
  background: #0d47a1 !important;
  color: white;
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
h4 {
  font-size: 0.8em;
  font-family: Century Gothic;
  opacity: 0.99;
  margin: 20px 0;
  font-size: 2em;
  opacity: 0.8;
  color: #0004fc;
}

p {
  font-size: 1em !important;
  font-family: Century Gothic;
  opacity: 0.99;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #3e3e4a;
}
}
@media only screen and (min-width: 601px) {
   .main-div {
    margin: -15% 5% 5% 5%;
  }
  .table_nav {
  background: #0d47a1 !important;
  color: white;
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
h4 {
  font-size: 0.8em;
  font-family: Century Gothic;
  opacity: 0.99;
  margin: 20px 0;
  font-size: 2em;
  opacity: 0.8;
  color: #0004fc;
}

p {
  font-size: 1em !important;
  font-family: Century Gothic;
  opacity: 0.99;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #3e3e4a;
}
th {
  font-size: 1.05em !important;
}
td {
    font-size: 1.05em !important;

}
}

</style>
