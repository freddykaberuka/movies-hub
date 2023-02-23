<script setup>
import Header from "./components/HeaderSection.vue";
// import HomeView from "./views/HomeView.vue";
</script>
<template>
  <Header />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
