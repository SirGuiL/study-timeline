<script setup>
import ListItem from "../molecules/ListItem.vue"
</script>

<template>
  <section class="container sm:mx-auto mt-20">
    <h1 class="text-gray-400 font-bold text-4xl mb-5">Timeline</h1>
    <ol class="relative border-l border-gray-200 dark:border-gray-700 ml-4">
      <ListItem date="February 23, 2023" title="Spotify clone using Vue and Tailwind CSS" description="Spotify homepage clone using Vue and Tailwind to maintain fidelity and responsiveness in the project." type="devicon-vuejs-plain" />
      <ListItem date="February 28, 2023" title="Pokédex using Vue, Axios and Vanilla CSS" description="Pokédex using vue and making requests to a pokémon api using axios." type="devicon-vuejs-plain" />
      <ListItem date="March 3, 2023" title="Facebook clone using Vue and Tailwind CSS" description="Clone facebook login screen using Vue, Tailwind CSS and Flowbite." type="devicon-vuejs-plain" link="https://github.com/SirGuiL/facebook-login-tailwind-clone" />
      <ListItem date="March 4, 2023" title="Machine learning with decision tree" description="Machine learning project with nodejs and decision tree logic." type="fa-solid fa-robot" />
      <ListItem date="March 8, 2023" title="Amazon clone with Tailwind and Vue" description="Clone of the Amazon e-commerce book tab with interactions, using TailwindCSS and Vue." type="devicon-vuejs-plain" />
      <ListItem date="March 10, 2023" title="Study progress with Vue, Tailwind CSS and Flowbite" description="Project made with Vue, Tailwind CSS and Flowbite with the objective of monitoring the progress in the studies of the mentoring themes." type="devicon-vuejs-plain" />
    </ol>
  </section>
</template>

<style scoped></style>
