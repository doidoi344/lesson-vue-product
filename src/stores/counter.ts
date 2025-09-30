import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // piniaでは「state」と呼ぶ
  const count = ref(0)
  // piniaでは「getter」と呼ぶ
  const doubleCount = computed(() => count.value * 2)
  // piniaでは「action」と呼ぶ
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
