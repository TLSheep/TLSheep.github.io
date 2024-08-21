<template>
  <!-- <div>
  </div> -->
  <div class="app" style="background-color: #fff">
    <Navigation class="top_bar"></Navigation>
    <leftBar class="leftBar"></leftBar>
    <div class="main">
      <router-view class="router_view"></router-view>
    </div>
  </div>
</template>
<script setup>
import leftBar from "./components/yang/leftBar.vue";
import Navigation from "./components/mao/Navigation.vue";
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.leftBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 占满剩下空间 */
  flex-grow: 1;
  margin-top: 56px;
  min-height: calc(100vh - var(--homepage-top-bar-height));
}

.top_bar {
  /* position: absolute; */
}
.router_view {
  /* max-height: calc(100vh - var(--homepage-top-bar-height)); */
}
</style>
