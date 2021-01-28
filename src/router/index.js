import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/dashboard/')
      },
      {
        path: '/tarefas',
        component: () => import('../views/tarefas/')
      },
      {
        path: '/projetos',
        component: () => import('../views/projetos/')
      },
      {
        path: '/quadros',
        component: () => import('../views/quadros/')
      },
      {
        path: '/gantt',
        component: () => import('../views/gantt/')
      },
      {
        path: '/pastas',
        component: () => import('../views/pastas/')
      }
    ]
  },
  {
    path: '/about',
    name: 'About'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
