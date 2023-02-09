/* import는 범용적으로 쓸 수 있는 것들을 하는게 좋아보인다. */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    /* css, js 등 모든 자원들이 합쳐진걸 component에 담는다. 각각의 자원을 분할해서 담을수도 있다. */
  },

  /* DataBinding.vue를 함수실행식 임포팅 */
  // {
  //   path : '/databinding', /* app.vue의 (꼭 이게 아니더라도 실행 링크)  <router-link to="/databinding">DataBinding - Title</router-link> 의 to=""와 같아야함. */
  //   name : 'title',
  //   component : () => import('../views/DataBinding.vue')
  //   
  // }

  /* import DataBinding from '../views/DataBinding.vue' 후 경로설정*/
  {
    path : '/databinding',
    name : 'DataBinding',
    component : DataBinding
  },
  {
    path : '/databindinghtml',
    name : 'DataBindingHtml',
    component : () => import('../views/DataBindingHtml')
  },
  {
    path : '/inputText',
    name : 'inputText',
    component : () => import('../views/DataBindingInputText')
  },
  {
    path : '/textarea',
    name : 'textarea',
    component : () => import('../views/DataBindingTextArea')
  },
  {
    path : '/select',
    name : 'select',
    component : () => import('../views/DataBindingSelect')
  },
  {
    path : '/checkbox',
    name : 'checkbox',
    component : () => import('../views/DataBindingCheckBox')
  },
  {
    path : '/radio',
    name : 'radio',
    component : () => import('../views/DataBindingRadio')
  },
  {
    path : '/imgsrc',
    name : 'imgsrc',
    component : () => import('../views/DataBindingAttribute')
  },
  {
    path : '/button',
    name : 'button',
    component : () => import('../views/DataBindingButton')
  },
  {
    path : '/class1',
    name : 'class1',
    component : () => import('../views/DataBindingClass')
  },
  {
    path : '/style',
    name : 'style',
    component : () => import('../views/DataBindingStyle')
  },
  {
    path : '/style2',
    name : 'style2',
    component : () => import('../views/DataBindingStyle2')
  },
  {
    path : '/list1',
    name : 'list',
    component : () => import('../views/DataBindingList')
  },
  {
    path : '/vif',
    name : 'vif',
    component : () => import('../views/RenderingVif')
  },
  {
    path : '/clickevent',
    name : 'clickEvent',
    component : () => import('../views/vue_event/EventClick')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
