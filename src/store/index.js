import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
})

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSidebar: false,
    myCompanyId: null,
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebar = !state.isSidebar;
    },
    setMyCompanyId(state, id) {
      state.myCompanyId = id;
    },
  },
  actions: {

  },
  plugins: [vuexPersist.plugin],
});
