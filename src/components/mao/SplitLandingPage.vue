<template>
  <div class="container">
    <div class="image-container">
      <div class="left" :style="{ backgroundImage: `url(${image1})` }">
        <h1>我 是</h1>
        <div class="btn">mao</div>
      </div>
      <div class="right" :style="{ backgroundImage: `url(${image2})` }">
        <h1>帅 逼</h1>
        <div class="btn">mao</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from "../../assets/mao/imgs/2.jpg";
import image2 from "../../assets/mao/imgs/3.jpg";
</script>

<style scoped>
h1 {
  font-size: 60px;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
}
.container {
  width: 100%;
  height: 100%;
}

.image-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
}

.left {
  position: relative;
  height: 100vh;
  flex: 1;
  transition: all 0.5s ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;
}

.right {
  position: relative;
  flex: 1;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;
}
.left:hover {
  flex: 3;
}

.right:hover {
  flex: 3;
}
.btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: #fff;
  border: #fff solid 4px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  width: 200px;
  padding: 25px;
  cursor: pointer;
}

.left .btn:hover {
  background-color: rgba(87, 84, 236, 1);
  border-color: rgba(87, 84, 236, 1);
}

.right .btn:hover {
  background-color: rgba(28, 122, 28, 1);
  border-color: rgba(28, 122, 28, 1);
}
</style>
