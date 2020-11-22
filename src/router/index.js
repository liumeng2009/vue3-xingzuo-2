import { createRouter, createWebHistory } from 'vue-router'
import Today from '../views/Today.vue'

const routes = [
  {
    path: '/',
    name: 'today',
    component: Today
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tomorrow.vue')
  },
  {
    path: '/week',
    name: 'week',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Week.vue')
  },
  {
    path: '/month',
    name: 'month',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Month.vue')
  },
  {
    path: '/year',
    name: 'year',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Year.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
