<script setup>
import { onMounted } from "vue";
import Movies from "../components/MovieList.vue";
import IsLoading from "../components/isLoading.vue";
import { useFavoriteStore } from "../stores/favorites";
import { moviesStore } from "../stores/movies";
const store = useFavoriteStore();
const filmsStore = moviesStore();

onMounted(() => {
  if (store.favMovies.length < 1) {
    filmsStore.isLoading = true;
    filmsStore.loadingMessage = "Empty";
  }
});
</script>
<template>
    <main>
    <h3 class="text-gray-500 text-xl tracking-widest">Your Favorite Movies</h3>
    <Movies :movies="store.favMovies" />
    <IsLoading v-if="filmsStore.isLoading" />
  </main>
</template>
