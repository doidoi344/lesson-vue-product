<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types/product'

const products: Product[] = [
  {
    id: 1,
    name: 'フリルブラウス',
    price: 5980,
    image: '/images/women_1.jpg',
    tags: ['NEW', '人気'],
  },
  {
    id: 2,
    name: 'ワイドパンツ',
    price: 7980,
    image: '/images/women_2.jpg',
    tags: ['再入荷'],
  },
  {
    id: 3,
    name: 'ニットカーディガン',
    price: 3000,
    image: '/images/women_3.jpg',
    tags: ['SALE'],
  },
]
</script>

<template>
  <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </section>
</template>
