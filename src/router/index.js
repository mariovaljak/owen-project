import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Homeview.vue'
import About from '../views/Aboutview.vue'
import Owen from '../views/owen/Owen.vue'
import MovieDetails from '../views/owen/MovieDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/owen',
    name: 'Owen',
    component: Owen
  },
  {
    path: '/owen/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
