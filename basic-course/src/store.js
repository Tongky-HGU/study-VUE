import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      count: 0,
      cart: [
        { id: 1, name: "거치대" },
        { id: 2, name: "충전기" },
      ],
    };
  },
  mutations: {
    //! mutation 통해서만 변경가능
    increment(state) {
      state.count = state.count + 1;
    },
  },
  getters: {
    cartCount: (state) => state.cart.length,
    cartProductACount: (state) => state.cart.filter((x) => x.id === 1).length,
  },
});

export default store;
