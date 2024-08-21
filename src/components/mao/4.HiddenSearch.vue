<template>
  <div class="container" :class="{ active: isActive }">
    <input class="input" />
    <button class="btn" @click="handle">
      <div class="search"><Search></Search></div>
    </button>
  </div>
</template>

<script setup>
import Search from "./icons/search.vue";
import { ref } from "vue";
const isActive = ref(false);
const handle = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  position: relative;
  height: 30px;
  width: 50px;
  border-radius: 6px;
}
.input {
  outline: none;
  background-color: aquamarine;
  border: 0;
  font-size: 16px;
  height: 30px;
  width: 0px;
  padding: 0;
  transition: width 0.3s ease;
}
.search {
  height: 20px;
  margin-top: 5px;
  cursor: pointer;
}
.btn {
  background-color: #fff;
  width: 50px;
  border: 0;
  height: 30px;
  transition: transform 0.3s ease;
}
.container.active .input {
  width: 150px;
  padding: 0 10px;
}
</style>
