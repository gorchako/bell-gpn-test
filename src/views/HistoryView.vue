<template>
  <div class="history">
    <h1>{{ titleByRoute }}</h1>

    <div class="history__items">
      <ItemHistory
        class="history__item"
        v-for="(item, index) in actionsHistory"
        :key="index"
        :action-data="item"
      >
      </ItemHistory>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemHistory from "@/components/ItemHistory.vue"; // @ is an alias to /src

@Component({
  components: {
    ItemHistory,
  },
})
export default class HistoryView extends Vue {
  get actionsHistory() {
    return this.routeActionType
      ? this.routeActionType === "addition"
        ? this.itemsByActionSelect
        : this.itemsByActionRemove
      : this.$store.state.actionsHistory;
  }

  get routeActionType() {
    return this.$route.meta && this.$route.meta.actionType;
  }

  get titleByRoute() {
    return this.routeActionType
      ? this.routeActionType === "addition"
        ? "История добавлений"
        : "История удалений"
      : "История";
  }

  get itemsByActionSelect() {
    return this.$store.getters.getHistoryByActionSelect;
  }

  get itemsByActionRemove() {
    return this.$store.getters.getHistoryByActionRemove;
  }
}
</script>

<style scoped lang="scss">
.history {
  &__item {
    margin: 0 auto;
  }
}
</style>
