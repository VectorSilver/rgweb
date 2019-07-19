import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserLogin from './components/UserManagement/UserLogin'
import Register from './components/UserManagement/Register'
import MyRG from './components/UserManagement/MyRG'
import MyInfo from './components/UserManagement/MyRG/MyInfo'
import ChangePass from './components/UserManagement/MyRG/ChangePass'
import FindPass from './components/UserManagement/FindPass'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

import Background from './views/backgroud/Background'
import AddGoods from './views/backgroud/GoodsManagement/AddGoods'
import FindGoods from './views/backgroud/GoodsManagement/FindGoods'
import AddGoodsType from './views/backgroud/GoodsType/AddGoodsType'
import FindGoodsType from './views/backgroud/GoodsType/FindGoodsType'
import AddGoodsDesc from './views/backgroud/GoodsDesc/AddGoodsDesc'
import FindGoodsDesc from './views/backgroud/GoodsDesc/FindGoodsDesc'
import Cms from './views/backgroud/ContentManagement/CMS'
import Categories from './views/backgroud/ContentManagement/Categories'
import OrderManagement from './views/backgroud/OrderManagement/OrderManagement'
import UserList from './views/backgroud/UserManagement/UserList'

Vue.use(Router)

export default new Router({

  // 配置路由匹配规则
  routes: [
    {
      path: '/', 
      redirect: '/home' //路由重定向
    },
    {
      path: '/home',
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
          path: '/myRG/myInfo',
          name: 'myInfo',
          component: MyInfo
        },
        {
          path: '/myRG/changePass',
          name: 'changePass',
          component: ChangePass
        }
      ]
    },
    {
      path: '/findPass',
      name: 'findPass',
      component: FindPass
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/background',
      name: 'background',
      component: Background,
      children:[  // 嵌套子路由
        {
          path: '/background/addGoods',
          name: 'addGoods',
          component: AddGoods
        },
        {
          path: '/background/findGoods',
          name: 'findGoods',
          component: FindGoods
        },
        {
          path: '/background/addGoodsType',
          name: 'addGoodsType',
          component: AddGoodsType
        },
        {
          path: '/background/findGoodsType',
          name: 'findGoodsType',
          component: FindGoodsType
        },
        {
          path: '/background/addGoodsDesc',
          name: 'addGoodsDesc',
          component: AddGoodsDesc
        },
        {
          path: '/background/findGoodsDesc',
          name: 'findGoodsDesc',
          component: FindGoodsDesc
        },
        {
          path: '/background/cms',
          name: 'cms',
          component: Cms
        },
        {
          path: '/background/categories',
          name: 'categories',
          component: Categories
        },
        {
          path: '/background/orderManagement',
          name: 'orderManagement',
          component: OrderManagement
        },
        {
          path: '/background/userList',
          name: 'userList',
          component: UserList
        }
      ]
    }
  ]
})
