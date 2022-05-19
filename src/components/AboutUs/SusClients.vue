<template>
  <div style="margin-top: 5%">
    <b-container>
      <b-card>
        <h4 class="text-uppercase">SUS Stakeholders / Clients</h4>
        <div v-for="(i, index) in table" :key="index" style="margin-top: 5%">
          <h5 class="text-uppercase">{{ i.title }}</h5>
          <p>{{ i.description }}</p>
        </div></b-card
      >
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      table: [
        {
          title: "Primary Stakeholders",
          description:
            "The primary stakeholders are those who directly benefit from or those people whose problems are addressed by the SUS’s development projects and programs. The primary stakeholders of SUS include (but not limited to): Vulnerable Community people, Slum/Squatter Dwellers, Disadvantaged women, children, elderly people, Youth & Adolescents, Physically challenged people etc.",
        },
        {
          title: "Secondary Stakeholders",
          description:
            "The secondary stakeholders are the intermediary actors or target groups in the process of delivering aid to the primary stakeholders. These secondary stakeholders carry out project activities and provide project services to the primary stakeholders or direct beneficiaries. The secondary stakeholders of SUS include (but not limited to): Project staff, Professional Experts engaged in service delivery process: Community Leaders,Community Volunteers both at the organizational and community levels,Religious leaders (Imams), School teachers, etc.",
        },
        {
          title: "Tertiary Stakeholders",
          description:
            "The tertiary Stakeholders are those external parties who are not directly engaged in aid delivery process, but can influence decisions for a project or program. The tertiary stakeholders of SUS include (but not limited to): Donors, Elected Representatives of LGIs, Representatives of Local Administration and other Govt. and Private officials, CSOs, Alliance & Networks, Representatives of NGOs etc.",
        },
      ],
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
