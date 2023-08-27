import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import router from '../router/index'

const pinia = createPinia()


createApp(App).use(router).use(pinia).use(Notifications).mount('#app')
