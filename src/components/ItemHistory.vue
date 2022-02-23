<template>
  <div class="item-history">
    <div class="item-history__id">
      {{ actionData.item.id }}
    </div>

    <div class="item-history__name">
      {{ actionData.item.name }}
    </div>

    <div class="item-history__action">
      {{ actionLabel + " " + actionData.date }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ItemAction } from "@/interface";

@Component
export default class ItemHistory extends Vue {
  @Prop() actionData!: ItemAction;

  get actionLabel() {
    return this.actionData.action === "select" ? "был добавлен" : "был удален";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-history {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #41b883;
  border-radius: 5px;
  padding: 10px;

  & + & {
    margin-top: 15px;
  }

  &__id {
    background: #fff;
    padding: 5px;
    min-width: 15px;
  }

  &__name {
    align-self: center;
    font-size: 24px;
    font-weight: 600;
    margin-left: 10px;
  }

  &__action {
    align-self: center;
    margin-left: 10px;
  }
}
</style>
