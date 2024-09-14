<template>
  <div class="container">
    <div
      class="box"
      v-for="index in 5"
      :key="index"
      @dragenter="box_dragenter"
      @dragleave="box_dragleave"
      @dragover.prevent="box_dragover"
      @drop="box_drop"
    ></div>
    <div
      class="fill"
      ref="r_img"
      draggable="true"
      @dragstart="img_dragstart"
      @dragend="img_dragsend"
    ></div>
  </div>
</template>
  <script setup>
import { onMounted, ref } from "vue";
const r_img = ref(null);

onMounted(() => {
  // 将图片移动至正确位置
  document.getElementsByClassName("box")[0]?.appendChild(r_img.value);
});
//被拖拽元素进入
function box_dragenter(e) {
  // 阻止默认处理
  e.preventDefault();
  e.target.classList.add("hovered");
}
//被拖拽元素离开
function box_dragleave(e) {
  // 阻止默认处理
  e.preventDefault();
  e.target.classList.remove("hovered");
}

// 被拖拽元素在目标元素上释放
function box_drop(e) {
  e.target.classList.remove("hovered");
  e.target.appendChild(r_img.value);
}
//拖拽对象在投放区内移动时触发
function box_dragover(e) {}

function img_dragstart() {
  r_img.value.classList.add("hold");
  setTimeout(() => {
    r_img.value.classList = [];
  }, 0);
}
function img_dragsend() {
  r_img.value.classList.add("fill");
}
</script>
  <style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4682b4;
}
.box {
  height: 150px;
  width: 150px;
  margin: 10px;
  border: solid 3px black;
  background: white;
}
.fill {
  background-image: url("/public/imgs/8.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 145px;
  width: 145px;
  cursor: pointer;
}
.hold {
  border: solid 5px #ccc;
}
.hovered {
  background-color: #333;
  border-color: white;
  border-style: dashed;
}
</style>