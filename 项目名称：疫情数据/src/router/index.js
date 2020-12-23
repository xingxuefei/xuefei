import Vue from 'vue'
import VueRouter from 'vue-router'
// import Heyui from 'heyui'
import Index from '../views/Index.vue'
// import Table from '../components/Table'
Vue.use(VueRouter)
// Vue.use(Heyui)
////////
import Test from '../test/test'
//////
import Register from '../components/register'
import Footer from '../components/footer'
import Login from '../components/login'
import Subscribe from '../views/Subscribe'
import Question from '../components/question'
import Yuyue from '../components/yuyue'
const routes = [
  {
    path:'/yuyue',
    component:Yuyue
  },
  {
    path:'/test',
    component:Test
  },
  {
    path:'/question',
    component:Question
  },
  {
    path:'/subscribe',
    component:Subscribe
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/footer',
    component:Footer
  },
  {
    path:'/register',
    //懒加载
    component:Register
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
