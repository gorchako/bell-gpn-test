<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/history">История</router-link> |
      <router-link to="/history/addition">История добавлений</router-link> |
      <router-link to="/history/removal">История удалений</router-link>
    </nav>
    <router-view class="container" />
    <div id="cover-spin" v-show="isLoading"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class HomeView extends Vue {
  get isLoading() {
    return this.$store.state.isLoading;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

#cover-spin {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
  //display: none;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#cover-spin::after {
  content: "";
  display: block;
  position: absolute;
  left: 48%;
  top: 40%;
  width: 40px;
  height: 40px;
  border-style: solid;
  border-color: black;
  border-top-color: transparent;
  border-width: 4px;
  border-radius: 50%;
  -webkit-animation: spin 0.8s linear infinite;
  animation: spin 0.8s linear infinite;
}
</style>
