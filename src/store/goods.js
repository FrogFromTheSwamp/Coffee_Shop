import { v4 as uuidv4 } from "uuid";

const goods = {
  state: {
    goods: [],
  },

  actions: {
    setGoodsData({commit}, data) {
      commit('setGoodsData', data)
    }
  },

  mutations: {
    setGoodsData(state, data) {
      state.goods = data
    }
  },

  getters: {
    getGoods(state) {
      return state.goods;
    },
    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === id)
      }
    }
  },
};

export default goods;
