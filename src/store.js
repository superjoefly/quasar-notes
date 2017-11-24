import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: 'Joey',
    age: 37
  },

  getters: {
    name: state => {
      return state.name
    },
    age: state => {
      return state.age
    }
  },

  mutations: {
    toCaps: (state) => {
      state.name = state.name.toUpperCase()
    }
  },

  actions: {
    toCaps: ({ commit }) => {
      commit('toCaps')
    }
  }
})
