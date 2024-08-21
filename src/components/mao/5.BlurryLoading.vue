<template>
  <div class="container">
    <img class="img" :style="{ filter: `blur(${blur}px)` }" :src="image" />
    <div class="text" :style="{ opacity: `${opacity}` }">{{ load }}%</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { onMounted } from "vue";
import image from "../../assets/mao/imgs/3.jpg";
const load = ref(0);

onMounted(() => {
  const intervalId = setInterval(() => {
    load.value += 1;
    console.log(load.value);
    if (load.value >= 100) {
      //退出循环
      clearInterval(intervalId);
    }
  }, 20);
});

const blur = computed(() => {
  return 10 - load.value / 10;
});

const opacity = computed(() => {
  return 1 - load.value / 100;
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.img {
  /* 设置图片显示模式 */
  object-fit: cover;
  width: 100%;
}
.text {
  position: absolute;
  font-size: 30px;
  top: 50%;
  left: 50%;
}
</style>
