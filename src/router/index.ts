import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function useRouter() {
  return router
}

export function useRoute() {
  return router.currentRoute
}

export default router
