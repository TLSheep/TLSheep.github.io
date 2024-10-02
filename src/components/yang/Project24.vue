<template>
  <div class="container">
    <div class="small_container" id="small_container">
      <div
        class="top disnone"
        style="background-image: url(/public/imgs/helloWorld.jpg)"
      ></div>
      <div class="animated_bg" style="width: 100%; height: 50%"></div>

      <div class="bottom">
        <div class="title disnone">随便写个标题</div>
        <div class="title animated_bg_text animated_bg"></div>

        <div class="content_text">
          <div class="disnone">
            内容就是小爷我巨帅无比内容就是小爷我巨帅无比内容就是小爷我巨帅无比内容就是小爷我巨帅无比
          </div>
          <div class="animated_bg animated_bg_text"></div>
          <div class="animated_bg animated_bg_text"></div>
          <div class="animated_bg animated_bg_text"></div>
        </div>

        <div class="author">
          <div class="head_pic disnone"></div>
          <div class="animated_bg animated_bg_head_pic"></div>
          <div class="info">
            <div class="name disnone">Father Lan</div>
            <div class="date disnone">1 mins before</div>
            <div class="animated_bg animated_bg_text"></div>
            <div class="animated_bg animated_bg_text"></div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn" @click="reset(itemList)">Again</button>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const itemList = ref("");
onMounted(() => {
  const allElements = document.getElementById("small_container").children;
  setTimeout(() => {
    Array.from(allElements).forEach((item) => {
      change_class(item);
    });
  }, 2000);
  itemList.value = allElements;
});

function change_class(item) {
  if (item.children.length != 0) {
    Array.from(item.children).forEach((item) => {
      change_class(item);
    });
    // console.log(item);
    // console.log(item.children);
    // console.log(item.classList);
    // console.log(item.classList.contains("disnone"));
  } else if (item.classList.contains("disnone")) {
    item.classList.remove("disnone");
  } else {
    item.classList.add("disnone");
  }
}
function reset(itemList) {
  Array.from(itemList).forEach((item) => {
    change_class(item);
  });
  setTimeout(() => {
    Array.from(itemList).forEach((item) => {
      change_class(item);
    });
  }, 2000);
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
.disnone {
  display: none;
}
.container {
  width: 100%;
  height: 100%;
  background: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.small_container {
  width: 350px;
  height: 400px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.top {
  width: 100%;
  height: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bottom {
  width: 100%;
  height: 50%;
  padding: 20px 20px;
}
.title {
  margin-bottom: 10px !important;
  font-weight: bold;
  font-size: 20px;
}
.content_text {
  padding: 5px;
  font-size: 16px;
  color: #777777;
}
.author {
  display: flex;
  align-items: center;
}
.head_pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-image: url("/public/imgs/8.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.info {
  height: 50px;
  width: 40%;
  margin-left: 25px;
}
.name {
  font-size: 20px;
  font-weight: bold;
}
.date {
  font-size: 16px;
  color: #aaa;
  margin-top: 5px;
}
.animated_bg {
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  ) !important;
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated_bg_text {
  border-radius: 50px;
  margin: 10px 0;
  height: 10px;
  width: 100%;
}
.animated_bg_head_pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
.btn {
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 30px;
  margin-top: 20px;
  font-size: 14px;
}
.btn:active {
  transform: scale(0.95);
}
</style>