<script setup>
import { watchEffect, ref, onMounted } from "vue";
import { moviesStore } from "../stores/movies";
import { useFavoriteStore } from "../stores/favorites";
import HeartIcon from "../components/icons/HeartIcon.vue";
import IsLoading from "../components/isLoading.vue";
import Movies from "../components/MovieList.vue";

const filmStore = moviesStore();
const favStore = useFavoriteStore();

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
const toggleFav = (id, e) => {
  const check = favStore.favMovies.filter((movie) => movie.imdbID == id);
  if (check.length > 0) {
    favStore.removeFromFav(id);
    e.target.classList.remove("text-red-600");
  } else {
    favStore.addToFavorite(id);
    e.target.classList.add("text-red-600");
  }
};
const handleTextFav = (imdbID) => {
  const check = favStore.favMovies.filter((movie) => movie.imdbID == imdbID);
  return check.length ? "Remove from Favorite" : "Add to Favorite";
};
const getClass = (imdbID) => {
  const check = favStore.favMovies.filter((movie) => movie.imdbID == imdbID);
  return check.length ? "text-red-600" : "text-gray-300";
};
</script>
<template>
  <main>
    <IsLoading v-if="filmStore.isLoading" />
    <article class="lg:flex lg:gap-5 justify-center lg:items-center p-4">
      <div
        class="w-full h-64 rounded-md overflow-hidden md:h-80 lg:w-3/12 lg:h-96"
      >
        <img
          :src="filmStore.movie.Poster"
          class="w-full h-full object-cover"
          :alt="filmStore.movie.Title"
        />
      </div>
      <div class="my-5 lg:w-5/12 lg:mt-0">
        <p
          class="text-gray-400 font-light text-xs mt-2 tracking-wider md:text-sm"
        >
          {{ filmStore.movie.Genre }}
        </p>

        <h3
          class="my-8 font-medium text-lg text-gray-200 tracking-wider md:text-2xl"
        >
          {{ filmStore.movie.Title }}
        </h3>
        <div
          class="flex justify-between items-center flex-wrap gap-2 md:justify-start md:gap-14"
        >
          <div class="flex items-center text-gray-400 font-light text-sm">
            {{ filmStore.movie.Released }}
          </div>

          <div class="flex items-center text-gray-400 font-light text-sm">
            {{ filmStore.movie.Runtime }}
          </div>

          <div class="flex items-center text-gray-400 font-light text-sm">
            {{ filmStore.movie.Country }}
          </div>
        </div>
        <div class="flex items-center text-gray-400 font-light text-sm my-8">
          {{ filmStore.movie.imdbRating }} -
          {{ filmStore.movie.imdbVotes }} Votes
        </div>

        <p
          class="text-gray-300 text-justify tracking-wider text-sm font-light md:tracking-widest"
        >
          {{ filmStore.movie.Plot }}
        </p>

        <button
          @click="toggleFav(filmStore.movie.imdbID, $event)"
          class="flex items-center mt-8 cursor-pointer"
          :class="getClass(filmStore.movie.imdbID)"
        >
          <HeartIcon />

          <span class="text-sm tracking-wide">
            {{ handleTextFav(filmStore.movie.imdbID) }}
          </span>
        </button>
      </div>
    </article>
    <hr class="mt-24 mb-16 opacity-10" />
    <div class="m-4">
      <h3 class="text-gray-300 text-sm md:text-lg">
        You migh also like . . . . .
      </h3>
      <Movies :movies="films" />
    </div>
  </main>
</template>
