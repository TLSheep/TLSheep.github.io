<template>
  <div class="container">
    <div class="box-container" ref="container" @scroll="checkBoxes">
      <h1>吊 特 么 吊 炸 了</h1>
      <div
        class="box"
        :class="{ show: contentShow[index] }"
        :key="index"
        v-for="(content, index) in contents"
      >
        <h2>{{ content }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
const contents = ref(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);
const container = ref(null);
const contentShow = ref([]);

let boxes = [];

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      contentShow.value[index] = true;
    } else {
      contentShow.value[index] = false;
    }
  });
}
onMounted(() => {
  boxes = container.value.querySelectorAll(".box");
  checkBoxes(boxes);
});
//window.addEventListener("scroll", checkBoxes);
</script>

<style scoped>
h2 {
  font-size: 45px;
}
.container {
  width: 100%;
  height: 100%;
}
.box-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 0;
}
.box {
  width: 400px;
  min-height: 200px;
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
