<script setup>
const menuItem ={
    
        name:'Ramen Noodle',
        image: "/images/menu/bon-vivant-qom5MPOER-I-unsplash.jpg",
        price: 870,
        descripition:'noodle meat eggs and soup',
        category: 'meal'
    
}
</script>

<template>
    <h1>MenuItem</h1>
    <v-container fluid class="d-flex fill-height" align="center">
        <v-row>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-img :src="menuItem.image" cover height="500"></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
               <v-card class="pa-6 rounded-lg" justify="center">
                <v-card-title>{{ menuItem.name }}</v-card-title>
                <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                <v-card-text>{{ menuItem.descripition }}</v-card-text>
                <v-card-text> Quantity <v-text-field></v-text-field></v-card-text>
                <v-card-actions>
                    <v-btn color="green-lighten-1">Order</v-btn>
                </v-card-actions>
               </v-card> 
            </v-col>
        </v-row>
    </v-container>
</template>