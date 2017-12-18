import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // State
  state: {
    name: 'Joey',
    age: 37
  },

  // Functions that return state
  getters: {
    name: state => {
      return state.name
    },
    age: state => {
      return state.age
    }
  },

  // Mutate State
  mutations: {
    toCaps: (state) => {
      state.name = state.name.toUpperCase()
    }
  },

  // Commit Mutations
  actions: {
    toCaps: ({ commit }) => {
      commit('toCaps')
    }
  }
})
