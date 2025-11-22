import { v4 as uuidv4 } from "uuid";
const bestsellers = {
  state: {
    bestsellers: [],
  },
  actions: {
    setBestsellersData({commit}, data) {
      commit('setBestsellersData', data)
    }
  },

  mutations: {
    setBestsellersData(state, data) {
      state.bestsellers = data
    }
  },

  getters: {
    getBestsellers(state) {
        return state.bestsellers
    }
  },
};

export default bestsellers;
