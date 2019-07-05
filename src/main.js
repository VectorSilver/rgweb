// 入口文件
import Vue from 'vue'

// 引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入app根组件
import App from './App.vue'

import router from './router'
import store from './store'


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
