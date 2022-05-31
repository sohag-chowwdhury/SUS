<template>
  <div>
    <div style="margin: 5% 5% 0% 5%">
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
              Infrastructure
            </h1>
          </div>
        </v-flex>
        <v-flex
          v-for="(i, index) in table"
          :key="index"
          xs12
          sm12
          md12
          lg12
          xl4
          text-center
        >
          <v-card
            v-if="index == 0"
            class="mx-1 background1 rounded-lg py-2"
          >
            <div class="gov" data-aos="fade-right">
              <h4 class="text-uppercase">Animal Health Care</h4>
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
    </div>
    <svg
      style="margin-top: -24%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,64L48,101.3C96,139,192,213,288,256C384,299,480,309,576,282.7C672,256,768,192,864,170.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <svg
      style="margin-top: -2%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,117.3C672,117,768,107,864,133.3C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <div style="margin: -15% 5% 0% 5%">
      <b-row>
        <b-col>
          <v-layout row wrap justify-center>
            <b-card
              style="background: #fafafa; width: 100%"
              class="mt-1 mx-2"
              v-for="(item, index) in heading"
              :key="index"
            >
              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-layout row nowrap justify-center>
                  <v-flex lg2>
                    <div data-aos="flip-left">
                      <p>{{ item.title }}</p>
                    </div>
                  </v-flex>
                  <v-flex lg2>
                    <div data-aos="flip-right">{{ item.base }}</div>
                  </v-flex>
                  <v-flex lg2>
                    <div data-aos="flip-right">{{ item.end }}</div>
                  </v-flex>
                  <v-flex lg3 style="width: 150px">
                    <div data-aos="flip-right">{{ item.change1 }}</div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </b-card>
          </v-layout>
        </b-col>
      </b-row>
    </div>
    <div style="margin: 0% 5% 5% 5%">
      <b-row class="my-3">
        <b-col>
          <v-layout row wrap justify-center>
            <b-card
              style="background: #fafafa; width: 100%"
              class="mt-1 mx-2"
              v-for="(item, index) in table"
              :key="index"
            >
              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-layout row nowrap justify-center>
                  <v-flex lg3>
                    <div data-aos="flip-left">
                      <p style="width: 300px">{{ item.title }}</p>
                    </div>
                  </v-flex>
                  <v-flex lg2>
                    <div data-aos="flip-right">{{ item.base }}</div>
                  </v-flex>
                  <v-flex lg2>
                    <div data-aos="flip-right">{{ item.end }}</div>
                  </v-flex>
                  <v-flex lg2>
                    <div data-aos="flip-right">{{ item.change1 }}</div>
                  </v-flex>
                  <v-flex lg2>
                    <div data-aos="flip-right">{{ item.change2 }}</div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </b-card>
          </v-layout>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("@/assets/img/ST-2.jpg"),

      heading: [
        {
          title: "Particulars",
          base: "Base Line",
          end: "End Line",
          change1: "Change during 4 Yrs. Of the Project Period",
        },
      ],
      table: [
        {
          title: "Average income of the Entrepreneurs per cow per annum (BDT.)",
          base: "28,530",
          end: "50,439",
          change1: "21,909",
          change2: "Increase",
        },
        {
          title: "The number of cows (#)",
          base: "407",
          end: "692",
          change1: "285",
          change2: "Increase",
        },
        {
          title: "The number of cows (#)",
          base: "407",
          end: "692",
          change1: "285",
          change2: "Increase",
        },
        {
          title: "Cow mortality rates (%)",
          base: "10.43",
          end: "2.17",
          change1: "8.26",
          change2: "Decrease",
        },
        {
          title: "Calf mortality rates (%)",
          base: "10.19",
          end: "5.02",
          change1: "5.17",
          change2: "Decrease",
        },
        {
          title: "Full-time employment opportunities (#)",
          base: "139",
          end: "229",
          change1: "90",
          change2: "Increase",
        },
        {
          title: "Full-time employment opportunities (#)",
          base: "139",
          end: "229",
          change1: "90",
          change2: "Increase",
        },
        {
          title: "Wage based employment opportunities (#)",
          base: "350",
          end: "464",
          change1: "114",
          change2: "Increase",
        },
        {
          title: "Daily Milk Production (in Metric Ton)",
          base: "2,700",
          end: "5,100",
          change1: "2,400",
          change2: "Increase",
        },
      ],
    };
  },
};
</script>

<style scoped>
.background2 {
    color: #fff;
    background: linear-gradient(
      -45deg,
      #0099FF,
      #0689e0,
      #066bad,
      #024470,
      #0099FF,
      #25a6fc,
      #0099FF,
      #0099FF,
      #014674
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 30s ease infinite;
    -moz-animation: Gradient 30s ease infinite;
    animation: Gradient 30s ease infinite;
  }
.background1 {
    color: #fff;
    background: linear-gradient(
      -45deg,
      #024470,
      #0099FF,
      #25a6fc,
      #0099FF,
      #0099FF,
      #014674,
      #0099FF,
      #0689e0,
      #066bad
      
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 30s ease infinite;
    -moz-animation: Gradient 30s ease infinite;
    animation: Gradient 30s ease infinite;
  }
.background {
    color: #fff;
    background: linear-gradient(
      -45deg,
       #25a6fc,
      #0099FF,
      #0099FF,
      #014674,
      #0099FF,
      #024470,
      #0099FF,
      #0689e0,
      #066bad
    );
    background-size: 400% 400%;
     -webkit-animation: Gradient 30s ease infinite;
    -moz-animation: Gradient 30s ease infinite;
    animation: Gradient 30s ease infinite;
  }
    @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
.gov h4 {
  font-family: Century Gothic;

  font-size: 1.8em;
  color: #ffffff;
  text-align: center;
  margin: 5% 3% 5% 3%;
}

.gov p {
  font-size: 1.05em !important;
  font-family: Century Gothic;
  font-weight: 500;
  opacity: 1 !important;
  letter-spacing: 1px;
  line-height: 1.5em !important;
  color: #FFFFFF;
  text-align: justify;
  margin: 2% 3% 5% 3%;
}
</style>
