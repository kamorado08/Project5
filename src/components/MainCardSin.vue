<script setup>
//importing faker to create random names, pictures, and bios 
import { faker } from '@faker-js/faker'
//import { RouterLink } from 'vue-router';

const recipename = faker.food.dish()
const ingre = faker.food.ingredient()
const  recipe = faker.food.description(3)


</script>
    
<template>
    <!-- {{ fullname }}<br /> -->
    
    <!-- <RouterLink :to="{name: 'CardDetails', params: {id: recipename} }"> -->
    <div class="border border-gray-400 rounded-xl shadow bg-gray-200 h-full">
        <img :src="faker.image.urlLoremFlickr({width: 640, height: 480, category: 'dish'})" class="rounded-t-xl" />
        <div class="p-4">
            <p class="mb-2 text-2xl font-bold">{{ recipename }}</p>
            <p class="mb-3 font-normal text-purple-400">{{ ingre }}</p>

            <p class="mb-3 font-normal text-purple-400">{{ recipe }}</p>
        </div>
    </div>
    <!-- </RouterLink> -->

</template>