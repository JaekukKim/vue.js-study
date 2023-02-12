import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/study01',
    name : 'study01',
    component : () => import("../views/Vue-study/Study")
  },
  {
    path: '/databindingbasic',
    name: 'databinding',
    component: () => import('../views/Vue-study/StudyDataBinding')
  },
  {
    path : '/forStateDataBinding',
    name : 'forStateDataBinding',
    component : () => import("../views/Vue-study/forStateDataBinding")
  },
  {
    path : '/eventlistner',
    name : 'eventlistner',
    component : () => import("../views/Vue-study/EventDataBinding")
  },
  {
    path : '/modal',
    name : 'modal',
    component : () => import("../views/Vue-study/Modal")
  },
  {
    path : '/exam',
    name : 'exam',
    component : () => import("../views/homework/exam")
  },
  {
    path : '/exam01Array',
    name : 'exam01Array',
    component : () => import("../views/homework/exam01Array")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
