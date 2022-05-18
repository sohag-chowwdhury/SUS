<template>
 <div>
    <div class="header " :style=" {'background-image': 'url(' + require('@/assets/img/headerBg.jpg') + ')'}">
   <v-layout  v-on:mouseover="mouseover"
    v-on:mouseleave="mouseleave" class="overly" row wrap justify-center>
     <v-flex xs10 sm10 md10 lg10 text-start>
       <v-img class="header-logo"  :src="logo">
       </v-img>
       <h2>We deliver The Best <span  :class="hover ? 'hoverEfect' && 'left-dely' :''">Experience</span>
        <br>  & help you connect with your customer</h2>
      
       <v-btn large class="white--text heder-btn text-capitalize rounded-lg" style="font-size:1.1em;font-weight:" color="#EF2947">Get Your Free Account</v-btn>
     </v-flex>
   </v-layout>
  </div>
  <v-container>
     <v-layout row wrap justify-center class="margin-head header2">

    <v-flex xs12 sm6 md6 lg6 text-start class="">
      
      <h1  > Your Online <br class ="hidden"> Restaurent <br>
        is just a few <br class ="hidden"> Clicks Away</h1>
        
          <p style="color: #34374C;">Join hundreds of food & beverage industry <br> leaders who trust <span class="error--text">Resappy</span>  E-commerce <br> to sell online.</p>
    </v-flex>  
    <v-flex xs12 sm6 md6 lg6 text-start>
      <div class="header2-bg" :style=" {'background-image': 'url(' + require('@/assets/img/bg2.jpg') + ')'}">
          <v-img style="width:400px" :src="img2">

          </v-img>
      </div>
    </v-flex>
  </v-layout>
   <v-divider class="my-3 hideLg"></v-divider>
  <v-layout row wrap justify-center class="header2">
   <div  class="mt-2" v-for="(item,index) in sliderData" :key="item.index">

     <v-layout row wrap v-if="slide == index">

       
        <v-flex class=" hide" xs12 sm6 md6 lg6 text-start>
        <v-img class="  left-dely slider slider-img "  :src="item.img">

        </v-img>
    </v-flex>
      <v-flex xs10 sm6 md6 lg6 text-start>
        <div class="slider-h">
           <h1 class="slider-number">{{index+1}}</h1>
            <h1 :class="index>0 ? 'slider1-h1':'' "  class="slider-h1">{{item.title}}</h1>
            <p class="slider-p" style="height:140px;"> {{item.description}}</p>
            <v-btn text  class="btn-design1 button1 mt-3">Read More <v-icon >mdi-arrow-right</v-icon></v-btn>
        </div>
        <br>
        <v-layout class="hide " row wrap justify-start>
          <v-flex xs12  text-end class="mt-3">
            <i style="font-size: 3.7em; color: #7d7e80;" class="fas fa-chevron-left left-dely-b mr-2" size="2x" v-if="slide == 1 || slide ==2 " @click="btnLeft(index)"></i>
             <i style="font-size: 3.7em; color: #7d7e80;" class="fas fa-chevron-right right-dely ml-2" v-if="slide == 0 || slide ==1 " @click="btnRight(index)"></i>
            
          </v-flex>
        </v-layout>
    </v-flex>
     
        <v-flex class="hideLg" xs12 sm6 md6 lg6 text-start>
        <v-img class="  left-dely slider-img "  :src="item.img">

        </v-img>
         </v-flex>
     
     
     
          <v-flex class="hideLg mt-3" xs12  text-end >
           <v-layout row wrap justify-center>
              <v-flex xs3 text-start>
                 <i style="font-size: 2.7em; color: #7d7e80;" class="fas fa-chevron-left left-dely-b mr-2" size="2x" v-if="slide == 1 || slide ==2 " @click="btnLeft(index)"></i>
             
              </v-flex>
              <v-flex xs3 text-end>
                <i style="font-size: 2.7em; color: #7d7e80;" class="fas fa-chevron-right right-dely ml-2" v-if="slide == 0 || slide ==1 " @click="btnRight(index)"></i>
              </v-flex>
            </v-layout>       
          </v-flex>
        
     </v-layout>
     
   </div>
  </v-layout>
   <v-divider class="mt-9 hideLg"></v-divider>
  <v-layout row wrap justify-center>
    <v-flex xs12 md12 lg12 sm12 text-center class="my-7">
          <h2 style="margin-bottom:1% !important; color:black; font-weight:800;">Features</h2>
          <h4  style="margin:auto !important; font-weight:400;">Technology solution thats cover your needs</h4>
    </v-flex>
     <v-flex xs12 md12 lg12 sm12 text-center >
     
        <v-btn  @click="filterData(item, index)" text  color="grey darken-4" :class="indexValue ==index ? 'error lighten-1' : ''" class=" button2" v-for="(item,index) in btn" :key="item.index"> <span class="button-text">{{item}}</span></v-btn>
    </v-flex>
    <v-flex class="fiture" xs10 md4 lg4 sm4 text-center v-for="(item,index) in features" :key="item.index" >
        <div  v-if="index <= 5 && explore == false && filterItem.length == 0"  class="justify-center mx-2 my-2">
          <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
        <v-card
         min-height="370px"
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          
        >
        <br>
          <v-img class="my-2 mt-7"  style="margin:auto;" min-width="80" max-width="80"  :src="item.img">
          </v-img>
          <h3>{{item.title}}</h3>
          <p class="my-2" style="height:120px; overflow: hidden;">{{item.description}} </p>
         <v-layout row wrap justify-start>
           <v-flex text-start>
              <v-btn  small text class="btn-design button3 my-4 ">lern more <v-icon small >mdi-arrow-right</v-icon></v-btn>
           </v-flex>
         </v-layout>
        </v-card>
      </v-hover>
         
         
        </div>

         <div  v-if="explore == true && filterItem.length == 0 "  class="justify-center mx-2 my-2">
           <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
            min-height="370px"
          
        >
        <br>
          <v-img class="my-2"  style="margin:auto;" min-width="80" max-width="80"  :src="item.img">
          </v-img>
          <h3>{{item.title}}</h3>
          <p class="my-2" style="height:120px; overflow: hidden;">{{item.description}} </p>
         <v-layout row wrap justify-start>
           <v-flex text-start>
              <v-btn  small text class="btn-design button3 my-4 ">lern more <v-icon small >mdi-arrow-right</v-icon></v-btn>
           </v-flex>
         </v-layout>
        </v-card>
      </v-hover>
        </div> 
    </v-flex>
  </v-layout>
  <v-layout row wrap justify-center class="my-3" >
      <v-flex xs10 sm4 md43 lg4 >
        <v-btn @click="exploreMethode" small v-if="explore == false && filterItem.length == 0" class="my-4 white--text" block color="red accent-3"> Explore More</v-btn>
        <v-btn @click="exploreMethodeMin" small v-if="explore == true && filterItem.length == 0" class="my-4 white--text" block color="red accent-3"> Show less</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-xs-center justify-start  class="my-4 ">
       <v-flex class="fiture" xs10 md4 lg4 sm4 text-center v-for="(i,index) in filterItem" :key="i.index">
          <div  v-if="explore === false" text-center  class="justify-center mr-2 my-2">
           
                 <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
        <v-card
          min-height="370px"
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto "
          
        >
        <br>
          <v-img class="my-2"  style="margin:auto;" min-width="80" max-width="80"  :src="i.img">
          </v-img>
          <p style="display:none;">{{index}}</p>
          <h3>{{i.title}}</h3>
          <p class="my-2" style="height:120px; overflow: hidden;">{{i.description}} </p>
         <v-layout row wrap justify-start>
           <v-flex text-start>
              <v-btn  small text class="btn-design button3 my-4 ">lern more <v-icon small >mdi-arrow-right</v-icon></v-btn>
           </v-flex>
         </v-layout>
        </v-card>
      </v-hover>
        </div>
    </v-flex>
    </v-layout>
  </v-container>
  <Footer></Footer>
 </div>
</template>

<script>


export default {
 
  name: 'Home',
  data(){
    return {
      slide:0,
      hover:false,
      explore:false,
      typeCheck:false,
      indexValue:0,
      filterItem:[],
      type:"",
       headerBg:{ backgroundImage: "require('@/assets/img/headerBg.jpg')" },
        logo: require('@/assets/img/logo.png'),
        img2: require('@/assets/img/img2.png'),
        sliderData :[
          { img: require('@/assets/img/slider1.jpg'), title:"Sell anywhere",description:"Set up your Resappy store once to easily sync and sell across your website, socialmedia, aggregators " },
          {img: require('@/assets/img/slider2.jpg'),title:"Grow Faster", description:"Promote and manage your restaurants, all in one place Generate leads and drive conversions with Email Marketing,Facebook Ads, digital marketing and customer management tools."},
          { img: require('@/assets/img/slider3.jpg'), title:"Manage Simply", description:"Control everything from a single dashboard with channel management, order management, pricing, and more."}
           ],
           btn:["All" , "Marketing", "Sales", "Interagtion" ,"Design",  "CRM"],
           features:[ 
               { id:11, img: require('@/assets/img/marketing1.jpg'), title:"Flexible payments",description:"With Resappy integrated systems,you can manage the financials of your online restaurant  ", type:"Marketing" },
               { id:12, img: require('@/assets/img/marketing2.jpg'), title:"Marketing Tools",description:"With the powerful of ecommerce management tools you can drive more online traffic, Convert more sales and get benefit from leading expertise", type:"Marketing" },
                { id:13,  img: require('@/assets/img/marketing3.jpg'), title:"Google Ads",description:"Get in front of customers when they’re searching for businesses like yours on Google Search and Maps. Only pay for results, like clicks to your website or calls to your business. ", type:"Marketing" },
                 { id:14,  img: require('@/assets/img/marketing4.jpg'), title:"Facebook Pixel",description:"Working with multiple aggregators is made easy.Simplify receiving their orders on a single device.", type:"Marketing" },
                  { id:15,  img: require('@/assets/img/marketing5.jpg'), title:"Sell on Instagram",description:".............................................. ........................................................................................................", type:"Marketing" },
                   { id:15,  img: require('@/assets/img/marketing6.jpg'), title:"Snapchat Pixel",description:".............................................. ........................................................................................................", type:"Marketing" },

                   { id:21,  img: require('@/assets/img/sales1.jpg'), title:"Promotions & Coupons",description:"With the powerful of ecommerce management tools you can drive more online traffic, Convert more sales and get benefit from leading expertise.", type:"Sales" },
               { id:22,  img: require('@/assets/img/sales2.jpg'), title:"Smart Menu",description:"Build and control your menu across different branches and auto-sync with food aggregators.", type:"Sales"},
                { id:23,  img: require('@/assets/img/sales3.jpg'), title:"Channel Management",description:"Never worry about missing a sale. Receive and manage orders from aggregators in a single screen", type:"Sales"},
                 { id:24,  img: require('@/assets/img/sales4.jpg'), title:"Price Auto Sync",description:".............................................. ........................................................................................................", type:"Sales"},
                  

             
                    {  id:31, img: require('@/assets/img/marketing1.jpg'), title:"Flexible payments",description:"With Resappy integrated systems,you can manage the financials of your online restaurant  ", type:"Interagtion" },
               {  id:32, img: require('@/assets/img/integration2.jpg'), title:"Delivery Fleet",description:"You don't have a delivery team? No problem! our network of delivery partners are here to serve your customers  ", type:"Interagtion" },
                {  id:34, img: require('@/assets/img/integration3.jpg'), title:"Aggregator Integration",description:".............................................. ........................................................................................................", type:"Interagtion" },
                  {  id:35, img: require('@/assets/img/integration4.jpg'), title:"POS Integration ",description:".............................................. ........................................................................................................", type:"Interagtion" },
                

                   {  id:41, img: require('@/assets/img/design1.jpg'), title:"Customizable  Design Schemes",description:".............................................. ........................................................................................................", type:"Design" },
               {  id:42, img: require('@/assets/img/design2.jpg'), title:"No software Installation",description:".............................................. ........................................................................................................", type:"Design" },
                {  id:43, img: require('@/assets/img/design3.jpg'), title:"Seamless Shopping",description:".............................................. ........................................................................................................", type:"Design" },
                 {  id:45,  img: require('@/assets/img/design4.jpg'), title:"Easy checkout",description:".............................................. ........................................................................................................", type:"Design" },
                  {  id:46, img: require('@/assets/img/design5.jpg'), title:"Language Detaction",description:".............................................. ........................................................................................................", type:"Design" },
                  
                    {  id:51, img: require('@/assets/img/crm1.jpg'), title:"Live Chat",description:"Engage your customers with Loyalty programs, live chat and ticketing system.", type:"CRM" },
               {  id:52, img: require('@/assets/img/crm2.jpg'), title:"TicKeting System",description:".............................................. ........................................................................................................", type:"CRM" },
                {  id:53, img: require('@/assets/img/crm3.jpg'), title:"Customer Grouping",description:".............................................. ........................................................................................................", type:"CRM" },
                 {  id:54, img: require('@/assets/img/crm4.jpg'), title:"Customized SMS & Plus Notification",description:".............................................. ........................................................................................................", type:"CRM" },
                 
                  
              
              ]
       
    }
  },
  methods:{
    btnLeft(e){
      if(e <= 2){
        this.slide = this.slide - 1
      }
     
    },
    btnRight(e){
      if(e >= 0){
        this.slide =   this.slide +1
      }
      
    },
    exploreMethode(){
      this.explore = true
    },
    exploreMethodeMin(){
      this.explore = false
    },
    filterData(e,i){
      this.type = '',
      this.explore = false,
      this.typeCheck = true
      this.indexValue = i
        this.type = e
        this.filterItem.length= 0
        this.features.map(item=>{
          if(item.type == e){
            this.filterItem.push(item)
             
          }
         
        })
         if("All" == e ){
            this.explore = false,
            this.filterItem = []       
          }

    },
    mouseover(){
      this.hover= true
    },    
    mouseleave(){
      this.hover = false
    }
  }
  
}
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .hover{
  color:rgb(red, green, blue)
}
  .header{
    height: 550px;
    width: 100%;
    position: relative;
    background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
    
  }
  .heder-btn{
    margin-left: 10%;
  }
   
  .fiture {
    margin: auto;
  }
  .overly{
     background: rgba(39, 28, 77, 0.45);
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     margin: 0;
     width: 100%;
     height: 100%;
     position:absolute;
  }
  .header-logo{
    margin-top: 10%;
    width:160px;
     margin-left: 10%;
    margin-right: 10%;
  }
  h2{
    font-family: Century Gothic;
    margin-top:3%;
    margin-bottom:3%;
    font-size: 30px;
    font-weight: 600;
    margin-left: 10%;
    margin-right: 10%;
    letter-spacing: 0;
    color: #F2F2F2;
  
  }
  .slider-img{
    width:410px ;
    overflow: hidden;
    height:250px;

  }
  .slider-number{
     margin-top: 20%;
     font-size: 250px;
     opacity: .8;
     margin-left:14% ;
      opacity: 0.2;
     color: #EE2B47;
  }
  .hide{
    display: none !important;
  }
  .slider-h1{
    font-size: 40px;
     font-family: Century Gothic;
     letter-spacing: 3px;
     width: 220px;
     margin-left:34% ;
      color: #34374C  !important;
       opacity: 1;
      font-weight: 800;
     margin-top: -27%;
  }
  .slider1-h1 {
    font-size: 40px;
     font-family: Century Gothic;
     letter-spacing: 3px;
     width: 220px;
     margin-left:38% ;
      color: #34374C  !important;
     font-weight: 800;
     margin-top: -29%;
  }
  .margin-head{
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .btn-design{
     margin-left: 27%;
  }
  .btn-design1{
    margin-top: -70px  !important;
     margin-left: 55%;
     font-size: 0.8em;
  }
  .slider-p{
    font-size: .85em;
     font-family: Century Gothic;
     margin-left:22%;
     margin-top: 0%;
     text-align: justify;
     font-weight: 500;
   
  }
  
  
  
  .button3 {
  background-color: white; 
  color: black; 
 
}
.button3:hover {
  color: red;
  font-size: 13px;
}
.button-text{
font-size: 0.8em;
}
.button2 {
  width: 85px !important;
  margin: 2%;
  
}
.button1:hover {
 
  color: red;
  font-size: 12px;
}
.fiture h3 {
   font-size: 1em;
     font-family: Century Gothic;
    margin: 3%;
     font-weight: 700;
}
.fiture p {
   font-size: .9em;
     font-family: Century Gothic;
    margin-left: 10%;
     margin-right: 10%;
     text-align:justify;
     
}
 p{
   margin-left: 10%;
   margin-right: 10%;
   margin-bottom: 10%;
 }
   h1{
    font-family: Century Gothic;
    margin-top:3%;
    margin-bottom:3%;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0;
    color: #3E3E4A;
      margin-left: 10%;
     margin-right: 10%;
    line-height: 60px;
    letter-spacing: 0;
    

  }
     .main-heading {
  color: #777;
  text-transform: uppercase;
}
    .left-dely {
      color:red;
  display: inline-block;
  font-weight: 700;
  animation: moveInLeft 1s ease-out;
} 
 .left-dely-b {
      color:red;
  display: inline-block;
  font-weight: 700;
  animation: moveInLeft 1s ease-out;
} 
  .right-dely {
   
  display: inline-block;
  
  letter-spacing: 2px;
  animation: moveInLeft 1s ease-out;
}   

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  
  80% {
    transform: translateX(10px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  
  80% {
    transform: translateX(-10px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
}
@media only screen and (min-width: 601px) {
  .hover{
  color:rgb(red, green, blue)
}
  .header{
    height: 800px;
    width: 100%;
    position: relative;
    background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
    
  }
  .hideLg{
    display: none !important;
  }
   .header2{
   height: 600px;
   
   
   }
    .header2-bg{
   height: 450px;
    width: 100%;
    position: relative;
    background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
   
    
  }
 
  .overly{
     background: rgba(29, 35, 88, 0.60);
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     margin: 0;
     width: 100%;
     height: 100%;
     position:absolute;
  }
  .header-logo{
    width:180px;
    margin-top: 15%;
  }
  .slider-h {
    position: relative;
    height: 300px;
  }
  .slider {
       background: transparent linear-gradient(180deg, #EE2B47 0%, #00118A 100%) 0% 0% no-repeat padding-box;
       opacity: 0.9;
       width:500px;
       height:530px;
  }
  .slider-img{
   width:500px ;
    height:560px;
    
  }
  h2{
    font-family: Century Gothic;
    margin-top:3%;
    margin-bottom:3%;
    font-size: 38px;
    font-weight: 600;
    letter-spacing: 0;
    color: #F2F2F2;
  
  }
 
  .slider-number{
    margin-top: 20%;
     font-size: 340px;
     opacity: 0.2;
     color: #EE2B47;
  }
  .slider-h1{
    font-size: 65px;
     font-family: Century Gothic;
     letter-spacing: 3px;
     width: 220px;
     color: #34374C;
      opacity: 1;
     margin-left: 20%;
     font-weight: 800;
     margin-top: -17%;
  }
  .slider1-h1{
    font-size: 65px;
     font-family: Century Gothic;
     letter-spacing: 3px;
     width: 220px;
     font-weight: 800 !important;
     color: #34374C;
      opacity: 1;
     margin-left: 20%;
     font-weight: 500;
     margin-top: -18%;
  }
  .margin-head{
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .btn-design{
     margin-left: 10%;
  }
   .btn-design1{
     margin-left: 18%;
  }
  .slider-p{
    font-size: 1em !important;
     font-family: Century Gothic;
     margin-left: 20% !important;
     line-height: 27px;
     margin-top: 7% !important;
     font-weight: 500;
     text-align: left;
      letter-spacing: 0px;
      color: #34374C;
      opacity: 1;
   
  }
  
  p{
    font-size: 1em !important;
    text-align: left;
    font-family:Century Gothic ;
    font-size: 1;
    margin: auto;
    letter-spacing: 0px;
    color: #34374C;
  }
  .header2 p{
    font-size: 1.1em !important;
    text-align: left;
    font-family:Century Gothic ;
    font-size: 1;
    margin: auto;
    letter-spacing: 0px;
    color: #34374C;
    margin-left: 5%;
  }
  
  
  .button3 {
  background-color: white; 
  color: black; 
 
}
.button3:hover {
  color: red;
  font-size: 13px;
}
.button2 {
  width: 120px !important;
  margin: 2%;
}
.button1:hover {
 
  color: red;
  font-size: 15px;
}
.fiture h3 {
   font-size: 1em;
     font-family: Century Gothic;
     letter-spacing: 1px;
    margin: 3%;
    color: #43465A;
     font-weight: 700;
}
.fiture p {
   font-size: .9em;
     font-family: Century Gothic;
    margin-left: 10%;
     margin-right: 10%;
     text-align:start;
     margin-top:1%;
     
}
   h1{
    text-align: left;
    font-family: Century Gothic;
    margin-top:12%;
    margin-bottom:3%;
    margin-left: 5%;
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 0;
    color: #34374C;
    opacity: 1;
    line-height: 60px;
    letter-spacing: 0px;
    

  }
     .main-heading {
  color: #777;
  text-transform: uppercase;
}
    .left-dely {
      color:red;
  display: inline-block;
  font-weight: 700;
  animation: moveInLeft 1s ease-out;
} 
  .right-dely {
  display: inline-block;
  font-size: 1.0rem;
  letter-spacing: 2px;
  animation: moveInBottom 1s ease-out;
}   

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  
  80% {
    transform: translateX(10px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  
  80% {
    transform: translateX(-10px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
}

</style>
