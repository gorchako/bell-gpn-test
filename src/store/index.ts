import Vue from "vue";
import Vuex from "vuex";
import fillFakeData from "@/api";
import { FakeItem } from "@/interface/FakeItem";

interface State {
  items: Array<FakeItem>;
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  } as State,
  getters: {
    getStateItems(state) {
      return state.items;
    },
  },
  mutations: {
    setStateItems(state, payload: Array<FakeItem>) {
      state.items = payload;
    },
  },
  actions: {
    async uploadStateItems({ state, commit }) {
      const result = await new Promise((res) => {
        setTimeout(() => {
          res(fillFakeData());
        }, 1000);
      });
      console.log("result", result);
      commit("setStateItems", result);
    },
  },
  modules: {},
});
