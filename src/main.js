import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



import '@/styles/index.scss'

const createApps = createApp(App)

createApps.use(router)
createApps.use(store)
createApps.use(ElementPlus)
createApps.mount('#app')