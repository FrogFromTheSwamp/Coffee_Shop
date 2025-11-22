import { v4 as uuidv4 } from "uuid";

const coffee = {
  state: {
    coffee: [],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data
    }
  },
  actions: {
    setCoffeeData({commit}, data) {
      commit('setCoffeeData', data)
    }
  },
  getters: {
    getCoffee(state) {
        return state.coffee
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === id)
      }
    }
  },
};

export default coffee;
