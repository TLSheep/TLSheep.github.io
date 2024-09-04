<template>
  <div class="container">
    <div class="nav-container" :style="{ width: navWidth }">
      <ul class="items" :class="{ active: navWidth === '350px' }">
        <li class="item">
          <a href="#">Home</a>
        </li>
        <li class="item">
          <a href="#">About</a>
        </li>
        <li class="item">
          <a href="#">Contact</a>
        </li>
        <li class="item">
          <a href="#">Blog</a>
        </li>
      </ul>

      <button class="icon" @click="toggleNav">
        <Minus
          class="line l1"
          theme="outline"
          size="40"
          fill="#333"
          :strokeWidth="3"
          :class="{ line1: navWidth === '350px' }"
        />
        <Minus
          class="line l2"
          theme="outline"
          size="40"
          fill="#333"
          :strokeWidth="3"
          :class="{ line2: navWidth === '350px' }"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Minus } from "@icon-park/vue-next";
const navWidth = ref("350px");

const toggleNav = () => {
  navWidth.value = navWidth.value === "350px" ? "80px" : "350px";
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9 50%,
    #5290f9 100%
  );
}

.nav-container {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 350px;
  padding: 25px;
  transition: width 0.6s linear;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
.items {
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  width: 0;
  transition: width 0.6s linear;
}

.item {
  transform: rotateY(0deg);
  opacity: 0;
  transition: transform 0.6s linear, opacity 0.6s linear;
}

.items.active {
  width: 100%;
}

.items.active li {
  padding: 10px;
  opacity: 1;
  transform: rotateY(360deg);
}

.icon {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  padding: 0;
  text-align: justify;
  min-height: 40px;
  min-width: 40px;
  position: relative;
}

.line {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transition: transform 0.6s linear;
}

.line1 {
  transform: rotate(-765deg) translateY(5.5px);
}

.line2 {
  transform: rotate(765deg) translateY(-5.5px);
}
.l2 {
  top: 7px;
}
</style>
