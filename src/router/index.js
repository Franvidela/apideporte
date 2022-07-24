import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/event',
    name: 'event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EventView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFoundView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
