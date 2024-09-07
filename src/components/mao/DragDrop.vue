<template>
  <div class="container">
    <div
      class="box"
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @drop.prevent="handleDrop"
      @dragover.prevent
    >
      <div
        class="item"
        draggable="true"
        :style="{ backgroundImage: `url(${image3})` }"
      ></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script setup>
import image3 from "../../assets/mao/imgs/3.jpg";

let currentItem = null;
const handleDragStart = (e) => {
  currentItem = e.target;
};
const handleDragEnter = (e) => {
  if (!currentItem.style.backgroundImage) return;
  clearBackground();
  if (e.target.classList.contains("item")) {
    e.target.style.backgroundColor = "red";
  }
};

const handleDrop = (e) => {
  if (!currentItem.style.backgroundImage) return;
  clearBackground();
  if (e.target.classList.contains("item")) {
    currentItem.draggable = false;
    // 清除backgroundImage
    currentItem.style.backgroundImage = "";
    e.target.draggable = true;
    e.target.style.backgroundImage = `url(${image3})`;
  }
};

const clearBackground = () => {
  document.querySelectorAll(".item").forEach((item) => {
    item.style.backgroundColor = "#fff";
  });
};
</script>

<style scoped>
/* 解决双击选择div，造成拖动bug */
div {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.container {
  width: 100%;
  height: 100%;
  background-color: steelblue;
}

.item {
  height: 150px;
  width: 150px;
  border: 3px solid #000;
  background-color: #fff;
  margin: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
