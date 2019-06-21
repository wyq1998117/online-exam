import  Vue from 'vue'
import  Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//1.使用vuex
Vue.use(Vuex);

//2.对外输出store对象，所有东西都是通过store管理
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
