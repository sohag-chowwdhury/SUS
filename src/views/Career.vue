<template>
    <div style="margin:5% 5% 5% 10%">
        <v-layout row wrap justify-center>
            <v-flex xs12 md12 lg12 sm12 text-center>
                <v-card style="width:100%; padding: 3%; ">
                    <v-img style="width:30%; margin-left:35%" :src="img"></v-img>
                    <h1>No vacancy,stay Connected. </h1>

                </v-card>
             </v-flex>
        </v-layout>
    </div>
</template>
<script>
export default {
    data(){
        return{
             img:require("@/assets/img/sus.png"),
        }
    }
}
</script>
<style scoped>
h1 {
  font-family: Century Gothic;
  margin: 0% 3% 3% 3%;
  font-size: 1.8em;
  font-weight: 500;
  letter-spacing: 2;
  color: #070707;
  font-weight: bold;
  padding: 3%;
  text-align: center;
}
</style>