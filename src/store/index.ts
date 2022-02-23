import Vue from "vue";
import Vuex from "vuex";
import fillFakeData from "@/api";
import { FakeItem, ItemAction, State } from "@/interface";
import { getIndexOfItem } from "@/helpers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    actionsHistory: [],
  } as State,
  getters: {
    getStateItems(state) {
      return state.items.filter((item) => !item.isSelected);
    },

    getSelectedItems(state) {
      return state.items.filter((item) => item.isSelected);
    },
  },
  mutations: {
    setStateItems(state, payload: Array<FakeItem>) {
      state.items = payload;
    },

    selectItem(state, payload: FakeItem) {
      const targetItemIndex = getIndexOfItem(state.items, "id", payload.id);
      Vue.set(state.items[targetItemIndex], "isSelected", true);
    },

    removeItem(state, payload: FakeItem) {
      const targetItemIndex = getIndexOfItem(state.items, "id", payload.id);
      state.items[targetItemIndex].isSelected = false;
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

    moveItem({ state, commit }, payload: ItemAction) {
      if (payload.action === "select") {
        commit("selectItem", payload.item);
      } else {
        commit("removeItem", payload.item);
      }
    },
  },
  modules: {},
});
