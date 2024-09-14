<template>
  <div class="container">
    <button class="btn" ref="clickBtn" @click="on_btn_click">
      CLICK
      <span
        class="circle"
        v-for="(item, index) in childrents_list"
        :key="index"
        :style="{ top: item.y, left: item.x, zIndex: item.zIndex }"
      ></span>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const childrents_list = ref([]);
let timer = null;
const clickBtn = ref(null);
const zIndex = ref(0);
function on_btn_click(e) {
  console.log(timer);

  //   鼠标点击全局位置
  let x = e.clientX;
  let y = e.clientY;
  //获取按钮位置
  let buttonTop = clickBtn.value.offsetTop;
  let buttonLeft = clickBtn.value.offsetLeft;
  //鼠标点击按钮中位置
  let xInside = x - buttonLeft;
  let yInside = y - buttonTop;
  //   创建位置信息
  let local = { x: 0, y: 0, zIndex: zIndex.value };
  local.x = xInside + "px";
  local.y = yInside + "px";
  //   添加到数组中以便展示
  childrents_list.value.push(local);
  zIndex.value++;
  //   console.log(childrents_list.value.length);
  // 设置清空
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("clear");
    childrents_list.value = [];
    zIndex.value = 0;
  }, 5000);
}
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
  height: 100px;
  width: 240px;
  border-radius: 15px;
  background-color: purple;
  color: #fff;
  border: none;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;

  overflow: hidden;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.btn:focus {
  outline: none;
}

.circle {
  position: absolute;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: tobig 0.5s ease-out none;
}

@keyframes tobig {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>

