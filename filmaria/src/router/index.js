import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Erro from '../pages/Erro.vue'
import Filme from '../pages/Filme.vue'
import Home from '../pages/Home.vue'
import MeusFilmes from '../pages/MeusFilmes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: 'erro',
    component: Erro
  },
  {
    path: '/filme/:id',
    name: 'filme',
    component: Filme,
    props: true
  },
  {
    path: '/salvos',
    name: 'salvos',
    component: MeusFilmes
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
