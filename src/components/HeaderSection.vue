<script setup>
import search from "./searchMovie.vue";
</script>
<template lang="">
  <div class="header bg-stone-600 p-7 flex">
    <div>
      <h1 class="text-3xl font-bold">MOvieSHub</h1>
    </div>
      <search />
    <div class="header-right">
      <ul class="header-links">
        <li>Home</li>
        <li>Bookmarked</li>
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
