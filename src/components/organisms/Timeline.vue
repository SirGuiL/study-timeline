<script setup>
import ListItem from "../molecules/ListItem.vue"
</script>

<template>
  <section class="container sm:mx-auto mt-20">
    <h1 class="text-gray-400 font-bold text-4xl mb-5">Timeline</h1>
    <ol class="relative border-l border-gray-200 dark:border-gray-700 ml-4">
      <ListItem date="February 23, 2023" title="Spotify clone using Vue and Tailwind CSS" description="Spotify homepage clone using Vue and Tailwind to maintain fidelity and responsiveness in the project." icon="devicon-vuejs-plain" link="https://github.com/SirGuiL/spotify-clone-vue" />
      <ListItem date="February 28, 2023" title="Pokédex using Vue, Axios and Vanilla CSS" description="Pokédex using vue and making requests to a pokémon api using axios." icon="devicon-vuejs-plain" link="https://github.com/SirGuiL/pokedex-vue" />
      <ListItem date="March 3, 2023" title="Facebook clone using Vue and Tailwind CSS" description="Clone facebook login screen using Vue, Tailwind CSS and Flowbite." icon="devicon-vuejs-plain" link="https://github.com/SirGuiL/facebook-login-tailwind-clone" />
      <ListItem date="March 4, 2023" title="Machine learning with decision tree" description="Machine learning project with nodejs and decision tree logic." icon="fa-solid fa-robot" link="https://github.com/SirGuiL/ml-decision-tree" />
      <ListItem date="March 8, 2023" title="Amazon clone with Tailwind and Vue" description="Clone of the Amazon e-commerce book tab with interactions, using TailwindCSS and Vue." icon="devicon-vuejs-plain" link="https://github.com/SirGuiL/clone-amz-vue" />
      <ListItem date="March 10, 2023" title="Study progress with Vue, Tailwind CSS and Flowbite" description="Project made with Vue, Tailwind CSS and Flowbite with the objective of monitoring the progress in the studies of the mentoring themes." icon="devicon-vuejs-plain" link="https://github.com/SirGuiL/study-timeline" />
      <ListItem date="March 11, 2023" title="Realtime twitter clone with Elixir and Phoenix" description="Twitter clone made with Elixir and Phoenix." icon="devicon-elixir-plain" link="https://github.com/SirGuiL/realtime-twitter-clone" />
      <ListItem date="March 12, 2023" title="First step with Golang" description="First steps with go, creating and exporting first functions, creating first variables and making first requests." icon="devicon-go-original-wordmark" link="https://github.com/SirGuiL/first-steps-with-go" />
      <ListItem date="March 12, 2023" title="RPG functions with Lua" description="Basic functions of an object-oriented rpg in Lua." icon="devicon-lua-plain" link="https://github.com/SirGuiL/rpg-with-lua" />
      <ListItem date="March 13, 2023" title="CRUD with Golang" description="CRUD of books with Golang" icon="devicon-go-original-wordmark" link="https://github.com/SirGuiL/crud-with-go" />
    </ol>
  </section>
</template>

<style scoped></style>
