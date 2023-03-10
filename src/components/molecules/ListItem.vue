<script setup>
import {onMounted , ref} from "vue";

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

// devicon-vuejs-plain mr-1
</script>

<template>
  <li class="ml-4 mb-10">
    <div
      class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
    ></div>
    <time
      class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      >{{ date }}</time
    >
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
      <i :class="`${type} mr-1`"></i>
      {{ title }}
    </h3>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
    <a
      href="https://github.com/SirGuiL/facebook-login-tailwind-clone"
      target="_blank"
      class="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      View on github
      <i class="devicon-github-original ml-2 text-base"></i>
    </a>
  </li>
</template>

<style scoped></style>
