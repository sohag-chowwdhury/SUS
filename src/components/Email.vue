<template>
    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
          small   class="white--text mx-0 "
           
            v-bind="attrs"
            v-on="on"
          >Get Started for free</v-btn>
          
        </template>
        <template v-slot:default="dialog">
          <v-card>
              <v-layout justify-end>
                  <v-icon  class="mx-3 my-3" @click="dialog.value = false" size="50">mdi-close</v-icon>
              </v-layout>
            <v-card-text class="mt-10">
              <v-text-field
            label="Email"
            outlined
            dense
          ></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-flex xs8 sm6 lg6 md6>
                 <emailVerifay @click="dialog.value = false"></emailVerifay>
              </v-flex>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
</template>