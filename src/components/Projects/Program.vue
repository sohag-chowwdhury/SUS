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
            Description of Programs with pictures
          </h1>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12 text-center>
        <v-card
          class="custom-card mx-1 my-3 p-5"
          v-for="(i, index) in data"
          :key="index"
        >
          <div  data-aos="fade-right">
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
                <v-card min-height="70" color="blue darken-1" class="mt-1" style="width:100% ; ">
                    <p>{{index+1}}. {{ i }}</p>
                </v-card>
                
              </v-list-item>
            </div>
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
          title:
            "Enhancing Resources and Increasing Capacities of Poor Households towards Elimination of their Poverty (ENRICH) Program",
          activity:
            "Organizing static clinics, satellite clinics, general health campaign, special eye camp and cataract surgery in special eye camp, providing health care services etc.; rehabilitating beggars with financial assistance; arranging education assistance centers (Boikalik Sikhkha Kendra); Providing training on ‘Self-realization and Leadership Development’ to the targeted youth; providing training on IGAs to the targeted beneficiaries.",
          achievement: [
            "Recipients of services in special eye camps - 327;",
            "Recipient of services in the General Health Campaign - 381",
            "No. of Parents meeting organized - 473.",
            "A total of 08 (Eight) Nos. of beggars were rehabilitated under this program.",
            "36 No. of Youth Coordination Meeting was organized.",
            "No. of Bandhu Chula’ (environment-friendly cooking stoves) provided to the project beneficiaries-02;",
            "No. of Solar Home System provided to the project beneficiaries-01.",
          ],
          img: require("@/assets/projects/eye2.png"),
        },

        {
          title:
            "Uplifting the Quality of the Lives of the Elderly People Program",
          activity:
            "Providing old age allowance, health care services and assistive materials.",
          achievement: [
            "Amount of old age allowance provided BDT 6,00,000 among 100 Elderly people;",
            "Distribution of assistive materials to Elderly people i.e. Walking sticks-30; Wheel chairs-02 and Blankets-100",
          ],
          img: require("@/assets/projects/wheel chair.png"),
        },
        {
          title:
            "Social Development Program under “Social Advocacy and Knowledge Dissemination Unit” of PKSF",
          activity:
            "Training & workshop on “Social Development & Accountability”, “Prevention of Child Marriage & Child Abuse”, Advocacy Meeting etc.",
          achievement: [
            "Workshop on “Social Development and Accountability” among the UP Members -1 event with 35 participants",
            "Workshop on “Prevention of Child Marriage and Child Abuse” - 1 event with 40 participants",
            "Awareness Session on “Demerits of Child Marriage” - 20 events with 1000 participants",
            "Operation of Adolescent Girls Club - 09",
          ],
          img: require("@/assets/projects/sayno.png"),
        },
        {
          title: "SUS Health Care Program",
          activity:
            "Providing reproductive health care, maternal health care, child health care, limited curative care, training on BCC and other reproductive health care services to the adolescent and women, encouraging mothers to get all the vaccines within a year after the baby is born; providing training on health awareness, Observance of National Immunization Day etc",
          achievement: [
            "No. of general health care service recipients: F-3,460; M-577; Child and Adolescents-722",
            "No. of Pre-Natal Health Care Services-148",
            "No. of Post-Natal Health Care Services-73",
          ],
          img: require("@/assets/projects/vaccine.png"),
        },

        {
          title:
            "Distressed Children Training and Rehabilitation Center (DCTRC)",
          activity:
            "Participation in the day observance, social activities, sports and other cultural functions; providing free school dress, warm cloths, blanket, educational materials, free morning snacks; participation in debating, recitation, storytelling; exchanging views among teachers and guardians.",
          achievement: [
            "No. of students get admitted into the DCTRC - 67 (Boys-21; Girls-46)",
            "No. of students completed the primary education - 04 (All are Girls)",
          ],
          img: require("@/assets/projects/blanket.png"),
        },
        {
          title: "SUS Scholarship Program",
          activity:
            "Providing scholarship to the students of the poor families and the families of special profession.",
          achievement: [
            "A total of BDT. 5,65,000 was provided as scholarship among 48 students.",
          ],
          img: require("@/assets/projects/scholarship.png"),
        },

        {
          title: "Vulnerable Group Development (VGD)",
          activity:
            "Providing training on life skill development and IGA for the targeted beneficiaries.",
          achievement: ["No. of VGD beneficiaries - 2,327."],
          img: require("@/assets/projects/dairy2.png"),
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
  margin: 0% 3% 3% 3%;
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
