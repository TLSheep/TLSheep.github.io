<template>
  <div class="container" :class="{ active: isActive }">
    <input class="input" />
    <button class="btn" @click="handle">
      <div class="search iconfont icon-sousuo" ></div>
    </button>
  </div>
</template>

<script setup>
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
  display: flex;
  height: 30px;
  width: 50px;
  border-radius: 6px;
}
.input {
  outline: none;
  background-color: #fff;
  border: 0;
  font-size: 16px;
  height: 30px;
  width: 0px;
  padding: 0;
  transition: width 0.3s ease ;

}
.search {
  height: 20px;
  margin-top: 5px;
  cursor: pointer;
}
.btn {
  background-color: #ee1919;
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
