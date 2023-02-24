<script setup>
import { ref } from "vue";
import SearchIcon from "./icons/SearchIcon.vue";
import { moviesStore } from "../stores/movies";
const store = moviesStore();

const keyword = ref(localStorage.getItem("keyword") ?? "");
const isRecent = ref(localStorage.getItem("isRecent") == "true" ? true : false);
const recents = ref(
  localStorage.getItem("recents")
    ? JSON.parse(localStorage.getItem("recents"))
    : []
);
const handleSearch = () => {
  localStorage.setItem("keyword", keyword.value);
  localStorage.setItem("isRecent", true);

  isRecent.value = true;
  let str = keyword.value.toLowerCase();
  str = str.trim();
  if (keyword.value) {
    const cek = recents.value.filter((item) => item == str);
    if (cek.length < 1) {
      recents.value.push(str);
      localStorage.setItem("recents", JSON.stringify(recents.value));
    }
    store.getAllMovies(str);
  }
};
</script>
<template lang="">
  <form @submit.prevent="handleSearch">
    <div class="relative text-gray-300 w-full">
      <input
        type="text"
        placeholder="search movie here..."
        class="w-full px-14 py-3 rounded-md bg-stone-700 border border-slate-400 focus:ring focus:ring-slate-400 focus:ring-slate-400/50 md:text-lg lg:w-6/6 lg:text-sm lg:px-10"
        v-model="keyword"
        @keydown.enter.prevent="handleSearch"
      />
      <SearchIcon />
    </div>
  </form>
</template>

<style></style>
