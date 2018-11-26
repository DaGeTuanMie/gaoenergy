import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/packages/home/Home'
import Zoology from '@/packages/zoology/Zoology'
import Forus from '@/packages/forus/Forus'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/zoology',
      name: 'Zoology',
      component: Zoology
    },
    {
      path: '/forus',
      name: 'Forus',
      component: Forus
    }
  ]
})
