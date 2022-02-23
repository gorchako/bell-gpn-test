<template>
  <div class="home">
    <div class="home__row">
      <div class="home__col">
        <div class="home__form">
          <button @click="uploadBtnHandler" :disabled="isItemsLoaded">
            Загрузить данные
          </button>
          <input type="text" placeholder="Фильтр" v-model="filter" />
        </div>
      </div>
      <div class="home__col">
        <div class="home__message">Выбранные элементы</div>
      </div>
    </div>

    <div class="home__row">
      <div class="home__col">
        <div class="home__items" v-if="filteredItems.length">
          <ItemCard
            v-for="(item, index) in filteredItems"
            :key="index"
            :card-data="item"
            @action-item="actionItemHandler"
          >
          </ItemCard>
        </div>

        <div class="home__message" v-else-if="isItemsLoaded">
          По выбранному фильтру ничего не найдено
        </div>
      </div>

      <div class="home__col">
        <div class="home__items">
          <ItemCard
            v-for="(item, index) in selectedItems"
            :key="index"
            :card-data="item"
            @action-item="actionItemHandler"
          >
          </ItemCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemCard from "@/components/ItemCard.vue"; // @ is an alias to /src
import { FakeItem } from "@/interface";

@Component({
  components: {
    ItemCard,
  },
})
export default class HomeView extends Vue {
  filter = "";

  uploadBtnHandler() {
    if (this.isItemsLoaded) return;
    this.$store.dispatch("uploadStateItems");
  }

  get items() {
    return this.$store.getters.getStateItems;
  }

  get selectedItems() {
    return this.$store.getters.getSelectedItems;
  }

  get isItemsLoaded() {
    return this.$store.state.isItemsLoaded;
  }

  get filteredItems() {
    return this.items
      .filter(this.countIncludedInItem)
      .sort((a: FakeItem, b: FakeItem) => {
        return this.countIncludedInItem(b) - this.countIncludedInItem(a);
      });
  }

  get filterLower() {
    return this.filter.toLowerCase();
  }

  countIncludedInItem(item: FakeItem) {
    const siblingsNames = item.items.map((el) => {
      return el.name;
    });

    const names = [item.name, ...siblingsNames];

    return names.reduce(
      (prev: any, cur: any): any => {
        return {
          count: cur.toLowerCase().includes(this.filterLower)
            ? prev.count + 1
            : prev.count,
        };
      },
      { count: 0 }
    ).count;
  }

  actionItemHandler(event: object) {
    this.$store.dispatch("moveItem", event);
  }
}
</script>

<style lang="scss">
.home {
  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__row + &__row {
    margin-top: 20px;
  }

  &__col {
    width: 47%;
  }

  &__form {
    display: flex;

    button + input {
      margin-left: 10px;
    }
  }

  &__message {
    text-align: left;
  }
}
</style>
