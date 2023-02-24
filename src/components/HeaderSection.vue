<script setup>
import search from "./searchMovie.vue";
</script>
<template lang="">
  <div class="header bg-stone-800 p-4 bottom-1 flex flex-wrap">
    <div>
      <router-link to="/">
        <h1
          class="text-xl font-semibold tracking-wider text-gray-200 md:text-2xl"
        >
          MOvieSHub
        </h1>
      </router-link>
    </div>
    <search />
    <div class="header-right">
      <ul class="header-links">
        <router-link
          to="/bookmark"
          class="flex text-gray-200 items-center cursor-pointer"
          ><li>Bookmarked</li></router-link
        >
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header {
  display: flex;
  justify-content: space-between;
}
.header-right {
  display: flex;
}
.header-links {
  display: flex;
}
.header-links li {
  list-style: none;
  padding-right: 10px;
}
</style>
