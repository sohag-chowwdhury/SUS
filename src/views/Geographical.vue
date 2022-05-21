<template>
  <div style="margin-top: 5%">
    <b-container>
      <b-card>
        <div>
          <h4 class="text-uppercase">{{ table.title }}</h4>
          <p>{{ table.description }}</p>
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
        title:
          "Geographical Coverage / SUS Working Areas (Districts, Upazila, Union etc.)",
        description:
          "SUS is implementing its program and projects in six Districts and eleven Upazilas: Dhaka (Savar, Dhamrai, Keraniganj), Gazipur (Sadar, Kaliakoir), Manikganj (Singair), Narsingdi (Sadar, Shibpur), Mymensingh (Sadar) and Lakshmipur (Sadar, Kamolnagar).",
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
  color: hsl(240, 9%, 27%);
}

.innerText {
  font-weight: bold;
}
</style>
