<script setup lang="ts">
import { useContact } from '@/composables/contact/contact'

const { name, email, message, errors, onSubmit, isSubmitting } = useContact()
</script>

<template>
  <div class="min-h-[calc(100vh-230px)] flex items-center justify-center px-4">
    <div class="w-100 w-full max-w-[650px] p-6 bg-white rounded shadow">
      <h1 class="text-2xl font-bold mb-6 text-center">お問い合わせ</h1>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <!-- 名前 -->
        <div>
          <label for="name" class="block font-medium mb-1">名前</label>
          <input
            id="name"
            v-model="name"
            type="text"
            maxlength="30"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>

        <!-- メール -->
        <div>
          <label for="email" class="block font-medium mb-1">メールアドレス</label>
          <input
            id="email"
            v-model="email"
            type="email"
            maxlength="254"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- 内容 -->
        <div>
          <label for="message" class="block font-medium mb-1">お問い合わせ内容</label>
          <textarea
            id="message"
            v-model="message"
            rows="5"
            maxlength="254"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>

        <!-- 送信ボタン -->
        <div class="text-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
