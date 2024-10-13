import { createMemoryHistory, createRouter } from 'vue-router'
const routes= [
  {
    path: '/',
    component: () => import('@/views/layout/layout.vue')
  }, {
    path: '/home',
    component: () => import('@/views/home/home.vue')
  }
]
const router = createRouter({
  history: createMemoryHistory(),
  routes
})
export default router