<template>
  <div
    class="container"
    :style="{ backgroundImage: `url(${image[currentImage]})` }"
  >
    <div class="content">
      <div class="btn" @click="preImage">
        <ArrowLeft theme="outline" size="48" fill="#fff" :strokeWidth="3" />
      </div>
      <div class="image-container">
        <div
          class="img"
          :style="{ backgroundImage: `url(${image[currentImage]})` }"
        ></div>
      </div>

      <div class="btn" @click="nextImage">
        <ArrowRight theme="outline" size="48" fill="#fff" :strokeWidth="3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import imgae1 from "../../assets/mao/imgs/1.jpg";
import imgae2 from "../../assets/mao/imgs/2.jpg";
import imgae3 from "../../assets/mao/imgs/3.jpg";
import { ArrowLeft, ArrowRight } from "@icon-park/vue-next";

const image = [imgae1, imgae2, imgae3];

const currentImage = ref(0);

const preImage = () => {
  currentImage.value = (currentImage.value - 1 + image.length) % image.length;
};

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % image.length;
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  transition: 0.4s;
}
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}
.img {
  height: 100vh;
  width: 100vw;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: -15vh;
  left: -15vw;
  transition: 0.4s ease;
}

.btn {
  background-color: transparent;
  color: #fff;
  padding: 20px;
  font-size: 30px;
  border: 2px solid orange;
  cursor: pointer;
}
.image-container {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 70vh;
  width: 70vw;
  position: relative;
  overflow: hidden;
}
</style>
