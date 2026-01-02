import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/constants'
import HomeView from '@/views/HomeView.vue'
import ProductList from '@/pages/product/ProductList.vue'
import WomenPage from '@/pages/product/WomenPage.vue'
import MenPage from '@/pages/product/MenPage.vue'
import KidsPage from '@/pages/product/KidsPage.vue'
import OtherPage from '@/pages/product/OtherPage.vue'
import ContactPage from '@/pages/contact/ContactPage.vue'
import ContactCompletePage from '@/pages/contact/ContactCompletePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      name: 'home',
      component: HomeView,
    },
    {
      path: ROUTES.PRODUCTS.ROOT,
      name: 'products',
      component: ProductList,
      children: [
        {
          path: ROUTES.PRODUCTS.CHILDREN.WOMEN,
          component: WomenPage,
        },
        {
          path: ROUTES.PRODUCTS.CHILDREN.MEN,
          component: MenPage,
        },
        {
          path: ROUTES.PRODUCTS.CHILDREN.KIDS,
          component: KidsPage,
        },
        {
          path: ROUTES.PRODUCTS.CHILDREN.OTHER,
          component: OtherPage,
        },
      ],
    },
    {
      path: ROUTES.CONTACT.ROOT,
      name: 'contact',
      component: ContactPage,
    },
    {
      path: ROUTES.CONTACT.COMPLETE,
      name: 'contactComplete',
      component: ContactCompletePage,
    },
  ],
})

export default router
