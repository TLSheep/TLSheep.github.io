<template>
  <div class="container">
    <input
      class="search_input"
      :class="{ active: show_inp }"
      placeholder="Search..."
    />
    <div
      class="search iconfont icon-sousuo"
      @click="show_inp = !show_inp"
    ></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const show_inp = ref(false);
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  background-color: #775bf1;
}

.search_input {
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 0;
  height: 50px;
  width: 0;
  transition: 0.3s ease;
}
.search_input:focus {
  outline: none;
}
.active {
  width: 200px;
  padding: 15px;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

.search_box {
  overflow: hidden;
}
</style>