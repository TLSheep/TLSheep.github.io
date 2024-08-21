<template>
  <div class="app">
    <div><Navigation></Navigation></div>
    <div><leftBar class="leftBar"></leftBar></div>
    <div class="main">
      <router-view></router-view>
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
  height: 100vh;
  max-width: 100vw;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #fff;
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
  flex: 1;
  margin-top: 56px;
  /* min-height: calc(100vh - var(--homepage-top-bar-height)); */
}
</style>
