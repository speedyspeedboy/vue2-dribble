import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HeaderBar from '../components/HeaderBar'
import HomeView from '../views/HomeView'
import Home from '../views/Home'
import RecentView from '../views/RecentView'
import MyView from '../views/MyView'

Vue.use(Router)

export default new Router({
  routes: [
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
          path: '/home/my',
          component: MyView
        }
      ]
    }
  ]
})
