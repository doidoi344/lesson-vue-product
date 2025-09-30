<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="mb-4 flex items-center justify-between py-4 md:py-8">
    <a
      href="/"
      class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
      aria-label="logo"
    >
      <svg
        width="95"
        height="94"
        viewBox="0 0 95 94"
        class="h-auto w-6 text-indigo-500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
      </svg>

      LESSON VUE
    </a>

    <nav class="hidden gap-12 lg:flex">
      <RouterLink class="text-lg font-semibold hover:text-indigo-500" to="/sample"
        >Sample Pinia</RouterLink
      >
      <RouterLink class="text-lg font-semibold hover:text-indigo-500" to="/">Dummy</RouterLink>
      <RouterLink class="text-lg font-semibold hover:text-indigo-500" to="/">Dummy</RouterLink>
      <RouterLink class="text-lg font-semibold hover:text-indigo-500" to="/">Dummy</RouterLink>
    </nav>

    <a
      href="#"
      class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
      >サンプルボタン</a
    >
  </header>
</template>

<style scoped></style>
