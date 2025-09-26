<script setup>
import { useMenuStore} from '../stores/menu'
const menuStore =useMenuStore()
const menuItem= menuStore.selectedMenuItem
</script>

<template>
    <v-container fluid class="d-flex fill-height">
        <v-row>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-img :src="menuItem.image" cover height="500"></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
               <v-card class="pa-6 rounded-lg" justify="center" color="yellow-lighten-3">
                <v-card-title>{{ menuItem.name }}</v-card-title>
                <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                <v-card-text>{{ menuItem.descripition }}</v-card-text>
                <v-card-text>
                    
                        <v-col md="2">Quantity</v-col>
                        <v-col md="4">
                            <v-number-input 
                              control-variant="split"
                              density="compact"
                              :min="1"
                              :max="10">
                            </v-number-input>
                        </v-col>
                    
                </v-card-text>
                <v-card-actions>
                    <v-btn color="green-darken-4">Order</v-btn>
                </v-card-actions>
               </v-card> 
               <v-card class="pa-6 mt-3 rounded-lg" color="yellow-lighten-3">
                <v-card-title>Review</v-card-title>
                <v-rating :length="5" :size="32" :model-value= "3" active color="green-darken-4"  />
               </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>