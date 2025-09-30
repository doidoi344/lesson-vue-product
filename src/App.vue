<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="nav-link">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/sample">Sample</RouterLink>
    </nav>
  </header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.nav-link {
  padding: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
}
.wrapper {
  padding: 0.5rem;
}
</style>
