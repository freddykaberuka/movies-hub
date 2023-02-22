<script setup>
import { onMounted } from "vue";
import Movies from "../components/MovieList.vue";
import { moviesStore } from "../stores/movies";
const store = moviesStore();

onMounted(() => {
  store.getAllMovies();
});
console.log(store.movies, "12");
</script>

<template>
  <main>
    <Movies :movies="store.movies" />
  </main>
</template>
