<script setup>
import { watchEffect, ref, onMounted } from "vue";
import { moviesStore } from "../stores/movies";

const filmStore = moviesStore();

const props = defineProps({
  id: String,
});
const films = ref([]);

watchEffect(() => {
  films.value = filmStore.movies.filter((movie) => movie.imdbID != props.id);
  filmStore.getMovieByID(props.id);
});

onMounted(() => {
  filmStore.getMovieByID(props.id);
});
console.log(filmStore, "13");
</script>
<template>
  <main>
    <article class="lg:flex lg:gap-5 lg:justify-between lg:items-center">
      <div
        class="w-full h-64 rounded-md overflow-hidden md:h-80 lg:w-6/12 lg:h-96"
      >
        <img
          :src="filmStore.movie.Poster"
          class="w-full h-full object-cover"
          :alt="filmStore.movie.Title"
        />
      </div>
      <div class="my-5 lg:w-5/12 lg:mt-0">
        <h3
          class="my-8 font-medium text-lg text-gray-200 tracking-wider md:text-2xl"
        >
          {{ filmStore.movie.Title }}
        </h3>
      </div>
      <div
        class="flex justify-between items-center flex-wrap gap-2 md:justify-start md:gap-14"
      >
        <div class="flex items-center text-gray-400 font-light text-sm">
          {{ filmStore.movie.Released }}
        </div>

        <div class="flex items-center text-gray-400 font-light text-sm">
          {{ filmStore.movie.Runtime }}
        </div>
      </div>
    </article>
  </main>
</template>
<script>
export default {};
</script>
<style lang=""></style>
