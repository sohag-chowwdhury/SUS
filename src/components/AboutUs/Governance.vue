<template>
  <div style="margin-top: 5%">
    <b-container>
      <b-card>
        <div v-for="(i, index) in table" :key="index">
          <h4 class="text-uppercase">{{ i.title }}</h4>
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
          title: "Governance Structure",
          description:
            "SUS Governance Structure consists of: a General Committee and an Executive Committee.",
        },
        {
          title: "General Committee",
          description:
            "SUS has a General Committee comprising twenty five members who elect the members of the Executive Committee for every three years. The members of the General Body meet twice a year to review the annual performance of the organization, approves annual budget and provide future directions.",
        },
        {
          title: "Executive Committee (EC)",
          description:
            "SUS has a seven member led Executive Committee consisting of Chairman-1, Vice-Chairman-1, General Secretary-1, Assistant General Secretary-1, Treasurer-1 and Executive Member-2 who meet on a quarterly basis to oversee the performance of the organizational management and provide necessary direction for proper functioning of all management units and departments of the organization. Apart from the scheduled meetings, the honorable members of the Executive Committee also meet in discussion as and when required by the organization.",
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
