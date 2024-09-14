<template>
  <div class="container">
    <button class="btn" @click="rippleClick">
      mother fuck click me
      <div
        v-for="(ripple, index) in ripples"
        :key="index"
        :style="{ top: ripple.height, left: ripple.width }"
        class="circle"
      ></div>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const ripples = ref([]);

let timeout = null;
const rippleClick = (e) => {
  if (timeout) clearTimeout(timeout);
  let rect = e.currentTarget.getBoundingClientRect();
  // 计算鼠标相对于元素的坐标
  let offsetX = e.clientX - rect.left;
  let offsetY = e.clientY - rect.top;
  let ripple = {};
  ripple.height = `${offsetY}px`;
  ripple.width = `${offsetX}px`;
  console.log(ripple);
  ripples.value.push(ripple);
  timeout = setTimeout(() => {
    ripples.value = [];
  }, 500);
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  background-color: purple;
  color: #fff;
  border: 1px purple solid;
  border-radius: 16px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 30px;
  position: relative;
  overflow: hidden;
}

.circle {
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  position: absolute;
  animation: scale 0.5s ease-out;
}

@keyframes scale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>
