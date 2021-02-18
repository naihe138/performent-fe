import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/performance',
    name: 'Performance',
    component: () => import(/* webpackChunkName: "performance" */ '../pages/performance/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
