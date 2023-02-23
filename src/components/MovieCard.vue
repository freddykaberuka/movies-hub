<script setup>
import { useFavoriteStore } from "../stores/favorites";
import HeartIcon from "./icons/HeartIcon.vue";

const store = useFavoriteStore();
const props = defineProps({
  movie: "",
});

const title = props.movie.Title.substr(0, 15) + "...";
const toggleFav = (id, e) => {
  const cek = store.favMovies.filter((movie) => movie.imdbID == id);
  if (cek.length > 0) {
    store.removeFromFav(id);
    e.target.classList.remove("text-red-600");
  } else {
    store.addToFavorite(id);
    e.target.classList.add("text-red-600");
  }
};

const isFav = (imdbID) => {
  if (store.favMovies) {
    const result = store.favMovies.filter((movie) => movie.imdbID == imdbID);

    return result.length ? true : false;
  }
};
</script>

<template lang="">
  <div class="px-4">
    <div
      class="max-w-sm text-gray-50 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <router-link
        :to="{ name: 'detail', params: { id: movie.imdbID } }"
        class="w-full h-full"
      >
        <div v-if="movie.Poster != 'N/A'" class="w-full h-full">
          <img
            :src="movie.Poster"
            :alt="movie.Title"
            class="rounded-t-lg w-full"
          />
        </div>
      </router-link>
      <div class="py-5 px-2 flex justify-between">
        <div>
          <h5
            :title="movie.Title"
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ title }}
          </h5>
          <span>{{ movie.Year }}</span>
        </div>
        <div>
          <button
            class="cursor-pointer"
            @click="toggleFav(movie.imdbID, $event)"
          >
            <HeartIcon :class="{ 'text-gray-600': isFav(movie.imdbID) }" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
