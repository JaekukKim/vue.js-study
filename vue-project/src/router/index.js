/* import는 범용적으로 쓸 수 있는 것들을 하는게 좋아보인다. */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingTextarea from '../views/DataBindingTextArea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckBox from '../views/DataBindingCheckBox.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingAttribute from '../views/DataBindingAttribute.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingStyle2 from '../views/DataBindingStyle2.vue'
import DataBindingList from '../views/DataBindingList.vue'
import RenderingVif from '../views/RenderingVif.vue'
import EventClick from '../views/EventClick.vue'
import EventChange from '../views/EventChange.vue'
import Computed from '../views/Computed.vue'
import Watch from '../views/Watch.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import boardList from '../views/board/boardList.vue'

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
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'databindingcheckbox',
    component: DataBindingCheckBox
  },
  {
    path: '/radio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/grim',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute
  },
  {
    path: '/button',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/class1',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/inline',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/inline2',
    name: 'DataBindingStyle2',
    component: DataBindingStyle2
  },
  {
    path: '/productlist',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/vif',
    name: 'RenderingVif',
    component: RenderingVif
  },
  {
    path: '/event1',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/event2',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/getList',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path : '/boardListVue',
    name : 'boardList',
    component : boardList
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
