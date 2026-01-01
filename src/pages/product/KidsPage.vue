<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types/product'

const products: Product[] = [
  {
    id: 1,
    name: 'プリントTシャツ',
    price: 1980,
    image: '/images/kids_1.jpg',
    tags: ['NEW'],
  },
  {
    id: 2,
    name: 'デニムショートパンツ',
    price: 2480,
    image: '/images/kids_2.jpg',
    tags: ['人気'],
  },
  {
    id: 3,
    name: 'フード付きパーカー',
    price: 2980,
    image: '/images/kids_3.jpg',
    tags: ['SALE'],
  },
]
</script>

<template>
  <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </section>
</template>
