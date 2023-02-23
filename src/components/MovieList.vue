<script setup>
import MovieCard from "./MovieCard.vue";
const props = defineProps({
  movies: Array,
});
</script>
<template lang="">
  <div class="mt-7 flex flex-wrap justify-between gap-3 md:gap-8 lg:gap-5">
    <div
      class="w-2/5 my-2 md:w-1/4 lg:w-2/12"
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
