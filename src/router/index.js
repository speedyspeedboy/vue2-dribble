import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HeaderBar from '../components/HeaderBar'
import HomeView from '../views/HomeView'
import Home from '../views/Home'
import RecentView from '../views/RecentView'
import DetailsView from '../views/DetailsView'
import NotFoundComponent from '../views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent },
    {
      path: '/',
      name: 'HomeView',
      redirect: './home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          redirect: './homepage'
        },
        {
          path: '/home/homepage',
          component: HomeView
        },
        {
          path: '/home/recent',
          component: RecentView
        },
        {
          path: '/home/details/:id',
          component: DetailsView
        }
      ]
    }
  ]
})
