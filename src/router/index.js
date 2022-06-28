import {createRouter, createWebHistory} from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home/Index.vue'

const routerHistory = createWebHistory()

// const Home = () => import('views/home/Home')
// const Category = () => import('views/category/Category')
// const Cart = () => import('views/cart/Cart')
// const Profile = () => import('views/profile/Profile')
// const Detail = () => import('views/detail/Detail')



  const routes = [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [ 
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/topic',
          name: 'Topic',
          component: () => import('../views/Topic.vue')
        }, 
        {
          path: '/mine',
          name: 'Mine',
          component:() => import('../views/Mine.vue')
        }, 
        {
          path: '/search',
          name: 'Search',
          component: () => import('../views/Search.vue')
        },
      ],
    },
    {
      path: '/more/:type',
      name: 'More',
      component: () => import('../views/Home/MusicMore.vue')
    },
    {
      path: 'details/:id',
      name: 'Details',
      component: () => import('../views/Home/MusicDetails.vue') 
    }
    
] 
    

//2.创建router
const router = createRouter({
   history: routerHistory,
   mode: 'hash',
   base: process.env.BASE_URL,
   routes,
   linkActiveClass: 'active'
})

export default router