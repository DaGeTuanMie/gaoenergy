import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/packages/home/Home'
import Zoology from '@/packages/zoology/Zoology'
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
    }
  ]
})
