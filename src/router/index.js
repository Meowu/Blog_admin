import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Login = () => import('../components/Login.vue')
const Home = () => import('../components/Home.vue')
const ArticleList = () => import('../components/ArticleList.js')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Home,
      children: [
        {
          path: '/articles',
          component: ArticleList
        }
      ]
    }
  ]
})
