<template>
  <div class="home">
    <div class="home__row">
      <div class="home__col">
        <div class="home__form">
          <button @click="uploadBtnHandler">Загрузить данные</button>
          <input type="text" placeholder="Фильтр" v-model="filter" />
        </div>
      </div>
    </div>

    <div class="home__row">
      <div class="home__col">
        <div class="home__items">
          <ItemCard
            v-for="(item, index) in filteredItems"
            :key="index"
            :card-data="item"
          >
          </ItemCard>
        </div>
      </div>

      <div class="home__col">Вторая колонка</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import ItemCard from "@/components/ItemCard.vue"; // @ is an alias to /src
import { FakeItem } from "@/interface/FakeItem";

@Component({
  components: {
    ItemCard,
  },
})
export default class HomeView extends Vue {
  filter = "";

  uploadBtnHandler() {
    this.$store.dispatch("uploadStateItems");
  }

  get items() {
    return this.$store.state.items;
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
}
</script>

<style lang="scss">
.home {
  &__row {
    display: flex;
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
}
</style>
