export default {
  namespaced: true,
  state: {
    topHeader: '',
    cartList: [],
  },
  mutations: {
    modifyTopHeader(state, header) {
      state.topHeader = header || '';
    },
    addCart(state, item) {
      state.cartList.push(item);
    },
    delCart(state, index) {
      // const index = state.cartList.indexOf(item);
      state.cartList.splice(index, 1);
    },
    updataNumber: (state, data) => {
      // index为操作第几个元素，key为要改变的key,value为新的值
      const { index, key, value } = data;
      state.cartList[index][key] = value;
    },
  },
  actions: {},
  getters: {
    cartList(state) {
      return state.cartList;
    },
  },
};
