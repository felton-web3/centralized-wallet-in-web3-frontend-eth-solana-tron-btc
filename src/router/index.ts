import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('../views/DepositView.vue'),
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import('../views/VipView.vue'),
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/MeView.vue'),
    },
  ],
})

export default router
