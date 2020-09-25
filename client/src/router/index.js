import Vue from 'vue'
import VueRouter from 'vue-router'
import Music from '../components/Music.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
  {
    path: '/Music',
    name: 'Music',
    component: Music
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: '/Register',
    component: Register
  },
  {
    path: '/Logout',
    name: '/Logout',
    component: Logout
  },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
