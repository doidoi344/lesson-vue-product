<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <li
    class="basis-1/4 text-center py-3 cursor-pointer border-b-2"
    :class="
      isActive
        ? 'border-blue-600 text-blue-600'
        : 'border-transparent hover:text-blue-600 hover:border-blue-600'
    "
  >
    {{ text }}
  </li>
</template>

<style scoped></style>
