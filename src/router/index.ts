import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'
import LoginView from '../views/LoginView.vue'

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
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true } // Mark this route as requiring authentication
    }
  ]
})

export default router
