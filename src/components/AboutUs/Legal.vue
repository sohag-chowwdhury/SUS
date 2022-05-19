<template>
  <div style="margin-top: 5%">
    <b-container>
      <b-card>
        <div>
          <h4 class="text-uppercase">{{ table.title }}</h4>
          <p>{{table.description}}</p>
          <p>
           
              <ul>
                <li v-for="(i, index) in table.arr" :key="index + '6'">
                  {{ i }}
                </li>
              </ul>
        
          </p>
        </div></b-card
      >
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {
        title: "Legal Status",
        description:
          "Social Upliftment Society (SUS) is registered as a Non-Governmental Organization (NGO). The particulars of registration are as below:",
        arr: [
          "	NGO Affairs Bureau: No. 1094; Date: 02/11/1996",
          "Microcredit Regulatory Authority (MRA): No. 00161-00209-00014; Date: 05/09/2007",
          "Department of Social Services: No. Dha-02411; Date: 09/05/1990",
          "Directorate of Family Planning: No. 73/95; Date: 26/09/1995",
          "Directorate of Women Affairs: No. 39/91; Date: 17/09/1991",
          "Directorate of Youth Development: No. 97/94; Date: 21/07/1992",
        ],
      },
    };
  },
};
</script>


<style scoped>


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
