<script setup>
//imports
import { ref } from 'vue'

const showMenu =ref(false)

//models
const name =ref(null)
const phone =ref(null)
const no0fpeople =ref(null)
const reservationDate =ref(null)
const reservationTime =ref(null)
const location =ref(null)

//functions
//make reservation - add reservation details to local storage
function makeReservation(){
    const newReservation ={
        name: name.value,
        phone: phone.value,
        no0fpeople: no0fpeople.value,
        date: date.value,
        time: time.value,
        location: location.value,
    }
    try{
        //save date on brower
        localStorage.setItem(
            "reservation",
            JSON.stringify(newReservation)
        );
        // To Do: send data to backend
    } catch (err) {
        console.error('Reservation process failed', err)
    }
}

</script>

<template>
    <h1>Reservation</h1>

<v-container fluid class="d-flex fill-height" align="center">
    <v-row>
        <v-col>
            <v-card max-width="800" class="pa-6 rounded-lg" justify="center">
                <v-row>
                        <p class="text-h5">Make a reservation</p>
                    </v-row>
                    <v-row>
                        <v-col md="4">Name</v-col>
                        <v-col md="8">
                            <v-text-field label="Name" v-model="Name"></v-text-field>
                        </v-col>
                    </v-row>
                   <v-row>
                        <v-col md="4">Phone</v-col>
                        <v-col md="8">
                            <v-text-field label="254 +" v-model="phone" type="number"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">No. of People</v-col>
                        <v-col md="8">
                            <v-text-field v-model="no0fpeople" type="number"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">Date</v-col>
                        <v-col md="8">
                            <v-date-input v-model="reservationDate"></v-date-input>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">Time</v-col>
                        <v-col md="8">
                            <v-text-field :model-value="reservationTime" label="picker in menu"prepend-icon="mdi-clock-time-four-outline"readonly>
                                <v-menu v-model="showMenu" :close-on-content-click="false" activator="parent" min-width="0">
                                    <v-time-picker v-model="reservationTime"></v-time-picker>
                                </v-menu>
                            </v-text-field>
                        </v-col>
                        <v-row>
                        <v-col md="4">Location</v-col>
                        <v-col md="8">
                            <v-radio-group v-model="location"inline>
                            <v-row>
                                <v-col md="4">
                                    <v-radio label="Madaraka" value="Madaraka"></v-radio>
                                </v-col>
                                <v-col md="4">
                                    <v-radio label="CBD" value="CBD"></v-radio>
                                </v-col>
                                <v-col md="4">
                                    <v-radio label="Your Home" value="Your Home"></v-radio>
                                </v-col>
                            </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    </v-row>

            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>