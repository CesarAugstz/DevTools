<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <main class="mt-8 mb-8">
    <router-view />
  </main>
</template>

<style scoped></style>
