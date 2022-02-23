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
    isLoading: false,
    isItemsLoaded: false,
  } as State,
  getters: {
    getStateItems(state) {
      return state.items.filter((item) => !item.isSelected);
    },

    getSelectedItems(state) {
      return state.items.filter((item) => item.isSelected);
    },

    getHistoryByActionSelect(state) {
      return state.actionsHistory.filter((item) => item.action === "select");
    },

    getHistoryByActionRemove(state) {
      return state.actionsHistory.filter((item) => item.action === "remove");
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

    setActionToHistory(state, payload: ItemAction) {
      state.actionsHistory.push(payload);
    },

    setItemsLoaded(state, payload: boolean) {
      state.isItemsLoaded = payload;
    },

    setLoading(state, payload: boolean) {
      state.isLoading = payload;
    },
  },
  actions: {
    async uploadStateItems({ state, commit }) {
      commit("setLoading", true);
      const result = await new Promise((res) => {
        setTimeout(() => {
          res(fillFakeData());
        }, 1000);
      });
      commit("setLoading", false);
      commit("setStateItems", result);
      commit("setItemsLoaded", true);
    },

    moveItem({ state, commit }, payload: ItemAction) {
      if (payload.action === "select") {
        commit("selectItem", payload.item);
      } else {
        commit("removeItem", payload.item);
      }
      commit("setActionToHistory", payload);
    },
  },
  modules: {},
});
