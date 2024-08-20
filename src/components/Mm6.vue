<template>
  <div class="container">
    <h1>吊 特 么 吊 炸 了</h1>
    <div class="box" :key="index" v-for="(content, index) in contents">
      <h2>{{ content }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
const contents = ref(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);

onMounted(() => {
  const boxes = document.querySelectorAll(".box");
  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
  checkBoxes();
  window.addEventListener("scroll", checkBoxes);
  //   window.addEventListener("scroll", debounce(checkBoxes, 10));
});
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}
</script>

<style scoped>
h2 {
  font-size: 45px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100vw;
}
.box {
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  color: #fff;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  margin: 10px;
  border-radius: 10px;
  justify-content: center;
  background-color: steelblue;
  transition: transform 0.4s ease;
  transform: translateX(400%);
}

.box:nth-of-type(even) {
  transform: translateX(-400%);
}

.box.show {
  transform: translateX(0);
}
</style>
