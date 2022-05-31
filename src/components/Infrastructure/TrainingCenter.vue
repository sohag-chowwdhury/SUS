<template>
  <div>
    <div style="margin: 5% 5% 0% 5%">
      <v-layout row wrap justify-center>
          <v-flex class="header_text" xs10 sm10 md10 lg10>
            <div data-aos="fade-right">
              <h1 style="text-align: center !important">
                SUS Primary Health Care Center
              </h1>
            </div>
          </v-flex>
        </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md12 lg12 xl4 text-center>
          <v-card style="background:#0099FF" class="mx-1 py-2">
            <div class="gov" data-aos="fade-right">
             
              <p class="mt-2">
                SUS has implemented the project titled as “Promoting
                Agricultural Commercialization and Enterprises (PACE)” Project
                in Savar Upazila under Dhaka district, Singair Upazila under
                Manikganj district and Dhamrai Upazila under Dhaka district. The
                target beneficiaries under this project are: Micro entrepreneurs
                who are borrowers of ME loan program, moderately poor and
                extremely poor persons.<br /><br />The project targets the
                marginal and small farmers involved in livestock production and
                non-farm micro entrepreneurs. This project is implemented with
                financial assistance of International Fund for Agricultural
                Development (IFAD) through PKSF. The goal of this PACE project
                is to increase income and create employment opportunities among
                the dairy entrepreneurs through more milk production and
                marketing. <br /><br />Some specific objectives of this project
                are to: increase the number of cows in the project area and
                establish the area as a cluster of improved breeds of cows;
                enhance the skills of entrepreneurs in raising cows under
                improved management; develop deep breeds of improved breeds
                through expansion of artificial insemination services;
                commercialize medical services to maintain the sustainability
                and continuity of the project; raise the mortality rate of
                cattle; increase the average income of entrepreneurs; create
                employment opportunity. <br /><br />
                key outputs are: Entrepreneurs will increase their skills in
                raising cows with improved management; the lactation
                period/milking period of cows will be increased; the propagation
                period / Calving interval will be decreased; the number of cross
                cows will be increased. Under this project some results
                indicators are: the family wealth of the project members will
                increase; the average income of entrepreneurs will increase; the
                number of cows will increase; very poor farmers will get worm
                medicine free of cost; cow mortality will be below 2% and calf
                mortality will be below 5%; the potential milk production will
                be 4500-6000 metric tons; 60-70% of the members will have
                full-time employment opportunities and after three years, 30-40%
                wage based employment opportunities will be created. Some major
                activities are: formation of Land less, marginal farmers & small
                farmers groups, imparting training to all group members etc. The
                following table shows the comparative progress during the
                project period.
              </p>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
      <div style="margin: 2% 0% 10% 0%">
        <table style="width: 100%; margin-top: 100px; z-index: 3">
          <tr>
            <th>Particulars</th>
            <th>Plan</th>
            <th colspan="2">No. of Actual</th>
          </tr>
          <tr>
            <td></td>
            <th>#</th>
            <th>#</th>
            <th>%</th>
          </tr>
          <tr v-for="(i, index) in data" :key="index">
            <td>{{ i.particular }}</td>
            <td>{{ i.Plan }}</td>
            <td>{{ i.Actual1 }}</td>
            <td>{{ i.Actual2 }}</td>
          </tr>
        </table>
      </div>

      <v-layout row wrap justify-center style="margin: 0% 0% 0% 0%">
        <v-flex xs12 sm12 md12 lg12 xl4 text-center>
          <v-card style="background:#0099FF"  class="mx-1 py-2">
            <div class="gov" data-aos="fade-right">
              <p class="mt-2">
                Primary Health Care Support Project: SUS is implementing the
                Primary Health Care Support Project with the financial
                assistance of Anukul Foundation among the poor families in
                Mymensingh Sadar Upazila under Mymensingh district.<br /><br />
                The goal of this project is to ensure provision for primary
                health care services to the poor families at free of cost. The
                major activities of this project are to: provide maternal and
                child health services; prenatal and antenatal health services;
                childbirth related health services; distribute free iron tablets
                and calcium tablets to pregnant women; advise adolescent boy and
                girls about adolescence; organize courtyard meeting on community
                health awareness; test diabetes, urine and pregnancy etc. The
                progress against the plan during this financial year is shown in
                the table below.
              </p>
            </div>
          </v-card>
        </v-flex>
      </v-layout>

      <div style="margin: 0% 0% 10% 0%; ">
        <table style="width: 100%; margin-top: 100px; z-index: 3;  overflow: auto; ">
          <tr>
            <th>Particulars</th>
            <th colspan="3">Plan</th>
            <th colspan="3">Actual</th>
          </tr>
          <tr>
            <td></td>
            <th>Project Beneficiary</th>
            <th>Non Beneficiary</th>
            <th>Total</th>
            <th>Project Beneficiary</th>
            <th>Non Beneficiary</th>
            <th>Total</th>
          </tr>
          <tr v-for="(i, index) in data2" :key="index">
            <td>{{ i.particular }}</td>
            <td>{{ i.a }}</td>
            <td>{{ i.b }}</td>
            <td>{{ i.c }}</td>
            <td>{{ i.d }}</td>
            <td>{{ i.e }}</td>
            <td>{{ i.f }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("@/assets/img/ST-2.jpg"),

      data: [
        {
          particular: "Female receiving general health care services",
          Plan: "4,500",
          Actual1: "3,460",
          Actual2: "77",
        },
        {
          particular: "Male receiving general health care services",
          Plan: "700",
          Actual1: "577",
          Actual2: "82",
        },
        {
          particular: "Child and Adolescents receiving health care services",
          Plan: "1,000",
          Actual1: "722",
          Actual2: "72",
        },
        {
          particular: "Recipients of Pre-Natal Health Care Servicess",
          Plan: "200",
          Actual1: "148",
          Actual2: "74",
        },
        {
          particular: "Recipients of Post-Natal Health Care Services",
          Plan: "100",
          Actual1: "73",
          Actual2: "73",
        },
      ],

      data2: [
        {
          particular: "Recipients of Pre-Natal Health Care Services",
          a: 300,
          b: 250,
          c: 550,
          d: 211,
          e: 178,
          f: 389,
        },
        {
          particular: "Recipients of Post-Natal Health Care Services",
          a: 100,
          b: 75,
          c: 175,
          d: 67,
          e: 54,
          f: 121,
        },
        {
          particular: "Female receiving general health care services",
          a: 1500,
          b: 1000,
          c: 2500,
          d: 1233,
          e: 721,
          f: 503,
        },
        {
          particular: "Male receiving general health care services",
          a: 500,
          b: 300,
          c: 800,
          d: 330,
          e: 173,
          f: 503,
        },
        {
          particular: "Child and Adolescents receiving health care services",
          a: 500,
          b: 300,
          c: 800,
          d: 419,
          e: 215,
          f: 634,
        },
        {
          particular: "Distribution of iron tablets",
          a: 500,
          b: 300,
          c: 800,
          d: 419,
          e: 215,
          f: 634,
        },
      ],
    };
  },
};
</script>

<style scoped>
.gov h4 {
  font-family: Century Gothic;

  font-size: 1.8em;
  color: #ffffff;
  text-align: center;
  margin: 5% 3% 5% 3%;
}

.gov p {
  font-size: 0.9em !important;
  font-family: Century Gothic;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #fdfdff;
  text-align: justify;
  margin: 5% 3% 5% 3%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #eec5c5;
}
</style>
