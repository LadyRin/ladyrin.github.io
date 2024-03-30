import { createRouter, createWebHistory } from 'vue-router'
import ConsoleView from '../views/ConsoleView.vue'
import DesktopView from '@/views/DesktopEnvironmentView.vue'
import AboutPage from '@/components/pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'console',
      component: ConsoleView
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: DesktopView
    },
    {
      path: '/debug',
      name: 'debug',
      component: AboutPage
    }
  ]
})

export default router
