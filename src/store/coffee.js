const coffee = {
  state: {
    coffee: [],
    serchValue: '',
    sortValue: '',
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data
    },
    setSortValue(state, value) {
      state.sortValue = value
    },
    setSearchValue(state, value) {
      state.serchValue = value
    }

  },
  actions: {
    setCoffeeData({commit}, data) {
      commit('setCoffeeData', data)
    },
    setSearchValue({commit}, value) {
      commit('setSearchValue', value)
    },
    setSortValue({commit}, value) {
      commit('setSortValue', value)
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
