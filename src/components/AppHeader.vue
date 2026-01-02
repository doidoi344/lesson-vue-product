<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ROUTES } from '@/constants'
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
      <RouterLink class="text-lg font-semibold hover:text-indigo-500" :to="ROUTES.PRODUCTS.ROOT"
        >商品一覧</RouterLink
      >
      <RouterLink
        class="text-lg font-semibold hover:text-indigo-500"
        :to="ROUTES.PRODUCTS.MANAGEMENT"
        >商品管理</RouterLink
      >
      <RouterLink class="text-lg font-semibold hover:text-indigo-500" :to="ROUTES.CONTACT"
        >お問い合わせ</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped></style>
