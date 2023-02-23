<script setup>
const props = defineProps({
  movie: "",
});

const title = props.movie.Title.substr(0, 15) + "...";
</script>

<template lang="">
  <div class="px-4">
    <div
      class="max-w-sm text-gray-50 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div v-if="movie.Poster != 'N/A'" class="w-full h-full">
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          class="rounded-t-lg w-full"
        />
      </div>
      <div class="py-5 px-2">
        <h5
          :title="movie.Title"
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ title }}
        </h5>
        <span>{{ movie.Year }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
