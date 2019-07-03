import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserLogin from './components/UserManagement/UserLogin'
import Register from './components/UserManagement/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userLogin',
      name: 'userLogin',
      component: UserLogin
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
