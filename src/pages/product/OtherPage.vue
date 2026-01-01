<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types/product'

const products: Product[] = [
  {
    id: 1,
    name: 'キャンバストートバッグ',
    price: 2980,
    image: '/images/other_1.jpg',
    tags: ['NEW'],
  },
  {
    id: 2,
    name: 'レザーキーケース',
    price: 1980,
    image: '/images/other_2.jpg',
    tags: ['人気'],
  },
  {
    id: 3,
    name: 'ニットキャップ',
    price: 1480,
    image: '/images/other_3.jpg',
    tags: ['SALE'],
  },
]
</script>

<template>
  <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </section>
</template>
