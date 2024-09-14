<template>
  <div
    class="container"
    :style="{ backgroundImage: `url(${imgs_list[current_img_index]})` }"
  >
    <div class="slide_container">
      <div
        class="slide"
        :style="{ backgroundImage: `url(${imgs_list[current_img_index]})` }"
      ></div>
    </div>
    <button class="arrow left iconfont icon-jiantou" @click="to_left"></button>
    <button
      class="arrow right iconfont icon-jiantou"
      @click="to_right"
    ></button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  imgs: {
    default: [
      "imgs/1.png",
      "imgs/2.png",
      "imgs/8.jpg",
      "imgs/3.jpg",
      "imgs/6.png",
    ],
  },
});
const imgs_list = ref(props.imgs);
console.log(imgs_list.value);
const current_img_index = ref(0);
const current_img = ref(imgs_list.value[current_img_index.value]);

function to_left() {
  --current_img_index.value < 0
    ? (current_img_index.value = imgs_list.value.length - 1)
    : current_img_index.value;
  console.log(current_img_index.value);
}
function to_right() {
  current_img_index.value = ++current_img_index.value % imgs_list.value.length;
  console.log(current_img_index.value);
}
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  /* align-items: center; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.4s;
  /* flex-direction: column; */
  overflow: hidden;
}
.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
}

.slide_container {
  position: relative;
  margin-top: 12vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 70vh;
  width: 70vw;
  overflow: hidden;
  z-index: 1;
}
.slide {
  opacity: 1;
  height: calc(100vh - var(--homepage-top-bar-height));
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: -12vh;
  left: -15vw;
  transition: 0.4s ease;
  z-index: 2;
}

.arrow {
  position: fixed;
  background-color: transparent;
  color: #fff;
  padding: 20px;
  font-size: 30px;
  border: 2px solid orange;
  top: 50%;
  height: 70px;
  width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 2; */
}
.left {
  left: calc(15vw - 48px);
  transform: translateY(-50%);
}
.right {
  right: calc(15vw - 48px);
  transform: scaleX(-1) translateY(-50%);
}
</style>