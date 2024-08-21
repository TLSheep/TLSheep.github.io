<template>
  <!-- <div>
  </div> -->
  <div class="app" style="background-color: #fff">
    <Navigation></Navigation>
    <leftBar class="leftBar"></leftBar>
    <div class="main"><router-view></router-view></div>
  </div>
</template>
<script setup>
import leftBar from "./components/leftBar.vue";
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
  position: absolute;
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
  margin-top: 48px;
}
</style>
