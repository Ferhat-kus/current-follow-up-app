import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSidebar: true
  },
  
  mutations: {
    toggleSidebar(state) {
      state.isSidebar =!state.isSidebar
    }
  },
  actions: {
  },
  modules: {
  }
})
