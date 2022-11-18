import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import Movie from './Movie'
import NotFound from'./NotFound'

export default createRouter({
  // hash, history
  // https:// google.com/#/search
  history: createWebHashHistory(),

  scrollBehavior() {
    return { top: 0 }
  }
,

  // pages
  // https:google.com/about
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]  
})