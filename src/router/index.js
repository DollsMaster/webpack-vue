import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'
const routes= [

  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout/layout.vue'),
    children: [
      {
        path: '/sign',
        component: () => import('@/views/sign/sign.vue')
      },
      {
        path: '/home',
        component: () => import('@/views/home/home.vue')
      }
    ]
  }


]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router