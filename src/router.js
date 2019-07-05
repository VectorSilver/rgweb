import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserLogin from './components/UserManagement/UserLogin'
import Register from './components/UserManagement/Register'
import MyRG from './components/UserManagement/MyRG'
import MyInfo from './components/UserManagement/MyRG/MyInfo'
import ChangePass from './components/UserManagement/MyRG/ChangePass'
import FindPass from './components/UserManagement/FindPass'

Vue.use(Router)

export default new Router({
  // 配置路由匹配规则
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
    },
    {
      path: '/myRG',
      name: 'myRG',
      component: MyRG,
      children:[  // 嵌套子路由
        {
          path: '/myInfo',
          name: 'myInfo',
          component: MyInfo
        },
        {
          path: '/changePass',
          name: 'changePass',
          component: ChangePass
        }
      ]
    },
    {
      path: '/findPass',
      name: 'findPass',
      component: FindPass
    }
  ]
})
