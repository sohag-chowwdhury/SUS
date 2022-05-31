<template>
  <div style="margin: 5% 5% 10% 5%">
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
            {{ data.title }}
          </h1>
        </div>
      </v-flex>
      <v-flex
        v-for="(i, index) in data.arr"
        :key="index"
        xs12
        sm12
        md12
        lg12
        xl12
        text-center
      >
        <v-card color="blue lighten-4" class="mx-1">
          <div class="gov" data-aos="fade-right">
            <p class="mt-2">{{ i }}</p>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="card-img">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="img" alt="Avatar" style="width: 400px; height: 400px" />
          </div>
          <div class="flip-card-back">
            <p style="color: white; font-size: 50px">{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
    <table style="width: 100%; margin-top: 100px; z-index: 3">
      <tr>
        <th rowspan="2">Year</th>
        <th colspan="3">No. of students admitted into DCTRC</th>
        <th colspan="3">No. of students passed Class-V</th>
      </tr>
      <tr>
        <td>Boys</td>
        <td>Girls</td>
        <td>Total</td>
        <td>Boys</td>
        <td>Girls</td>
        <td>Total</td>
      </tr>
      <tr v-for="(i, index) in DRTC" :key="index">
        <td>{{ i.year }}</td>
        <td>{{ i.Boys }}</td>
        <td>{{ i.Girls }}</td>
        <td>{{ i.Boys + i.Girls }}</td>
        <td>{{ i.Boys5 }}</td>
        <td>{{ i.Girls5 }}</td>
        <td>{{ i.Boys5 + i.Girls5 }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("@/assets/img/distributing.jpg"),
      text: "Distribution of school books among the distressed children under the Distressed Children Training and Rehabilitation Center (DCTRC)",
      data: {
        title: "Distressed Children Training and Rehabilitation Center (DCTRC)",
        arr: [
          "	Distressed Children Training and Rehabilitation Center (DCTRC): Since 2004, SUS is operating a DCTRC for rehabilitation of the distressed children with its own fund. The goal of establishing this DCTRC is to build children into good citizens providing them with education and training so that they can stand against any social injustice.",
          " On the other hand, the objectives are: Raising awareness about the hazards of child labor and the importance of education for all children; Moving of distressed children from DCTRC to another higher & next appropriate educational program; providing soft credit to the parents of these children. This DCTRC is standing on the SUS owned land at Badda, Vatpara, Savar, Dhaka. In this DCTRC, the disadvantaged, poor, helpless, orphans and street children are provided with formal education from the pre-primary to class five. The DCTRC is also providing pre-primary education for the enrolled infants.",
          "All of the students of this center are given free learning materials, school dress, winter clothes, free medical first aid and also breakfast. These children are provided with moral, cultural and environmental education. However, some key activities under this DCTRC are: enrollment of distressed floating children for education; participation in the day observance, social activities, sports and other cultural functions; participation in debating, recitation, storytelling, collecting different educational materials etc. under co-curriculum activities; exchanging views among teachers and guardians, where available; arrangement of higher education (secondary level) for them after completion of primary education etc. The following table shows some basic information regarding admission and passing of Class - V.",
        ],
      },

      DRTC: [
        {
          year: 2019,
          Boys: 21,
          Girls: 46,
          Boys5: 0,
          Girls5: 4,
        },
        {
          year: 2018,
          Boys: 34,
          Girls: 52,
          Boys5: 4,
          Girls5: 5,
        },
        {
          year: 2017,
          Boys: 50,
          Girls: 48,
          Boys5: 9,
          Girls5: 4,
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
  color: #000000;
  text-align: center;
  margin: 5% 3% 5% 3%;
}

.gov p {
  font-size: 0.9em !important;
  font-family: Century Gothic;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
  color: #020202;
  text-align: justify;
  margin: 0% 5% 0% 5%;
  padding: 2%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

/* image */
.card-img {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.flip-card {
  background-color: transparent;
  width: 400px;
  height: 400px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  color: rgb(255, 255, 255);
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: rgb(255, 255, 255);
}

/* Style the back side */
.flip-card-back {
  background-color: rgb(29, 83, 137);
  color: white;
  transform: rotateY(180deg);
  width: 400px;
  height: 400px;
  padding: 10% 5% 10%;
  font-size: 1.5em;
  line-height: 10px !important;
  text-align: justify !important;
}
</style>
