import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/pages/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/pages/home/index.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

export default router
