<script setup>
const isLoggedIn = true
</script>

<template>
    <h1>Xerian</h1>
    <v-app-bar color="light-green-darken-1">
        <v-app-bar-title>Xerian</v-app-bar-title>

        <v-btn to="/"> Home</v-btn>
        <v-btn to="/menu">Menu</v-btn>
        <v-btn to="/contactus">Contactus</v-btn>
        <v-btn to="/orders" v-if="isLoggedIn">Orders</v-btn>
        <v-btn to="/reservation">reservation</v-btn>

        <v-avatar to="/userprofile" v-if="isLoggedIn">
            <span class="text-h5 text-red">XR</span>
        </v-avatar>

        <v-btn to="/login" v-else>login</v-btn>

    </v-app-bar>
</template>