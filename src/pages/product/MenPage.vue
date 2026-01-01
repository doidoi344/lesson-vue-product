<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types/product'

const products: Product[] = [
  {
    id: 1,
    name: 'オックスフォードシャツ',
    price: 6480,
    image: '/images/men_1.jpg',
    tags: ['NEW'],
  },
  {
    id: 2,
    name: 'テーパードスラックス',
    price: 8980,
    image: '/images/men_2.jpg',
    tags: ['人気'],
  },
  {
    id: 3,
    name: 'クルーネックニット',
    price: 4980,
    image: '/images/men_3.jpg',
    tags: ['SALE'],
  },
]
</script>

<template>
  <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </section>
</template>
