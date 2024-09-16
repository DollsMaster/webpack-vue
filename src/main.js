import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naiveUi from 'naive-ui'
import '@/styles/index.scss'

const createApps = createApp(App)
createApps.use(router)
createApps.use(naiveUi)
createApps.use(store)
createApps.mount('#app')