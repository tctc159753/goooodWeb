import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index',
    component: () =>import('../views/index.vue'),
    children: [
      {
        path: '',
        redirect: '/home',// 重新连接为 home 页面
      },
      {// 主页 组件
        path: '/home',
        name: 'home',
        component: () => import("../views/Home.vue")
      },
      // {// 订单 组件
      //   path: "/order",
      //   name: "order",
      //   component: () => import("../views/Order.vue")
      // },
      // {// 我的 组件
      //   path: "/me",
      //   name: "me",
      //   component: () => import("../views/Me.vue")
      // },
      // {// 地址 组件
      //   path: "/address",
      //   name: "address",
      //   component: () => import("../views/Address.vue")
      // },
      // {// 城市 组件
      //   path: "/city",
      //   name: "city",
      //   component: () => import("../views/City.vue")
      // }
  ]
  },
  // {// 登陆 组件
  //   path: '/login',
  //   name: 'login',
  //   component: () =>import('../views/Login.vue')
  // },
  // {// 搜索 组件
  //   path: '/search',
  //   name: 'search',
  //   component: () =>import('../views/Search.vue')
  // },
  // {// 
  //   path: '/pay',
  //   name: 'pay',
  //   component: () =>import('../views/Orders/Pay.vue')
  // },
]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
