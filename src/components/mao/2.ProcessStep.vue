<template>
  <div class="container">
    <div class="progress-container">
      <div
        class="progress"
        :style="{
          width: `${((curStep - 1) / (props.items.length - 1)) * 100}%`,
        }"
      ></div>
      <div
        class="circle"
        :class="{ active: item <= curStep }"
        :key="item"
        v-for="item in props.items"
      >
        {{ item }}
      </div>
    </div>

    <div class="btn-container">
      <button class="btn" @click="prev">Prev</button>
      <button class="btn" @click="next">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  items: { type: Array, default: () => [1, 2, 3, 4, 5] },
});
const curStep = ref(1);
const prev = () => {
  if (--curStep.value < 0) {
    curStep.value = 0;
  }
};

const next = () => {
  if (++curStep.value > props.items.length) {
    curStep.value = props.items.length;
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.circle {
  background-color: #f1f1f1;
  color: #e2e2e2;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #383838;
  transition: 0.4s ease;
}

.circle.active {
  border-color: #3498db;
  color: #000000;
}

.progress-container {
  width: 350px;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  /* 使得容器里面的元素,相对容器定位 */
  position: relative;
}

.progress-container:before {
  content: "";
  background-color: #383838;
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  width: 100%;
  z-index: -1;
  /* 确保居中 */
  transform: translateY(-50%);
}

.progress {
  background-color: #3498db;
  /* 使用绝对定位, 不占据空间 */
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
}

.btn {
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

.btn:active {
  transform: scale(0.98);
}

.btn-container {
  display: flex;
}

.container {
  height: 100%;
  widows: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
