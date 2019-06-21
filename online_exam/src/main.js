/*
入口js
 */
import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
//引入路由器，把路由用起来
import router from './router'
import 'font-awesome/css/font-awesome.css'

// Vue.use(MintUI);
Vue.use(elementUI);

new Vue({
  el:'#app',
  router,
  store,
  axios,
  render:h=>h(App)//渲染出来

});
