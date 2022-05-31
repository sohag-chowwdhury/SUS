import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    section: "",
    error: null,
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    },
  },
  actions: {

    divCheck({ commit }, payload) {
      console.log("payload", payload.value)
      commit('clearError')
      this.state.section = payload.value

    },

  },
  getters: {
    section(state) {
      return state.section
    },
    error(state) {
      return state.error
    },

  }
})