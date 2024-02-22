import './assets/main.css'
// import store from '@/stores/index.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// createApp(App).use(store).mount('#app');

app.use(createPinia())
app.use(router)

app.mount('#app')
