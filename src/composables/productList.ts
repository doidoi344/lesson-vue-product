import { ref } from 'vue'
import router from '@/router'

export const useProductList = () => {
  const activeTab = ref<string>('WOMEN')

  /**
   * タブ押下時の切り替え処理
   */
  const onClickTab = (tabText: string) => {
    activeTab.value = tabText
    router.push(`/product-list/${tabText.toLowerCase()}`)
  }

  /**
   * 初期化処理
   */
  const pageSetUp = async () => {
    onClickTab(activeTab.value)
  }

  return {
    pageSetUp,
    onClickTab,
    activeTab,
  }
}
