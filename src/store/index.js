import Vue from 'vue';
import Vuex from 'vuex';
import shop from './module/shop';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    shop,
  },
});
