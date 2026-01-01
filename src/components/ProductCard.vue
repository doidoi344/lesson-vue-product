<script setup lang="ts">
type Product = {
  id: number
  name: string
  price: number
  image: string
  tags: string[]
}

defineProps<{
  product: Product
}>()
</script>

<template>
  <article
    class="group rounded-lg overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition"
  >
    <!-- 画像 -->
    <div class="relative aspect-square overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="h-full w-full object-cover group-hover:scale-105 transition-transform"
      />

      <!-- タグ -->
      <div class="absolute top-2 left-2 flex flex-wrap gap-1">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="text-xs bg-black text-white px-2 py-0.5 rounded"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- 商品情報 -->
    <div class="p-4 space-y-1">
      <h3 class="text-sm font-medium text-gray-900 line-clamp-2">
        {{ product.name }}
      </h3>
      <p class="text-sm font-semibold text-gray-800">¥{{ product.price.toLocaleString() }}</p>
    </div>
  </article>
</template>
