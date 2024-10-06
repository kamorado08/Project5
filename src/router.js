import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/Project5/', name: 'Home', component: HomePage },
  { path: '/Project5/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
