const visionText=[ ]

<template>
  <div style="margin-top: 2%">
    <b-container>
      <b-card>
        <div>
          <h4 class="text-uppercase">Origin of the organization</h4>
          <p>
            Social Upliftment Society (SUS) is a women-led Non-Political,
            Not-for-Profit and Non-Governmental Organization (NGO) which
            formally started its journey in the development sector of Bangladesh
            in the year of 1990 with an aim of improving the socio-economic
            condition of the disadvantaged and under privileged people with a
            clear focus on women empowerment.
          </p>
          <p>
            In 1988 Bangladesh faced a devastating flood that engulfed two
            thirds of the country and at that time, the surrounding Upazilas of
            Dhaka District went under flood water. In this situation, the
            Executive Director of Social Upliftment Society (SUS), Hamida Begum
            along with some local volunteers came forward with her generous
            heart to reduce the untold sufferings of the flood affected people
            and started for carrying out relief and rehabilitation activities
            among the distressed people. In 1989, SUS started its rehabilitation
            works with a support received from OXFAM-UK for the flood affected
            people. However, after successful completion of relief and
            rehabilitation works during 1988 and 1989, SUS finally got
            registered as an NGO with the Directorate of Social Services in
            1990. This was the formal beginning of SUS in Bangladesh.
          </p>
          <p>
            In 1989, SUS started its rehabilitation works with a support
            received from OXFAM-UK for the flood affected people. However, after
            successful completion of relief and rehabilitation works during 1988
            and 1989, SUS finally got registered as an NGO with the Directorate
            of Social Services in 1990. This was the formal beginning of SUS in
            Bangladesh.
          </p>
        </div></b-card
      >
      <b-row class="my-3">
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
      </b-row></b-container
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.table_nav {
  background: #0d47a1 !important;
  color: white;
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
</style>
