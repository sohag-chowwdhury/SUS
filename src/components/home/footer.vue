<template>
    <div>
        <b-card style="width:100%">
       <div style="margin:5% 5% 5% 5%">

       
            <v-layout class="mt-7" row wrap justify-start>
                <v-flex xs12 md4 lg4 sm4>
                    <v-img style="margin:auto;" class="ml-3" width="50px" :src="img">

                    </v-img>
                    <p>Social Upliftment Society (SUS) is a women-led Non-Political, Not-for-Profit and Non-Governmental Organization (NGO) which formally started its journey in the development sector of Bangladesh in the year of 1990 with an aim of improving the socio-economic condition of the disadvantaged and under privileged people with a clear focus on women empowerment.</p>
                </v-flex>
                <v-flex xs6 md4 lg4 sm4 class="mt-8">
                    <h3>Address</h3>
                    <h4>Head Office: C-25, Jaleswar, Shimultala, Savar, Dhaka-1340</h4>
                    <h4>Phone: 88-02-77446229, 88-02-7742403</h4>
                    <h4>Email:sushelp360@gmail.com; www.sus-bd.org</h4>
                    
                </v-flex>
                <v-flex xs6 md4 lg4 sm4 class="mt-8">
                    <h3>SUS working areas </h3>
                    <h4>SUS is implementing its program and projects in six Districts and eleven Upazilas: Dhaka (Savar, Dhamrai, Keraniganj), Gazipur (Sadar, Kaliakoir), Manikganj (Singair), Narsingdi (Sadar, Shibpur), Mymensingh (Sadar) and Lakshmipur (Sadar, Kamolnagar).</h4>
                    
                    
                </v-flex>
            </v-layout>
       
      </div> 
      </b-card> 
    </div>
</template>
<script>
export default {
    data (){
        return {
            img: require('@/assets/img/footer.png'),
        }
    }
}
</script>
<style scoped>
@media only screen and (max-width: 600px) {
    .header{
    height: 450px;
    width: 100%;
    position: relative;
    background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
     
    
  }
 .overly{
     background: rgba(22, 17, 39, 0.75);
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     margin: 0;
     width: 100%;
     height: 100%;
     position:absolute;
  }
   h1{
    font-family: Century Gothic;
    margin-top:3%;
    margin-bottom:3%;
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 0;
    color: #F2F2F2;
    text-align: start;
     margin: 10%;
    
  
  }
   h4{
    font-family: Century Gothic;
    margin-bottom:3%;
    font-size: .8em;
    margin-top: 0%;
    font-weight: 500;
    letter-spacing: 0;
    color: #1b1010;
    text-align: start;
    margin-left: 15%;
   margin-right: 10%;
    
  
  }
   h3{
    font-family: Century Gothic;
    margin-bottom:3%;
   
    font-size: .8em;
    margin-top: 0%;
    font-weight: 900;
    letter-spacing: 0;
    color: #1b1010;
    text-align: start;
    margin-left: 15%;
    margin-right: 10%;
  }
   p{
    font-family: Century Gothic;
    margin-bottom:3%;
    font-size: .8em;
    margin-top: 0%;
    font-weight: 500;
    letter-spacing: 0;
    color: #1b1010;
    text-align: start;
    margin-left: 10%;
    margin-right: 10%;
  }
  .button{
      margin: auto ;
  }
}
@media only screen and (min-width: 601px) {
    
    .header{
    height: 350px;
    width: 100%;
    position: relative;
    background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
   
     
    
  }
 .overly{
     background: rgba(22, 17, 39, 0.65);
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     margin: 0;
     width: 100%;
     height: 100%;
     position:absolute;
  }
   h1{
    font-family: Century Gothic;
    margin-top:3%;
    margin-bottom:3%;
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 0;
    color: #F2F2F2;
    text-align: start;
     margin: 10%;
      margin-left:17%
  
  }
   h4{
    font-family: Century Gothic;
    margin-bottom:3%;
    font-size: .9em;
    margin-top: 0%;
    font-weight: 500;
    letter-spacing: 0;
    color: #1b1010;
    text-align: start;
    margin-left: 10%;
   margin-right: 10%;
    
  
  }
   h3{
    font-family: Century Gothic;
    margin-bottom:3%;
   
    font-size: 1.1em;
    margin-top: 0%;
    font-weight: bold;
    letter-spacing: 0;
    color: #34374C;
    text-align: start;
    margin-left: 10%;
    margin-right: 10%;
  }
   p{
    font-family: Century Gothic;
    margin-bottom:3%;
    font-size: .8em;
    margin-top: 0%;
    font-weight: 500;
    letter-spacing: 0;
    color: #1b1010;
    text-align: start;
   
  }
  .button{
      margin: auto ;
  }
  }

</style>