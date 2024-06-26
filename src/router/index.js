import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../views/layout.vue')
    }
]
const vueRouter = new VueRouter({
    routes
})
export default vueRouter;