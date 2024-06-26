
import Vue from 'vue';
import App from './App.vue'
import vueRouter from "./router";
require('@/styles/index.scss')
new Vue({
    el: '#app',
    router: vueRouter,
    render: h => h(App)
})