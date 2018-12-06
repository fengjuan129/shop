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
      console.log(item);
      state.cartList.push(item);
    },
    delCart(state, item) {
      const index = state.cartList.indexOf(item);
      state.cartList.splice(index, 1);
    },
    // updataNumber:(state, num)=>{

    // },
  },
  actions: {},
  getters: {
    cartList(state) {
      return state.cartList;
    },
  },
};
