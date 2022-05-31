
<template>

  <div style="margin-top: 4%; margin: 5% % 0% 0%">
    <div
      class="header"
      :style="{
        'background-image':
          'url(' + require('@/assets/img/E-13.jpg') + ')',
      }"
    >
      <v-layout
        v-on:mouseover="mouseover"
        v-on:mouseleave="mouseleave"
        class="overly"
        row
        wrap
        justify-center
      >
        <v-flex xs11 sm11 md11 lg11 text-center>
          <div c style="margin:5% 0% 0% 0%"  class="origin" data-aos="fade-up">
            <h2>
              Origin of the organization
            </h2>
          </div>
          <div class="origin"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <p >
              Social Upliftment Society (SUS) is a women-led Non-Political,
              Not-for-Profit and Non-Governmental Organization (NGO) which
              formally started its journey in the development sector of
              Bangladesh in the year of 1990 with an aim of improving the
              socio-economic condition of the disadvantaged and under privileged
              people with a clear focus on women empowerment.
            </p>
           </div>
            <div class="origin" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
            <p>
              In 1988 Bangladesh faced a devastating flood that engulfed two
              thirds of the country and at that time, the surrounding Upazilas
              of Dhaka District went under flood water. In this situation, the
              Executive Director of Social Upliftment Society (SUS), Hamida
              Begum along with some local volunteers came forward with her
              generous heart to reduce the untold sufferings of the flood
              affected people and started for carrying out relief and
              rehabilitation activities among the distressed people. In 1989,
              SUS started its rehabilitation works with a support received from
              OXFAM-UK for the flood affected people. However, after successful
              completion of relief and rehabilitation works during 1988 and
              1989, SUS finally got registered as an NGO with the Directorate of
              Social Services in 1990. This was the formal beginning of SUS in
              Bangladesh.
            </p>
            </div>
            <div class="origin" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <p>
              In 1989, SUS started its rehabilitation works with a support
              received from OXFAM-UK for the flood affected people. However,
              after successful completion of relief and rehabilitation works
              during 1988 and 1989, SUS finally got registered as an NGO with
              the Directorate of Social Services in 1990. This was the formal
              beginning of SUS in Bangladesh.
            </p>
            </div>
            
        </v-flex>
      </v-layout>
    </div>
    <svg
      style="margin-top: -5%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,197.3C560,235,640,277,720,288C800,299,880,277,960,256C1040,235,1120,213,1200,218.7C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
    <!-- <b-row class="my-3">
        <b-col>
          <b-card>
            <table class="table">
              <thead class="table_nav">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in table" :key="index">
                  <th scope="row">{{ item.title }}</th>
                  <td>
                    {{ item.description }}
                    <span v-if="(item.array = true)">
                      <ul>
                        <li v-for="(i, index) in item.arr" :key="index + '6'">
                          {{ i }}
                        </li>
                      </ul>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-card>
        </b-col>
      </b-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/img/slider1.jpg"),
      table: [
        {
          title: "Name",
          description: "Social Upliftment Society (SUS)",
          array: false,
        },
        {
          title: "Address",
          description:
            "Head Office: C-25, Jaleswar, Shimultala, Savar, Dhaka-1340",
          array: false,
        },
        {
          title: "Email & Website",
          description: "Email: sushelp360@gmail.com; www.sus-bd.org",
          array: false,
        },
        {
          title: "Estd. Year",
          description: "1990",
          array: false,
        },
        {
          title: "Contact Person",
          description:
            "Hamida Begum, Executive Director Cell: 01678678888, 01715315026; Email: sushelp360@gmail.com",
          array: false,
        },
        {
          title: "Legal Status",
          description:
            "Social Upliftment Society (SUS) is registered as a Non-Governmental Organization (NGO). The particulars of registration are as below:",
          array: true,
          arr: [
            "	NGO Affairs Bureau: No. 1094; Date: 02/11/1996",
            "Microcredit Regulatory Authority (MRA): No. 00161-00209-00014; Date: 05/09/2007",
            "Department of Social Services: No. Dha-02411; Date: 09/05/1990",
            "Directorate of Family Planning: No. 73/95; Date: 26/09/1995",
            "Directorate of Women Affairs: No. 39/91; Date: 17/09/1991",
            "Directorate of Youth Development: No. 97/94; Date: 21/07/1992",
          ],
        },
        {
          title: "Sources of Finance",
          description: "",
          array: true,
          arr: [
            "Loan: Borrowings from the Palli Karma Sahayak Foundation (PKSF) at a concessional interest rate, Anukul Foundation, Bangladesh Bank and other Commercial Banks.",
            "Clients Savings: Savings from clients of the microfinance program.",
            "Equity: Use of equity (excess of income over expenditure).",
            "Grants and Donation: Grants and donations from Government and Private institutions and individuals as well.",
          ],
        },
        {
          title: "SUS working areas (as of 30th June 2020)",
          description:
            "SUS is implementing its program and projects in six Districts and eleven Upazilas: Dhaka (Savar, Dhamrai, Keraniganj), Gazipur (Sadar, Kaliakoir), Manikganj (Singair), Narsingdi (Sadar, Shibpur), Mymensingh (Sadar) and Lakshmipur (Sadar, Kamolnagar).",
        },
        {
          title: "No. of Branches",
          description: "25 (as of 30th June 2020)",
        },
        {
          title: "No. of Staff",
          description: "Total-252 (Regular Staff-231; Project Staff- 21)",
        },
        {
          title: "No. of clients",
          description: "35,286 (as of 30th June 2020)",
        },
        {
          title: "Loan disbursed",
          description:
            "Tk. 1,069,44,21,000 (Since inception to 30th June 2020)",
        },
        {
          title: "Loan Recovery",
          description: "Tk. 972,06,17,079 (Since inception to 30th June 2020)",
        },
        {
          title: "Loan Portfolio",
          description: "Tk. 97,38,03,921 (as of 30th June 2020)",
        },
        {
          title: "Own physical resources",
          description:
            "Head Office at its own land, a pool of vehicles including car, micro bus and motor cycles, a Veterinary Laboratory, a Milk Chilling Plant, a well-equipped Training Centre, a Learning Centre for the distressed children in the name of DCTRC, Branch offices at its own land etc.",
        },
        {
          title: "Departments and Units",
          description:
            "SUS is running a number of departments and units assigned to perform in the areas of: (a) Microfinance Program (MFP), (b) Finance and Accounts, (c) Human Resource Management and Administration, (d) Information and Communication Technology (ICT), (e) Internal Audit and Monitoring, (f) Organizational Development, Research, Training and Fundraising and (g) Organizational Governance.",
        },
        {
          title: "Policy and Plan",
          description:
            "SUS is running with a number of policies. These are: Human Resource Management Policy Manual, Financial Policy, Administrative Policy, Procurement Policy, Internal Audit Management Policy Manual, Gender Policy, Vehicle Usage Policy, Child Protection Policy, Annual Budget, Long-term Financial Projection, Project Implementation Plan etc.",
        },
        {
          title: "Key Programmatic focus",
          description:
            "SUS is implementing its projects and programs in various programmatic areas such as:",
          array: true,
          arr: [
            "Financial Services: Income Generating Activities (IGAs); Micro Enterprise (ME) and Small and Medium Enterprise (SME); Savings and insurance services; Asset Building including housing; Beggar Rehabilitation",
            "Health: Basic Health Care and Nutrition Education; Disability and Development; Free health camp.",
            "Agriculture: Fisheries, Poultry and Livestock; Milk Production and Marketing; Tree Plantation, Horticulture, Nursery and Homestead Gardening; Integrated Agricultural Interventions; Action Research in Agricultural Fields.",
            "Disaster and Relief: Disaster Risk Reduction and Climate Change (DRR&CC); Relief and Rehabilitation; Emergency Humanitarian Response.",
            "Education: Non-Formal Primary Education (NFPE); Scholarship for the poor students",
            "Women Empowerment: Social, Economic and Political Empowerment of Women; Improvement of Lives and Livelihood.",
            "Social Safety Net Program (SSNP): Vulnerable Group Development (VGD); Vulnerable Group Feeding (VGF).",
            "Water, Sanitation and Hygiene (WASH): Safe Water and Sanitation; Water Hygiene.",
            "Environment: Environmental Protection; Conservation of Natural Resources.",
            "Human Rights: Human Rights including child rights; Family Welfare & Child Care; Gender and Development; Senior Citizen Welfare Services; Legal Aid and Legal Education; Social Awareness.",
            "Human Development: Training and Research; Life Skill Development; Communication and Leadership Skill Development.",
          ],
        },
        {
          title: "Linkage and Network",
          description: "",
          array: true,
          arr: [
            "Excellent working relationship/linkage has been developed with local level GoB service providers like DAE, DLS, and Department of Mass Education, Department of Health and Family Welfare, Department of Social welfare, Department of Woman affairs etc.",
            "SUS Linkages and Network with other organizations are with: Micro-Credit, Summit, Washington; PKSF-Net Work; InM; ADAB; NGO-Forum; Anukul Foundation, MDF; Credit Development Forum (CDF); Traffic Watch Bangladesh(TWB); WBB Trust.",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>

@media only screen and (max-width: 600px) {
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
  .header {
    height: 750px;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .hideLg {
    display: none !important;
  }
 
.overly {
    background: rgba(29, 35, 88, 0.8);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
.table_nav {
  background: #0d47a1 !important;
  color: white;
}
.origin h2 {
  font-size: 1.4em !important;
  font-family: Century Gothic; 
  margin: 15% 5% 5% 5% ;
  font-size: 2em;
  color: #ffffff;
  text-align: center;
}
.origin p {
  font-size: .75em !important;
  font-family: Century Gothic; 
  margin: 1% 2% 2%  2%;
  text-align: start;
 
   color: #ffffff;
  
}
h4 {
  font-size: 0.8em;
  font-family: Century Gothic;
  
  margin: 20px 0;
  font-size: 1.2em !important;
  color: #ffffff;
  text-align: center;
}

p {
  font-size: 1.05em !important;
  font-family: Century Gothic;
  opacity: 0.99;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #0f0f0f;
   text-align: center;
}
}
@media only screen and (min-width: 601px) {
  .header {
    height: 600px;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .hideLg {
    display: none !important;
  }
 
.overly {
    background: rgba(29, 35, 88, 0.8);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
.table_nav {
  background: #0d47a1 !important;
  color: white;
}
.origin h2 {
  font-size: 2.4em;
  font-family: Century Gothic; 
  margin: 20px 0;
  font-size: 2em;
  color: #ffffff;
  text-align: center;
}
.origin p {
  font-size: 1.2em;
  font-family: Century Gothic; 
  margin: 30px 0;
  text-align: start;
  text-align: justify;
   color: #ffffff;
  
}
h4 {
  font-size: 0.8em;
  font-family: Century Gothic;
  
  margin: 20px 0;
  font-size: 2em;
  color: #ffffff;
  text-align: center;
}

p {
  font-size: 1.05em !important;
  font-family: Century Gothic;
  opacity: 0.99;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.5em;
  color: #0f0f0f;
   text-align: justify;
}
}
 
</style>
