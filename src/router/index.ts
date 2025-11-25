import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ReactivityView from '@/views/ReactivityView.vue'
import ComputedView from '@/views/ComputedView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/reactivity', component: ReactivityView },
  { path: '/computed', component: ComputedView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
