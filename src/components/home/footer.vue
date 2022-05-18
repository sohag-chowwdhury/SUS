<template>
    <div>
        <div class="header " :style=" {'background-image': 'url(' + require('@/assets/img/headerBg.jpg') + ')'}">
            <v-layout class="overly" row wrap justify-center>
                <v-flex xs12 md7 lg7 sm7 >
                    <h1>Launch your <br> restaurant 3,2,1...</h1>
                </v-flex>
                <v-flex xs12 sm5 md5 lg5 text-center class="button" >
                    <v-btn class="white--text" color="#8E283A">Get Your Free Account</v-btn>
                </v-flex>
            </v-layout>
        </div>
   <v-divider class="my-3 hideLg"></v-divider>

        <v-container  >
            <v-layout class="mt-7" row wrap justify-start>
                <v-flex xs12 md4 lg4 sm4>
                    <v-img class="ml-3" width="200px" :src="img">

                    </v-img>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quos quibusdam voluptatum ipsa quasi quae, illum tempore consectetur expedita sunt magnam dolor tenetur dicta cum quaerat! Cumque,cupiditate amet </p>
                </v-flex>
                <v-flex xs6 md4 lg4 sm4 class="mt-8">
                    <h3>Solutions By Industry</h3>
                    <h4>Productive Families</h4>
                    <h4>Bakeries</h4>
                    <h4>Cafes</h4>
                    <h4>Restaurants</h4>
                </v-flex>
                <v-flex xs6 md4 lg4 sm4 class="mt-8">
                    <h3>Resappy Partners Program</h3>
                    <h4>Referral Partner Program</h4>
                    <h4>Delivery Provider Registration</h4>
                    <h4>Food & Beverage Suppliers Registration</h4>
                    
                </v-flex>
            </v-layout>
        </v-container>
        <div style="background:#34374C; height:30px; ">
            <v-container>
            <v-layout row wrap justify-start>
                
                    <v-flex xs4 sm4 md8 lg8 text-start>
                        <h4 class="mt-1" style="color:white; font-size:0.9em; font-family: Century Gothic;">{{new Date().getFullYear()}} Resappy</h4>
                </v-flex>
                <v-flex xs4 sm4 md2 lg2>
                    <h4 class="mt-1" style="color:white; font-size:0.9em; font-family: Century Gothic;">Terms & condation</h4>
                </v-flex>
                <v-flex xs4 sm4 md2 lg2>
                    <h4 class="mt-1" style="color:white; font-size:0.9em; font-family: Century Gothic;">Privacy Policy</h4>
                </v-flex>
               
            </v-layout>
             </v-container>
        </div>
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
    margin-left: 10%;
    margin-right: 10%;
  }
  .button{
      margin: auto ;
  }
  }

</style>