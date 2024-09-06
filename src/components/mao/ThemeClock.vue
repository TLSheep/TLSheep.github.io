<template>
  <div class="container" :data-theme="theme">
    <button class="btn" @click="changeTheme">light mode</button>
    <div class="clock">
      <div
        class="hour"
        :style="{ transform: `rotate(${time.h * 15}deg)` }"
      ></div>
      <div class="min" :style="{ transform: `rotate(${time.m * 6}deg)` }"></div>
      <div
        class="sec"
        :style="{
          transform: `rotate(${time.s * 6}deg)`,
        }"
      ></div>
      <div class="center"></div>
    </div>
    <div class="time">{{ `${time.h}:${time.m}:${time.s}` }} PM</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const theme = ref("light");

const time = ref({});

onMounted(() => {
  setInterval(() => {
    const date = new Date();
    time.value.h = date.getHours();
    time.value.m = date.getMinutes();
    time.value.s = date.getSeconds();
  });
});
const changeTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};
</script>

<style scoped>
[data-theme="light"] {
  --background-color: #fff;
  --text-color: #fff;
  --btn-background-color: #000;
  --clock-second-color: #e74c3c;
}

[data-theme="dark"] {
  --background-color: #000;
  --text-color: #000;
  --btn-background-color: #fff;
  --clock-second-color: #e74c3c;
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  transition: all 0.5s ease-in;
}
.btn {
  cursor: pointer;
  background-color: var(--btn-background-color);
  color: var(--text-color);
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  top: 100px;
}
.hour {
  background-color: var(--btn-background-color);
  position: absolute;
  bottom: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform: translateX(-50%);
  transform-origin: bottom center;
}
.clock {
  position: relative;
  width: 200px;
  height: 200px;
}
.min {
  background-color: var(--btn-background-color);
  position: absolute;
  bottom: 50%;
  left: 50%;
  height: 100px;
  width: 3px;
  transform: translateX(-50%);
  transform-origin: bottom center;
}
.sec {
  background-color: var(--clock-second-color);
  position: absolute;
  bottom: 50%;
  left: 50%;
  height: 100px;
  width: 3px;
  transform: translateX(-50%);
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
}

.center {
  background-color: #e74c3c;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.center::after {
  content: "";
  background-color: var(--btn-background-color);
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.time {
  font-size: 60px;
  color: var(--btn-background-color);
}
</style>
