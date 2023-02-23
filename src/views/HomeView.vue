<script setup>
import { onMounted, ref } from "vue";
import Movies from "../components/MovieList.vue";
import { moviesStore } from "../stores/movies";
import isLoading from "../components/isLoading.vue";

const store = moviesStore();
const scrollComponent = ref(null);
const keyword = ref(
  localStorage.getItem("keyword")
    ? localStorage.getItem("keyword")
    : "anaconda"
);
let totalPage = 0;
setTimeout(() => {
  totalPage = Math.ceil(store.totalResults / 10);
}, 1000);

const handleScroll = (e) => {
  const element = scrollComponent.value;
  if (element) {
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      store.page++;
      if (store.page <= totalPage) {
        store.nextPage(store.page);
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  store.getAllMovies(keyword.value);
});
console.log(store.movies, "12");
</script>

<template>
  <main>
     <article ref="scrollComponent">
      <Movies :movies="store.movies" />
    </article>
    <IsLoading v-if="store.isLoading" />
  </main>
</template>
