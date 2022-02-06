import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-plant',
    name: 'Add new plant',
    // route level code-splitting
    // this generates a separate chunk (new-plant.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "new-plant" */ '../views/AddPlant.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
