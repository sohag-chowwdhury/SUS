<template>
  <div style="margin-top: 2%">
    <b-container>
      <b-card>
        <div>
          <h4 class="text-uppercase">Achievement and Milestone of SUS</h4>
        </div></b-card
      >
      <b-row class="my-3">
        <b-col>
          <b-card>
            <table class="table">
              <thead class="table_nav">
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Titles of Projects & Programs</th>
                  <th scope="col">Implementation Period</th>
                  <th scope="col">Funded by</th>
                  <th scope="col">Project Location</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in table" :key="index">
                  <th scope="row">{{ item.id }}</th>
                  <td scope="row">{{ item.title }}</td>
                  <td scope="row">{{ item.implementation }}</td>
                  <td scope="row">{{ item.funded }}</td>
                  <td scope="row">{{ item.location }}</td>
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
          id: "01",
          title: "Credit Program / Projects",
          implementation: "1992 - On going",
          funded: "PKSF",
          location: "SUS Working areas",
        },
        {
          id: "02",
          title:
            "Enhancing Resources and Increasing Capacities of Poor Households towards Elimination of their Poverty (ENRICH)",
          implementation: "2014 - On going",
          funded: "PKSF",
          location: "Shibpur, Narsingdi",
        },
        {
          id: "03",
          title:
            "Promoting Agricultural Commercialization and Enterprises (PACE)",
          implementation: "2016 - Apr 2020",
          funded: "PKSF",
          location: "Savar, Singair & Dhamrai",
        },
        {
          id: "04",
          title:
            "Uplifting the Quality of the Lives of the Elderly People Program",
          implementation: "2018 - On going",
          funded: "PKSF",
          location: "Shibpur, Narsingdi",
        },
        {
          id: "05",
          title:
            "Social Development Program under “Social Advocacy and Knowledge Dissemination Unit” of PKSF",
          implementation: "2018 - On going",
          funded: "PKSF",
          location: "SUS Working areas",
        },
        {
          id: "06",
          title: "SUS Health Care Program",
          implementation: "2015 - On going",
          funded: "SUS Own Fund",
          location: "Savar, Dhaka",
        },
        {
          id: "07",
          title: "Primary Health Care Support Project",
          implementation: "2011 - On going",
          funded: "PKSF",
          location: "Mymensingh Sadar",
        },
        {
          id: "08",
          title: "Distressed Children Training & Rehabilitation Center (DCTRC)",
          implementation: "2014 - On going",
          funded: "SUS Own Fund",
          location: "Savar",
        },
        {
          id: "09",
          title:
            "Save Urban Children from Hazardous Jobs and Links with Academy (SUCHALA) project",
          implementation: "2011 - On going",
          funded: "Anukul Foundation",
          location: "Savar & Mymensingh Sadars",
        },
        {
          id: "10",
          title: "Scholarship Program",
          implementation: "2011 - On going",
          funded: "PKSF & SUS",
          location: "SUS Working areas",
        },
        {
          id: "11",
          title: "Housing Loan Project",
          implementation: "2010 - On going",
          funded: "PKSF",
          location: "SUS Working areas",
        },
        {
          id: "12",
          title: "Vulnerable Group Development (VGD) Project",
          implementation: "2019 - On going",
          funded: "SSNP of MoWCA",
          location: "B.Baria",
        },
        {
          id: "13",
          title: "SUS Central Nursery Development",
          implementation: "2000  - On going",
          funded: "SUS Own Fund",
          location: "Savar, Dhaka",
        },
        {
          id: "14",
          title: "Solid Paper Board Packaging Project",
          implementation: "1998 - On going",
          funded: "SUS Own Fund",
          location: "Savar, Dhaka",
        },
        {
          id: "15",
          title: "Other Projects and Activities",
          implementation: "On going",
          funded: "Own Fund, PKSF",
          location: "SUS Working areas",
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
