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
            Description of Projects with pictures
          </h1>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12 text-center>
        <v-card
          class="custom-card mx-1 my-3 p-5"
          v-for="(i, index) in data"
          :key="index"
        >
          <div class="gov" data-aos="fade-right">
            <h3>
              <span>{{ index + 1 }}. </span>{{ i.title }}
            </h3>
            <div style="margin: 40px 0 box">
              <v-img
                :src="i.img"
                aspect-ratio="1.7"
                contain
                max-height="300"
                class="imgStyle"
              ></v-img>
            </div>
            <h4 class="mt-2" style="text-align: center">
              {{ i.activity }}
            </h4>

            <div>
              <v-list-item v-for="(i, index) in i.achievement" :key="index">
                <v-list-item-content>
                  <v-card min-height="70" color="blue darken-1" class="mt-0" style="width:100% ;  ">
                    <p>{{index+1}}. {{ i }}</p>
                </v-card>
                
                 
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-card>

        <v-card
          class="custom-card2 mx-1 my-3 p-5"
          v-for="(i, index) in data2"
          :key="index"
        >
          <div class="gov" data-aos="fade-right">
            <h3><span>8. </span>{{ i.title }}</h3>
            <div style="margin: 40px 0 box"></div>
            <h4 class="mt-2" style="text-align: center">
              {{ i.day }}
            </h4>
            <h4 class="mt-2" style="text-align: center">
              {{ i.events }}
            </h4>
            <h4 class="mt-2" style="text-align: center">
              {{ i.printing }}
            </h4>
            <h4 class="mt-2" style="text-align: center">
              {{ i.development }}
            </h4>
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
      data: [
        {
          title: "Credit Program / Projects",
          activity:
            "Providing financial assistance (credit support and savings) to the poor, training support, awareness raising on different issues of social development.",
          achievement: [
            "Amount (Fg. in ‘000) of loan disbursed-BDT.13,81,268",
            "No. of Branch opened - 02 (two)",
          ],
          img: require("@/assets/projects/rally.png"),
        },

        {
          title:
            "Promoting Agricultural Commercialization and Enterprises (PACE) Project",
          activity:
            "Formation of land less, marginal farmers & small farmers groups, imparting training to group members etc.",
          achievement: [
            "Increased average income per cow per annum (BDT) -21,909;",
            "Increased number of cows (#) -285 increased;",
            "Reduced Cow mortality rates (%)-8.26;",
            "Decreased Calf mortality rates (%)-5.17;",
            "Increased Daily Milk Production (in Metric Ton)- 2,400;",
            "Increased Full-time employment opportunities (#)-90",
          ],
          img: require("@/assets/projects/goat.png"),
        },

        {
          title: "Primary Health Care Support Project",
          activity:
            "Providing maternal and child health services; prenatal and antenatal health services; childbirth related health services; Distributing iron tablets & calcium tablets;",
          achievement: [
            "No. of the project beneficiary group receiving general health services: F-1,233; M-330; Boys & girls-419",
            "No. of Non-beneficiary group receiving general health services: F-721; M-173; Boys & girls-215;",
            "No. of the project beneficiary group receiving Pre-Natal Health Care Services: 211;",
            "No. of the Non-beneficiary group receiving Pre-Natal Health Care Services: 178;",
            "No. of the project beneficiary group receiving Post-Natal Health Care Services: 67;",
            "No. of the Non-beneficiary group receiving Post-Natal Health Care Services: 54",
          ],
          img: require("@/assets/projects/books.png"),
        },

        {
          title:
            "Save Urban Children from Hazardous Jobs and Links with Academy (SUCHALA) project",
          activity:
            "Providing allowance for school dress and education materials.",
          achievement: [
            "No. of students receiving education materials and school dress - 32",
            "No. of students successfully completed the Primary Education School Certificate - 09 including 1 student GPA 5",
          ],
          img: require("@/assets/projects/books.png"),
        },

        //11
        {
          title:
            "Housing Loan Project under the Grihayan Tahobil (Fund Management Unit) of Bangladesh Bank",
          activity:
            "Providing housing loan at lower interest rate and in easy terms among the poor community of the rural areas.",
          achievement: [
            "Loan disbursed - BDT. 33,60,000 among 48 Nos. of project beneficiaries.",
          ],
          img: require("@/assets/projects/house loan.png"),
        },

        {
          title: "SUS Central Nursery Development Project",
          activity:
            "Growing seasonal vegetable seedlings and selling at low price; Growing improved saplings of various fruit trees and selling at low price;Growing saplings of various timber trees and selling at low price; Organizing training on vegetable growing, tree plantation and environment protection.",
          achievement: ["No. of HH farmers receiving services -1,575"],
          img: require("@/assets/projects/tree.png"),
        },
        {
          title: "Solid Paper Board Packaging Project",
          activity:
            "Making sweetmeat, sharees (women wear) and foot wear boxes by solid paperboard.",
          achievement: [
            "No. of job created for the women groups under this project - 05",
          ],
          img: require("@/assets/projects/chula.png"),
        },
      ],

      data2: [
        {
          title: "Other Projects and Activities",
          day: "SUS observes National Days like Victory Day (16th December), Independence Day, (26th March), International Mother Language Day (21st February), 1st May international labour day, Bangali New Year’s Day (1st Baisakh) , International Women Day (8th March), National Children’s Day (17th March), Death Anniversary of the Father of the Nation Bangabandhu Sheikh Mujibur Rahman (15th August).",
          events:
            "Organizing Cultural Events: SUS usually organizes a number of cultural events on different occasions and national days.",
          printing:
            "SUS publishes quarterly newsletter (SUS Kothokota), design and develop posters, banners, festoon etc. ",
          development: "SUS develops training course curriculum and modules.",
        },
      ],
    };
  },
};
</script>
<style scoped>
 @media only screen and (max-width: 600px) {
   h1 {
  font-family: Century Gothic;
  margin: 5% 3% 3% 3%;
  font-size: 1.8em;
  font-weight: 500;
  letter-spacing: 2;
  color: #070707;
  font-weight: bold;
  padding: 3%;
  text-align: center;
}
 h3 {
  font-family: Century Gothic;
  font-size: 1.4em;
  color: #ffffff;
  text-align: center;
  margin: 1% 3% 1% 3%;
  font-weight: 600;

}
 h4 {
  font-family: Century Gothic;
  font-size: 1em;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  margin: 1% 3% 1% 3%;
}
 p {
  font-size: 0.9em !important;
  font-family: Century Gothic;
  letter-spacing: 1px;
  line-height: 20px;
  color: #ffffff;
  text-align: justify;
  margin: 0% 1% 0% 1%;
  padding: 2%;
}

.custom-card2 {
  background: rgb(23, 120, 206);
}
.custom-card:nth-child(odd) {
  background: rgb(18, 104, 179);
  border-radius: 20px;
}

.custom-card:nth-child(even) {
  background: rgba(29, 139, 182, 0.904);
  color: black !important;
  border-radius: 20px;
}
 }
@media only screen and (min-width: 601px) {
  h1 {
  font-family: Century Gothic;
  margin: -3% 3% 3% 3%;
  font-size: 1.8em;
  font-weight: 500;
  letter-spacing: 2;
  color: #070707;
  font-weight: bold;
  padding: 3%;
  text-align: center;
}
 h3 {
  font-family: Century Gothic;
  font-size: 1.4em;
  color: #ffffff;
  text-align: center;
  margin: 1% 3% 1% 3%;
  font-weight: 600;

}
 h4 {
  font-family: Century Gothic;
  font-size: 1em;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  margin: 1% 3% 1% 3%;
}
 p {
  font-size: 0.9em !important;
  font-family: Century Gothic;
  letter-spacing: 1px;
  line-height: 20px;
  color: #ffffff;
  text-align: justify;
  margin: 0% 1% 0% 1%;
  padding: 2%;
}

.custom-card2 {
  background: rgb(23, 120, 206);
}
.custom-card:nth-child(odd) {
  background: rgb(18, 104, 179);
  border-radius: 20px;
}

.custom-card:nth-child(even) {
  background: rgba(29, 139, 182, 0.904);
  color: black !important;
  border-radius: 20px;
}
} 

</style>
