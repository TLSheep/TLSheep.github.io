<template>
  <div class="container">
    <div
      class="left-slide"
      :style="{ transform: 'translateY(' + currentSlide * 100 + '%)' }"
    >
      <div
        :key="index"
        v-for="(item, index) in images.slice().reverse()"
        class="left-img"
        :style="{
          backgroundImage: 'url(' + item + ')',
        }"
      ></div>
    </div>
    <div
      class="right-slide"
      :style="{ transform: 'translateY(' + currentSlide * -100 + '%)' }"
    >
      <div
        :key="index"
        v-for="(item, index) in images"
        class="right-img"
        :style="{
          backgroundImage: 'url(' + item + ')',
        }"
      ></div>
    </div>
    <div class="action-buttons">
      <button @click="next" class="arrow-down"><ArrowDown></ArrowDown></button>
      <button @click="prev" class="arrow-up"><ArrowUp></ArrowUp></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import imgae1 from "../../assets/mao/imgs/1.jpg";
import imgae2 from "../../assets/mao/imgs/2.jpg";
import imgae3 from "../../assets/mao/imgs/3.jpg";
import { ArrowDown, ArrowUp } from "@icon-park/vue-next";

const currentSlide = ref(0);
const images = [imgae1, imgae2, imgae3];

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
.right-slide {
  flex: 2;
  transition: all 0.5s ease-in-out;
}

.right-img {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.left-slide {
  flex: 1;
  transition: all 0.5s ease-in-out;
}
button {
  position: absolute;
  left: calc(1 / 3 * 100%);
  top: 50%;
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 30px;
  padding: 10px;
  border-radius: 0 0 8px 0;
}
.action-buttons {
  margin: 0;
  padding: 0;
}
.arrow-down {
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.arrow-up {
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.left-img {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateY(-200%);
}
</style>
