<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// トップページに戻る関数
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-[calc(100vh-230px)] flex items-center justify-center px-4">
    <div class="max-w-lg w-full bg-white p-6 md:p-10 rounded shadow text-center">
      <h1 class="text-3xl font-bold text-green-600 mb-4">送信完了</h1>
      <p class="text-gray-700 mb-6">
        お問い合わせ内容を受け付けました。<br />
        返信には少々お時間をいただく場合があります。
      </p>
      <button
        @click="goHome"
        class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        トップページに戻る
      </button>
    </div>
  </div>
</template>

<style scoped></style>
