<template>
    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
     max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
            
          <v-btn
                class="my-5"
                  block
                  color="error"
                small  
           
            v-bind="attrs"
            v-on="on"
          >Submit</v-btn>
          
        </template>
        <template v-slot:default="dialog">
          <v-card>
              <v-layout justify-center>
                  <v-flex xs10 md12 lg10 sm10 class="my-7">
                       <p style="font-size:0.9em;font-family: Century Gothic;">we send verification code in email , it will expired after <span class="red--text">1.30 sec</span></p>
                  </v-flex>
              </v-layout>
            <v-card-text class="mt-10">
              <v-text-field
            label="Verification Code"
            outlined
            dense
          ></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-flex xs8 sm6 lg6 md6>
                  
                  <v-btn
                  class="my-5"
                  block
                  color="error"
               small
                @click="dialog.value = false"
              >submit</v-btn>
              </v-flex>
            </v-card-actions>
            
          </v-card>
        </template>
      </v-dialog>
    </v-col>
</template>
<script>
    export default {
           
   
}

</script>
<style scoped>
@media only screen and (max-width: 600px) {
    .max {
    width: 300px;
  }
}
@media only screen and (min-width: 601px) {
  .max {
    width: 300px;
  }
}
</style>