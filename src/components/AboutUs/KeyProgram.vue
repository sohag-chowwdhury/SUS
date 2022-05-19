<template>
  <div style="margin-top: 5%">
    <b-container>
      <b-card>
        <div>
          <h4 class="text-uppercase">{{ table.title }}</h4>
          <p>{{ table.description }}</p>
        </div></b-card
      >

      <b-row class="my-3">
        <b-col>
          <b-card>
            <table class="table">
              <thead class="table_nav">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in table.arr" :key="index">
                  <th scope="row">{{ item.title }}</th>
                  <td>
                    {{ item.description }}
                  </td>
                </tr>
              </tbody>
            </table>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
