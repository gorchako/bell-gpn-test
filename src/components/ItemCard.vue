<template>
  <div class="item-card">
    <div class="item-card__id">{{ cardData.id }}</div>
    <div class="item-card__name">{{ cardData.name }}</div>
    <div class="item-card__action">
      <button @click="actionBtnHandler">{{ btnText }}</button>
    </div>
    <div class="item-card__children" v-if="cardData.items.length">
      <span
        class="item-card__child"
        v-for="(item, index) in cardData.items"
        :key="index"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FakeItem } from "@/interface";

@Component
export default class HelloWorld extends Vue {
  @Prop() cardData!: FakeItem;

  get btnText() {
    return this.cardData.isSelected ? "-" : "+";
  }

  actionBtnHandler() {
    const action = this.cardData.isSelected ? "remove" : "select";
    // console.log("Элемент выбран", { action, item: this.cardData });
    this.$emit("action-item", { action, item: this.cardData });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-card {
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

  &__children {
    width: 100%;
    text-align: left;
    margin-top: 10px;
  }

  &__child {
    &:not(:last-child):after {
      content: "•";
    }
  }

  &__action {
    align-self: center;
    margin-left: 10px;
  }
}
</style>
