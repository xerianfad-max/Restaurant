<script setup>

</script>

<template>
    <!-- Carousel -->
    <v-container>
        <v-row>
            <v-carousel>
                <v-carousel-item src="/images/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/dan-gold-E6HjQaB7UEA-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/daniel-xfr0GzylA7I-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/edward-franklin-Nb_Q-M3Cdzg-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/duminda-perera-KKv5cgmhyRg-unsplash.jpg"></v-carousel-item>
            </v-carousel>

        </v-row>
    </v-container>
    <!-- about -->
    <v-container>
        <v-row>
            <v-card align="center">
                <p class="text-h4"><b>WELCOME TO XERIAN</b></p>
                <p class="text-h6">Welcome to Xerian restuarant the best menu in world</p>
                <p class="text-h6">At the heart of every successful restaurant is a combination of delicious food, attentive service, and a welcoming environment. Many restaurants take pride in sourcing fresh, local ingredients, supporting sustainability, and offering unique, seasonal dishes. The ambiance of the space plays a major role in setting the tone—whether it's a cozy café with a rustic vibe, a sleek modern restaurant with chic décor, or a lively family-friendly place.</p>
                <p class="text-h6">Dining at a restaurant is more than just eating; it's about enjoying an experience that stimulates</p>
            </v-card>

        </v-row>
    </v-container>
    <!-- New -->
    <v-container>
        <v-row>
            <v-col md="4">
                <v-card color="green-lighten-1">
                    <v-img 
                    src="/images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg" 
                    height="200"
                    cover>
                </v-img>
                    <v-card-title>XERIAN</v-card-title>
                <v-card-subtitle>POWER HIT</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card color="green-lighten-1">
                    <v-img 
                    src="/images/luca-bravo-8x_fFNrmeDk-unsplash.jpg" 
                    class="align-end text-blue"
                    height="200"
                    cover>
                </v-img>
                    <v-card-title>BAR</v-card-title>
                <v-card-subtitle>Let enjoy the power hit</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card color="green-lighten-1">
                    <v-img 
                    src="/images/shawn-nmpW_WwwVSc-unsplash.jpg" 
                    class="align-end text-blue"
                    height="200"
                    cover>
                </v-img>
                    <v-card-title>Restaurant</v-card-title>
                <v-card-subtitle>Let get the power hit</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
    <!-- Footer -->
    <v-container>
        <v-row>
            <v-footer class="text-center d-flex flex-column ga-2 py-4" color="light-green-darken-1">
                <div class="d-flex ga-3">
                <v-btn icon="mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-linkedin'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60"></div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
        </v-row>
    </v-container>
</template>