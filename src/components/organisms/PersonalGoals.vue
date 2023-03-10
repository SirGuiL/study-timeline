<script setup>
</script>

<template>
  <section class="container mx-2 sm:mx-auto mt-16">
    <h1 class="text-gray-400 font-bold text-4xl mb-14">Personal Goals</h1>
    <div class="flex items-center opacity-25 hover:opacity-100 transition-opacity cursor-pointer">
        <i class="fa-solid fa-dumbbell text-9xl text-white"></i>
        <div class="flex flex-col">
          <span class="text-white text-2xl font-bold ml-10">Goal: Go at least 5 days a week</span>
          <span class="text-white text-2xl font-bold ml-10">Last 7 days: 5/7</span>
          <span class="text-white text-2xl font-bold ml-10">Average: 5/7</span>
        </div>
    </div>
    <div class="flex items-center mt-10 opacity-25 hover:opacity-100 transition-opacity cursor-pointer">
        <i class="fa-solid fa-burger text-fa-xl-ico text-white"></i>
        <div class="flex flex-col">
          <span class="text-white text-2xl font-bold ml-10">Goal: Decrease trips to fast food and improve nutrition</span>
          <span class="text-white text-2xl font-bold ml-10 mt-4">Current: In general, once a week, however, some pass without once</span>
        </div>
    </div>
  </section>
  <hr class="h-px my-8 mt-20 bg-gray-200 border-0 dark:bg-gray-700">
</template>

<style scoped></style>
