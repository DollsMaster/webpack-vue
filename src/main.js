import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import '@/styles/index.scss'

const createApps = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  createApps.component(key, component)
}
createApps.use(router)
createApps.use(store)
createApps.use(ElementPlus)
createApps.mount('#app')