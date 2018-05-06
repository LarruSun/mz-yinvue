import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Movies from '@/views/movie/Movies'
import Address from '@/views/movieAddress/MoviesAddress'
import NotFound from '@/components/Notfound'
import MoviesChild from '@/components/moviesAddressComponent/MoviesChild'
import DetaileInfo from '@/components/detaile/detaileInfo.vue'
import MoviesInfoAfter from '@/components/movieComponent/MoviesInfoAfter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {
      path: '/moviesInfoAfter',
      name: 'moviesInfoAfter',
      component: MoviesInfoAfter
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/moviesChild',
      name: 'moviesChild',
      component: MoviesChild
    },
    {
      path: '/film/detaileInfo/:id',
      name: 'detaileInfo',
      component: DetaileInfo
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movies/:flag',
      name: 'movies',
      component: Movies
    },
    {path:'**',component:NotFound}
  ]
})
