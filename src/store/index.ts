import Vue from "vue";
import Vuex from "vuex";
import fillFakeData from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    setStateItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async getStateItems() {
      const result = await fillFakeData();
      console.log("result", result);
    },
  },
  modules: {},
});
