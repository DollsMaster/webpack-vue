import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'
const routes= [

  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('../views/layout/layout.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/home.vue')
      },{
        name: 'sign',
        path: '/sign',
        component: () => import('@/views/sign/sign.vue')
      }
    ]
  }


]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
