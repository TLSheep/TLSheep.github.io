<template>
  <div class="container">
    <div class="counter">
      <div class="count">{{ count }}</div>
      <button class="btn" @click="refresh">refresh</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const refresh = () => {
  count.value = 0;
  changeAnimation({
    start: 0,
    end: 100,
    duration: 1000,
    onUpdate: (value) => {
      count.value = value;
    },
  });
};

const changeAnimation = ({ start, end, duration = 1000, onUpdate }) => {
  let value = start;
  let curTime = Date.now();
  let speed = (end - start) / duration;
  function run() {
    const t = Date.now() - curTime;
    value = Math.floor(start + speed * t);
    if (t >= duration) {
      value = end;
      onUpdate && onUpdate(value); //确保函数存在，然后再回调
      return;
    }
    onUpdate && onUpdate(value);
    requestAnimationFrame(run);
  }
  run();
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8e44ad;
}
.counter {
  font-size: 60px;
  text-align: center;
  color: #fff;
}
.btn {
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 30px;
  font-size: 14px;
}

.btn:hover {
  background-color: #2980b9;
}

.btn:active {
  transform: scale(0.95);
}
</style>
