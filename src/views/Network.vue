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
                 <p>
                  <span class="innerText">{{i.name}}:</span> 
                 </p>
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
      table:{
          title: "Linkage and Network",
       
          arr: [
           {name:"Excellent working relationship/linkage has been developed with local level GoB service providers like DAE, DLS, and Department of Mass Education, Department of Health and Family Welfare, Department of Social welfare, Department of Woman affairs etc."}, 
           {name:"SUS Linkages and Network with other organizations are with: Micro-Credit, Summit, Washington; PKSF-Net Work; InM; ADAB; NGO-Forum; Anukul Foundation, MDF; Credit Development Forum (CDF); Traffic Watch Bangladesh(TWB); WBB Trust."}
          ],
        }
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

.innerText{
  font-weight: bold;
}
</style>