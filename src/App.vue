<template>
 <v-app > 
   
    <v-app-bar height="45px" :color=" scrollPosition > 702  ? 'white': '' || scrollPosition < 701 &&  scrollPosition > 95 ? 'black': '' || scrollPosition < 94 ? 'transparent' :'' " elevation="0" app >
      <v-app-bar-nav-icon class="hidden-sm-and-up"  color="grey lighten-2" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon  class="d-none d-sm-flex  mx-lg-7  mx-md-2 mx-sm-1"><v-img :src="img" max-width="40px"></v-img></v-app-bar-nav-icon> 
      
    <span  v-for="(item ,index) in nabItem"  :key="item.index"  >  <v-toolbar-title @click="buttonClick(index)"  v-if="index < 4"  class="white--text hidden  mx-lg-4  mx-md-2 mx-sm-1"> <span  style="cursor: pointer"
      :class="   scrollPosition > 702 && index+1 === indexValue ? 'seleted' :'' || scrollPosition < 701 && index+1 === indexValue ? 'seleted' :'' || scrollPosition > 702 ? 'nav1': ''" class="nav" > {{item}}  </span></v-toolbar-title> </span>
      

      <v-spacer class="d-md-none d-lg-flex"></v-spacer>
     
       <v-btn icon class="d-none d-sm-flex  mx-lg-4  mx-md-2 mx-sm-1">
         <span class="mt-1" style="font-size: 1.7em; color: #EE2B47;">
   <i class="fas fa-search"></i>
          </span>
      
      </v-btn> 
       <v-toolbar-title class="white--text  mx-4"  >
         
         <v-menu
      open-on-hover
      top
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        
        <span  color="primary"
          dark
          v-bind="attrs"
          v-on="on" >  <span    v-for="(item ,index) in nabItem"  :key="item.index"  >   <v-toolbar-title @click="buttonClick(index)"  v-if="index == 4"  class="white--text hidden mx-lg-4  mx-md-2 mx-sm-1 "> <span  
      :class="   scrollPosition > 702 && index+1 === indexValue ? 'seleted' :'' || scrollPosition < 701 && index+1 === indexValue ? 'seleted' :'' || scrollPosition > 702 ? 'nav1': ''" class="nav" >{{item}}  </span></v-toolbar-title> </span> </span>
       
      </template>

      <v-list class="mt-10 rounded-lg" style="overflow: hidden !important;" >
        <v-list-item >
        <v-layout row wrap justify-center style="width:320px !important; height:380px !important; ">
          <v-flex xs10 sm10 lg10 md10>
              <h4 class="mt-3">Learn</h4>
              <p class="mt-3" style="font-size:0.9em; font-family: Century Gothic;">Get the Knowledge you need to build a successful restaurant online sales channel with Resappy.</p>  
          </v-flex>
           <v-flex xs10 sm10 lg10 md10 class="">
              <v-layout row wrap class="ml-1">
                  <v-flex  xs8 sm8 lg8 md8 text-start>
                      <h4 >About</h4>
                      <h4>Help Center</h4>
                      <h4>Videos</h4>
                      <h4>Customer Service </h4>
                       <h4>Features</h4>
                        <h4>Why sell online</h4>
                         <h4>Solutions by industry</h4>
                      
                  </v-flex>
                   <v-flex  xs4 sm4 lg4 md4 text-start>
                     <h4>Blog</h4>
                      <h4>Guide</h4>
                      <h4>Pods</h4>
                       <h4>Demo</h4>               
                    
                  </v-flex>
              </v-layout>
           </v-flex>
        </v-layout>
        </v-list-item>
      </v-list>
    </v-menu>
      </v-toolbar-title>
      <span  v-for="(item ,index) in nabItem"  :key="item.index"  >  <v-toolbar-title @click="buttonClick(index)"  v-if="index > 4"  class="white--text hidden   mx-lg-4  mx-md-2 mx-sm-1"> <span style="cursor: pointer"
      :class="   scrollPosition > 702 && index+1 === indexValue ? 'seleted' :'' || scrollPosition < 701 && index+1 === indexValue ? 'seleted' :'' || scrollPosition > 702 ? 'nav1': ''" class="nav" >{{item}}</span></v-toolbar-title> </span>
     
        <v-btn small class="hide rounded-lg mt-1 "  :color=" scrollPosition > 702  ? 'grey darken-2': '' || scrollPosition < 701 ? 'error': ''"> <email  class="hidden mx-0 mt-1" > </email></v-btn>
     
    </v-app-bar>
    <v-navigation-drawer
      
      v-model="drawer"  app temporary  color="white"
    >
    
      <v-list >
        <v-list-item > <v-img :src="img1" max-width="124"></v-img></v-list-item>
        <v-divider></v-divider>
         <span v-for="(item,index) in nabItem" :key="item.index" >
        <v-list-item
        
         @click="buttonClick(index)"  v-if="index<4"  class="mx-4">
          <span :class="index +1 == indexValue ? 'seleted':''">{{item}} </span>
        </v-list-item>
        </span>
        <v-list-group 
        >
          <v-list-item  @click="buttonClick(11)" slot="activator">
           <span :class="12 == indexValue ? 'seleted':''">  Lern</span>
          </v-list-item>
         <v-layout row wrap justify-center class="my-4 mx-2">
          <v-flex xs10 sm10 lg10 md10 class="minDropdown">
            
              <p class="mt-3" style="font-size:0.9em; font-family: Century Gothic;">Get the Knowledge you need to build a successful restaurant online sales channel with Resappy.</p>  
          </v-flex>
           <v-flex xs10 sm10 lg10 md10 class="mt-3">
              <v-layout row wrap class="ml-1">
                  <v-flex  xs8 sm8 lg8 md8 text-start>
                      <h4 >About</h4>
                      <h4>Help Center</h4>
                      <h4>Videos</h4>
                      <h4>Customer Service </h4>
                       <h4>Features</h4>
                        <h4>Why sell online</h4>
                         <h4>Solutions by industry</h4>
                      
                  </v-flex>
                   <v-flex  xs4 sm4 lg4 md4 text-start>
                     <h4>Blog</h4>
                      <h4>Guide</h4>
                      <h4>Pods</h4>
                       <h4>Demo</h4>               
                    
                  </v-flex>
                  <v-divider></v-divider>
              </v-layout>
           </v-flex>
            
        </v-layout>
          
          
        </v-list-group>
         <span v-for="(item,index) in nabItem" :key="item.index" >
        <v-list-item  @click="buttonClick(index)" v-if="index>4"  class="mx-4">
          <span :class="index +1 == indexValue ? 'seleted':''">{{item}} </span>
        </v-list-item>
        </span>
      </v-list>
       <v-divider></v-divider>
      <email></email>
    </v-navigation-drawer>
    
     <main>
      <router-view></router-view>
    </main>
</v-app>
</template>
<script>
export default {
  data() {
    return{
        drawer: false,
        marker:false,
        indexValue:0,
        nabItem:['Sell', 'Market' ,'Manage', 'عربي',  'Learn',  'Pricing','Login'],
         group: null,
         dynamic: '',
         scrollPosition: null,
        img: require('@/assets/img/logo.svg'),
         img1: require('@/assets/img/footer.png'),
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
    buttonClick(e){
      this.indexValue = e +1
    },
      mouseover(e){
       this.indexValue = e +1
       console.log(this.indexValue)
    },    
    mouseleave(){
      this.indexValue = 0
    }
},
 watch: {
      group () {
        this.drawer = false
      },
    },
mounted() {
    window.addEventListener('scroll', this.updateScroll);
}
}
</script>
<style >
 
@media only screen and (min-width: 601px) {
  .seleted {
    color: #EF3C55 !important;
   font-weight: bold;
   font-family: Century Gothic;
   
 
   
   border-radius: 20px;

    
}
}

@media only screen and (max-width: 600px) {
  .hide{
    display: none !important;
  }
.seleted {
    color: #EF3C55 !important;
   font-family: Century Gothic;
   
 
   
}
  .hidden{
    display: none;
  }
}

.nav{
  font-size: 0.78em;
  color: rgb(250, 242, 242);
     font-family: Century Gothic;
}
.nav1{
  font-size: 0.78em;
  color: rgb(14, 6, 6);
     font-family: Century Gothic;
}
p{
  font-size: .82em  !important;
   font-family: Century Gothic;
  opacity: 0.99;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;;
  color: #3E3E4A;
}
h4{
  font-size: .8em;
   font-family: Century Gothic;
  opacity: 0.99;
 margin-top: 3px;
  color: #3E3E4A;
  font-weight: 700;
  line-height: 22px;
   font-family: Century Gothic;
}
.header{
    height: 300px;
    width: 100%;
    position: relative;
    background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
    
  }
</style>
