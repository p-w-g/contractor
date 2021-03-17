import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Offer from '../views/NewOffer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/offer',
    name: 'offer',
    component: Offer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
