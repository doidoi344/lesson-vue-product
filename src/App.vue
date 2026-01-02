<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import { ROUTES } from './constants'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const isHome = computed(() => route.path === ROUTES.HOME)
</script>

<template>
  <div :class="isHome ? ' main-visual' : 'main-back'">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <AppHeader />
      <RouterView />
      <AppFooter v-if="!isHome" />
    </div>
  </div>
</template>

<style scoped></style>
