<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<style scoped></style>
