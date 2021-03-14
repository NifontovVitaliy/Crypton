import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/people',
    component: () => import('../views/People.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  },
  {
    path: '/planets',
    name: 'Planets',
    component: () => import('../views/Planets.vue')
  },
  {
    path: '/films',
    name: 'Films',
    component: () => import('../views/Films.vue')
  },
  {
    path: '/species',
    name: 'Species',
    component: () => import('../views/Species.vue')
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: () => import('../views/Vehicles.vue')
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import('../views/Starships.vue')
  },  
  {
    path: '/favoritepeople',
    name: 'Liked People',
    component: () => import('../views/FavoritePeople.vue')
  },
]

const router = new VueRouter({  
  routes
})
export default router
