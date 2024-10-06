<script setup>
import MainCardSin from './MainCardSin.vue';
</script>

<template>
    <!-- chosing grid, grid column 5, space between each picture 5, padding 10-->
<div class="grid grid-cols-5 gap-10 p-10">
    <MainCardSin v-for="card in 10" :key="card"></MainCardSin>
  <!-- <MainCardSin v-for="card in 10" :key="card"></MainCardSin>  -->
</div>

</template>