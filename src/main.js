
import Vue from 'vue';
import App from './App.vue'
import vueRouter from "./router";
require('@/styles/common.css')
new Vue({
    el: '#app',
    router: vueRouter,
    render: h => h(App)
})