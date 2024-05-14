import { createRouter, createWebHistory } from 'vue-router'
import ConsoleView from '../views/ConsoleView.vue'
import DesktopView from '@/views/DesktopEnvironmentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'desktop',
      component: DesktopView
    },
    {
      path: '/console',
      name: 'console',
      component: ConsoleView
    }
  ]
})

export default router
