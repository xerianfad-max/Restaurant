import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
        const menu ={
    0:{
        name:'Ramen Noodle',
        image: "/images/menu/bon-vivant-qom5MPOER-I-unsplash.jpg",
        price: 870,
        descripition:'noodle meat eggs and soup',
        category: 'meal'
    },
    1:{
        name:'Chicken wings',
        image: "/images/menu/corey-watson-g6KQZywJUo0-unsplash.jpg",
        price: 500,
        descripition: 'chicken with fries',
        category: 'meal'
    },
    2:{
        name:'Chicken curry',
        image: "/images/menu/khloe-arledge-ND3edEmzcdQ-unsplash.jpg",
        price: 750,
        descripition: 'rice and salad',
        category: 'meal'
    },
    3:{
        name:'Sandwich',
        image: "/images/menu/leanna-myers-CDAOrX5Jq9I-unsplash.jpg",
        price: 250,
        descripition: 'chicken ',
        category: 'snack'
    },
    4:{
        name:'Chicken wraps',
        image: "/images/menu/max-griss-Spp1G283dow-unsplash.jpg",
        price: 400,
        descripition: 'chicken with fries',
        category: 'snack'
    },
    5:{
        name:'Beef burger',
        image: "/images/menu/mike-PxJ9zkM2wdA-unsplash.jpg",
        price: 500,
        descripition: 'Beef with fries',
        category: 'meal'
    },
    6:{
        name:'Red bull',
        image: "/images/menu/philipp-raifer-UIwnggHrTnI-unsplash.jpg",
        price: 180,
        descripition: 'normal',
        category: 'drink'
    },
    7:{
        name:'Cola',
        image: "/images/menu/qasim-malick-i597Mg_WSPw-unsplash.jpg",
        price: 100,
        descripition: 'normal',
        category: 'drink'
    },
    8:{
        name:'Orange juice',
        image: "/images/menu/abhishek-hajare-kkrXVKK-jhg-unsplash.jpg",
        price: 150,
        descripition: 'juice',
        category: 'drink'
    },
    9:{
        name:'Apple juice',
        image: "/images/menu/bonnie-kittle-d6lNTwBs5bo-unsplash.jpg",
        price: 150,
        descripition: 'juice',
        category: 'drink'
    },
    10:{
        name:'Pineapple juice',
        image: "/images/menu/olivier-guillard-AjG1BkDH4Zs-unsplash.jpg",
        price: 150,
        descripition: 'juice',
        category: 'drink'
    },
    11:{
        name:'Mango juice',
        image: "/images/menu/sam-hojati-lw8GflbJwLc-unsplash.jpg",
        price: 150,
        descripition: 'juice',
        category: 'drink'
    },
    12:{
        name:'Pizza',
        image: "/images/menu/sahal-hameed-Nq9KlQTTEbQ-unsplash.jpg",
        price: 940,
        descripition: 'chicken pineapple cheese and tomato',
        category: 'meal'
    },
    13:{
        name:'Salad',
        image: "/images/menu/sonny-mauricio-yhc4pSbl01A-unsplash.jpg",
        price: 520,
        descripition: 'meat beans avocadoo carrots',
        category: 'vegetables'
    },
     14:{
        name:'Chicken wings',
        image: "/images/menu/syed-f-hashemi-p91GLhQv35o-unsplash.jpg",
        price: 250,
        descripition: 'chicken wings 5 pic',
        category: 'meat'
    },
     15:{
        name:'Sushi',
        image: "/images/menu/vinicius-benedit--1GEAA8q3wk-unsplash.jpg",
        price: 1300,
        descripition: '8 pic',
        category: 'meal'
    },

}
       
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})