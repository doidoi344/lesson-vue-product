<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h1>サンプルページ</h1>
    <div>現在のカウント数：{{ counterStore.count }}</div>
    <div>倍にしたカウント数：{{ counterStore.doubleCount }}</div>
    <button @click="counterStore.increment()">+1増加</button>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
