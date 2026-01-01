import { createRouter, createWebHistory } from 'vue-router'
import SampleView from '../views/SampleView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductList from '@/pages/product/ProductList.vue'
import WomenPage from '@/pages/product/WomenPage.vue'
import MenPage from '@/pages/product/MenPage.vue'
import KidsPage from '@/pages/product/KidsPage.vue'
import OtherPage from '@/pages/product/OtherPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sample',
      name: 'sample',
      component: SampleView,
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: ProductList,
      children: [
        {
          path: 'women',
          component: WomenPage,
        },
        {
          path: 'men',
          component: MenPage,
        },
        {
          path: 'kids',
          component: KidsPage,
        },
        {
          path: 'other',
          component: OtherPage,
        },
      ],
    },
  ],
})

export default router
