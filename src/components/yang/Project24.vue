<template>
  <div class="container">
    <div class="small_container">
      <div class="top" :v-show="is_show"></div>
      <div class="top animated_bg" :v-show="!is_show"></div>
      <div class="bottom">
        <div class="title" :v-show="is_show"></div>
        <div class="title animated_bg_text" :v-show="!is_show"></div>
        <div class="content_text" v-show="is_show"></div>
        <div class="content_text" v-show="!is_show">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="author">
          <div class="head_pic" v-show="is_show"></div>
          <div class="info">
            <div class="name" v-show="is_show"></div>
            <div class="date" v-show="is_show"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const is_show = ref(false);
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.container {
  width: 100%;
  height: 100%;
  background: #ecf0f1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.small_container {
  width: 350px;
  height: 400px;
}

.top {
  width: 100%;
  height: 50%;
}
.bottom {
  width: 100%;
  height: 50%;
}
.title {
}
.content_text {
}
.author {
}
.head_pic {
}
.info {
}
.name {
}
.date {
}
.animated_bg {
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated_bg_text {
  border-radius: 50px;
  display: inline-block;
  margin: 0;
  height: 10px;
  width: 100%;
}
@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
</style>