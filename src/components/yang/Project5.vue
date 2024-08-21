<template>
  <div class="container">
    <!-- <img class="pic" src="../../public/imgs/2.jpg" > -->
    <img class="pic" :src="props.pic_src" />
    <div
      class="mask"
      :style="{ 'backdrop-filter': `blur(${40 - count / 2.5}px)` }"
    ></div>
    <div class="count_down" :style="{ opacity: 1 - count / 100 }">
      {{ count > 95 ? 99 : count + 5 }}%
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const count = ref(0);
const props = defineProps({
  pic_src: {
    type: String,
    default: "imgs/6.png",
  },
  speed: {
    type: Number,
    default: 30,
  },
});
function countDown() {
  let num = 0;
  let timer = setInterval(() => {
    num++;
    if (num === 100) {
      clearInterval(timer);
    }
    count.value = num;
  }, props.speed);
}
countDown();
</script>
<style scoped>
.container {
  height: calc(100vh - var(--homepage-top-bar-height));
  /* height: 100%; */
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pic {
  position: relative;
  /* max-height: 150vh;
  max-width: 150vw;
  min-height: 100%; */
  /* min-width: 100%;
  top: 0;
  left: 0;
  object-fit: fill;
  /* max-height: 100%; */
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
}

.count_down {
  position: absolute;
  top: 50%-50px;
  font-size: 50px;
  color: #fff;
  z-index: 100;
}
</style>