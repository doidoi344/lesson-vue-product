<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useProductList } from '@/composables/productList'
import CategoryTabItem from '@/components/CategoryTabItem.vue'

const { pageSetUp, onClickTab, activeTab } = useProductList()

onBeforeMount(() => {
  pageSetUp()
})
</script>

<template>
  <h1 class="text-2xl mb-4">カテゴリー別</h1>
  <nav class="border-b border-gray-200 mb-6">
    <ul class="flex flex-row">
      <CategoryTabItem
        :is-active="activeTab === 'WOMEN'"
        :text="'WOMEN'"
        @click="onClickTab('WOMEN')"
      />
      <CategoryTabItem :is-active="activeTab === 'MEN'" :text="'MEN'" @click="onClickTab('MEN')" />
      <CategoryTabItem
        :is-active="activeTab === 'KIDS'"
        :text="'KIDS'"
        @click="onClickTab('KIDS')"
      />
      <CategoryTabItem
        :is-active="activeTab === 'OTHER'"
        :text="'OTHER'"
        @click="onClickTab('OTHER')"
      />
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped></style>
