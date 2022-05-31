<template>
  <div class="main-div">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md10 lg10 xl10 v-for="(item, i) in blog" :key="i">
        <v-card class="mx-1">
          <v-layout row wrap justify-center>
            <v-flex v-for="(l, m) in item.img" :key="m" xs5 sm5 md5 lg5 xl5>
              <v-img class="heiigth-div" :src="l"></v-img>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm12 md12 lg12 x12>
              <h3>{{ item.title }}</h3>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 x12>
              <h4>{{ item.subTitle }}</h4>
            </v-flex>
          </v-layout>
          <v-layout
            row
            wrap
            justify-center
          >
            <v-flex
              v-for="(i, k) in item.listArr"
              :key="k"
              xs12
              sm12
              md12
              lg12
              x12
            >
              <p style="width: 94%; margin-left: 3%">
                {{ i }}
              </p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      images: [
        require("@/assets/img/01.jpg"),
        require("@/assets/img/02.jpg"),
        require("@/assets/img/03.jpg"),
        require("@/assets/img/04.jpg"),
        require("@/assets/img/05.jpg"),
        require("@/assets/img/06.jpg"),
        require("@/assets/img/07.jpg"),
        require("@/assets/img/08.jpg"),
      ],
      index: null,
      cycle: true,

      blog: [
         {
          title: "SUS initiatives in COVID-19",
          subTitle:
            "Social Upliftment Society (SUS) has taken a number of initiatives to face the COVID-19 situation and also fight the battle accordingly. SUS initiatives are briefly described below.",
          descriptionStatus: false,
          list: true,
          img: [
            require("@/assets/img/New3.jpg"),
            require("@/assets/img/News4.jpg"),
          ],
          listArr: [
            "Sanitation services: At the very beginning of the COVID-19 crisis, Social Upliftment Society (SUS) provided sanitation services i.e. supply of hand sanitizers, soaps and surgical masks to all of its staff members so that they could protect themselves while discharging their duties in and outside the offices. Here, it is noted that SUS prepared these hand sanitizers using its own laboratory which is situated at Mushorikhola, Vakurta Union of Savar Upazila under Dhaka district. Apart from our staff members, we also supplied these SUS made hand sanitizers to the common people in our working areas in Savar, Dhaka. During this situation, around 2,000 Nos. of people came under the said sanitation services",

            "Setting hand washing corners: As a part of preventive measures for reducing the spread of the coronavirus, we have already set a number of hand washing corners with soaps in our project areas. Along with setting hand washing corners, all the concerned staff members working at the branch levels were advised to wash hands at different times such as: after blowing nose, coughing or sneezing; after visiting groups, markets and other public places; after touching money; before and after eating; when hands are visibly dirty etc.",

            "Distribution of Food Package and Seeds: During this COVID-19 situation, we distributed food package consisting of rice, pulses, oil, salt, potato, sugar, onion and vermicelli (Semai in Bengali) etc. among the 1,100 nos. of distressed people. We also distributed seeds of various vegetables, fruits and other food grains etc. among the 1,100 nos. of local farmers in the SUS working areas. ",

            "Sharing life-saving information: As a part of building mass awareness among the common people about fighting the COVID-19 crisis, life-saving information is being shared among the people in the SUS working areas. In this case, we prepared colourful, pictorial and message bearing leaflets designed by our own staff members and circulated accordingly among the mass people in the SUS working areas. We also hanged up banners containing precautionary message regarding COVID-19 at the crowded places. ",

            "Dissemination of clear instruction to the field staff: Written instructions were passed to the field staff clearly specifying precautionary measures to be taken for the virus. In this case, we shared a complete guideline supplied by the PKSF among the SUS employees",

            "Constant communication: From the senior members of the organization, constant communication is being done to keep staff motivated. Not only that our field staff members are also communicating with the beneficiary groups of SUS so that they do not feel isolated and think that SUS is with them. Further, the field situation is being continuously monitored by means of gathering all relevant information and using data software installed in each program office of the organization",

            "Coordination with other projects: As per guidance of the SUS management, the field level staff members are playing an active role in coordinating with other projects of SUS to amplify and strengthen the organization’s drive towards overall response",

            "Revision of action plans: Considering the situation, we have already brought some changes and adjustment to our work plans especially in the SUS Loan Program and have revised the plans accordingly to cope with the prevailing situation.",

            "Revision of action plans: Considering the situation, we have already brought some changes and adjustment to our work plans especially in the SUS Loan Program and have revised the plans accordingly to cope with the prevailing situation.",

            "Halting field operations: We also halted all field activities concerning loan and savings collection from 24 March 2020 to 30 April 2020, which was later extended up to 30 May 2020. ",

            "Stoppage of loan classification: Immediately after receiving announcement / decree issued by the Microcredit Regulatory Authority (MRA) in Bangladesh, our organization has stopped classification of loans. This means that the default clients will not be classified as defaulters and their borrower status will not change. The borrowers will not have to pay any loan installment for the period up to September 2020. But they can pay installments only if they want and in that case, there will be no obligation and restriction.",

            "Opportunities for savings withdrawal: As our loan disbursement was temporarily closed for this situation, we kept our branches open so that clients could withdraw their savings.",

            "Donation from salary: The employees of Social Upliftment Society (SUS) have already donated their one-day salary for the people who have been suffering during the nationwide shutdown due to the coronavirus pandemic and to the fight against the COVID-19",

            "Continuation of paying staff salaries: To keep the morale of all employees of the organization as strong as we expect, the organization could keep continuation of payment of staff salaries even in the condition of generating a low cash inflow in the program implementation.",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
 .heiigth-div{
     height: 245px;
 }
 .main-div{
     margin:17% 5% 5% 5%;
 }
  h1 {
    font-size: 2em;
    font-family: Century Gothic;
    letter-spacing: 1px;
    color: #f6f6fd;
    opacity: 1;
    margin: 10% 5% 5% 5%;
    font-weight: 800;
    text-align: center;
  }
  h3 {
    font-family: Century Gothic;
    margin: 3% 3% 3% 3%;
    font-size: 1.3em;
    font-weight: 600;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 3px solid #686869;
    margin-top: 1px !important;
  }
  h4 {
    font-family: Century Gothic;
    margin: 0% 3% 3% 3%;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
  p {
    font-family: Century Gothic;
    margin: 0% 3% 0% 3%;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
}
@media only screen and (min-width: 601px) {
    .main-div{
     margin:8% 5% 5% 5%;
 }
     .heiigth-div{
     height: 445px;
 }
  h1 {
    font-size: 2em;
    font-family: Century Gothic;
    letter-spacing: 1px;
    color: #f6f6fd;
    opacity: 1;
    margin: 0% 5% 5% 5%;
    font-weight: 800;
    text-align: center;
  }
  h3 {
    font-family: Century Gothic;
    margin: 3% 3% 3% 3%;
    font-size: 1.3em;
    font-weight: 600;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 3px solid #686869;
    margin-top: 1px !important;
  }
  h4 {
    font-family: Century Gothic;
    margin: 0% 3% 3% 3%;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
  }
  p {
    font-family: Century Gothic;
    margin: 0% 3% 0% 3%;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0;
    color: #070707;
    padding: 3%;
    overflow: hidden;
  }
}
</style>