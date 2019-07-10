// 项目的JS入口文件
import Vue from 'vue'
// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入app根组件
import App from './App.vue'
// 导入路由组件
import router from './router'
// 引入vuex文件
import store from './store'
// 引入axios组件
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios,axios);
Vue.use(ElementUI);

Vue.config.productionTip = false

// 实例化vue对象
new Vue({
  router, // 挂载路由对象
  store,  // 挂载store对象
  render: h => h(App)
}).$mount('#app')
