<script setup>
import MovieCard from "./MovieCard.vue";
const props = defineProps({
  movies: Array,
});
</script>
<template lang="">
  <div class="mt-7 flex flex-wrap justify-between gap-3">
    <div
      class="w-2/5 my-2 lg:w-3/12"
      v-for="movie in movies"
      :key="movie.imdbID"
    >
      <MovieCard :movie="movie" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
