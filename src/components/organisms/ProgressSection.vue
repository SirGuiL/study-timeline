<script setup>
</script>

<template>
  <section class="container mx-2 sm:mx-auto mt-10">
    <h1 class="text-gray-400 font-bold text-4xl mb-14">Progress Rate</h1>
    <div class="flex items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer" id="vue">
        <i class="devicon-vuejs-plain text-9xl text-white"></i>
        <div class="h-5 w-full rounded-full bg-gray-500 ml-10">
            <div class="h-5 w-full bg-green-300 rounded-full"></div>
        </div>
        <span class="text-white mr-10 ml-5 text-lg font-bold">100%</span>
    </div>
    <div class="flex items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer mt-10" id="lua">
        <i class="devicon-lua-plain text-9xl text-white"></i>
        <div class="h-5 w-full rounded-full bg-gray-500 ml-10">
            <div class="h-5 w-1/2 bg-indigo-600 rounded-full"></div>
        </div>
        <span class="text-white mr-10 ml-5 text-lg font-bold">50%</span>
    </div>
    <div class="flex items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer mt-10" id="go">
        <i class="devicon-go-original-wordmark text-9xl text-white"></i>
        <div class="h-5 w-full rounded-full bg-gray-500 ml-10">
            <div class="h-5 w-3/4 bg-blue-300 rounded-full"></div>
        </div>
        <span class="text-white mr-10 ml-5 text-lg font-bold">75%</span>
    </div>
    <div class="flex items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer mt-10" id="elixir">
        <i class="devicon-elixir-plain text-9xl text-white"></i>
        <div class="h-5 w-full rounded-full bg-gray-500 ml-10">
            <div class="h-5 w-full bg-purple-600 rounded-full"></div>
        </div>
        <span class="text-white mr-10 ml-5 text-lg font-bold">100%</span>
    </div>
    <div class="flex items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer mt-16" id="ml">
        <i class="fa-solid fa-robot text-fa-sm text-white"></i>
        <div class="h-5 w-full rounded-full bg-gray-500 ml-10">
            <div class="h-5 w-full bg-gray-300 rounded-full"></div>
        </div>
        <span class="text-white mr-10 ml-5 text-lg font-bold">100%</span>
    </div>
  </section>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-20">
</template>

<style scoped></style>
