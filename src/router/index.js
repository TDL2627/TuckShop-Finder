import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/area',
    name: 'Area',
    // route level code-splitting
    // this generates a separate chunk (Area.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Area" */ '../views/Area.vue')
  },
  {
    path: '/athlone',
    name: 'Athlone',
    component: () => import(/* webpackChunkName: "Area" */ '../views/area/Athlone.vue')
  },
  {
    path: '/silvertown',
    name: 'Silvertown',
    component: () => import(/* webpackChunkName: "Area" */ '../views/area/sub/Silvertown.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
