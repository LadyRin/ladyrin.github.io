import { createRouter, createWebHistory } from 'vue-router'
import Desktop from '@/views/DesktopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'desktop',
      component: Desktop
    }
  ]
})

export default router
