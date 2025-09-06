// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import routers from './router'
import { useRouter } from 'vue-router'
createApp(App).use(createPinia())
createApp(App).use(routers).mount('#app')
const router=useRouter()
