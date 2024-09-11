<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <skeleton :is-loading="isLoading">
          <img class="header-img" :src="image1"
        /></skeleton>
      </div>
      <div class="card-body">
        <div>
          <skeleton :is-loading="isLoading">
            <h3 class="card-title">劳资真帅</h3>
          </skeleton>
          <div style="margin: 16px">
            <skeleton :is-loading="isLoading">
              <p class="card-excerpt">劳资真特么帅</p>
            </skeleton>
          </div>
        </div>

        <div class="author">
          <div class="author-img">
            <skeleton :is-loading="isLoading">
              <img class="author-img" :src="image1" />
            </skeleton>
          </div>

          <div class="author-info">
            <skeleton :is-loading="isLoading">
              <strong>Mao</strong>
            </skeleton>
            <div style="margin-top: 8px">
              <skeleton :is-loading="isLoading">
                <span class="introduce">1 hour ago</span>
              </skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div><button class="btn" @click="refresh">refresh</button></div>
  </div>
</template>

<script setup>
import image1 from "../../assets/mao/imgs/3.jpg";
import Skeleton from "./Skeleton.vue";
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});

let timeout = "";
const refresh = () => {
  clearTimeout(timeout);
  isLoading.value = true;
  timeout = setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f1;
}
.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
}
.card-header {
  height: 200px;
}

.card-body {
  background-color: #fff;
  padding: 30px;
}
.card-title {
  height: 20px;
  margin: 0;
}
.card-excerpt {
  color: #777;
  margin: 10px 0 20px;
}
.author-img {
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 40px;
  width: 40px;
}
.author {
  display: flex;
}
.author-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  width: 100px;
}
.introduce {
  color: #aaa;
  margin-top: 5px;
}
.animated-bg-text {
  border-radius: 50px;
  display: inline-block;
  margin: 0;
  height: 10px;
  width: 100%;
}

.animated-bg {
  height: 100%;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  /* 宽度变成200%，假设从100增加到200，100px - 300px = -200px，百分不相对于-200px计算*/
  background-size: 200% 100%;
  /* 10%就是-20px，图像向左移20px */
  /* background-position: -30% 0; */
  animation: bgPos 1s linear infinite;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
.header-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
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
</style>
