import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/about', component: () => import('./views/About.vue') },
    { path: '/experience', component: () => import('./views/Experience.vue') },
    { path: '/projects', component: () => import('./views/Projects.vue') },
    { path: '/contact', component: () => import('./views/Contact.vue') }
  ]
})

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
