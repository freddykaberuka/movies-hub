<script setup>
import SearchIcon from "./icons/SearchIcon.vue";
</script>
<template lang="">
  <form>
    <div class="relative text-gray-300">
      <input
        type="text"
        placeholder="search movie here..."
        class="w-full px-14 py-3 rounded-md bg-stone-700 border border-slate-400 focus:ring focus:ring-slate-400 focus:ring-slate-400/50 md:text-lg lg:w-6/6 lg:text-sm lg:px-10"
      />
      <SearchIcon />
    </div>
  </form>
</template>

<style></style>
