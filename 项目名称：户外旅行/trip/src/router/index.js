import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import shouye from '../components/shouye'
import zixun from '../components/zixun'
import jipiao from '../components/jipiao'
import gongsi from '../components/gongsi'



Vue.use(VueRouter)

const routes = [
  {
    path: '/gongsi',
    name: 'gongsi',
    component: gongsi
  },
  {
    path: '/jipiao',
    name: 'jipiao',
    component: jipiao
  },
  {
    path: '/zixun',
    name: 'zixun',
    component: zixun
  },
  {
    path: '/shouye',
    name: 'shouye',
    component: shouye
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
