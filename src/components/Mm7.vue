<template>
  <div>
    <div class="container">
      <div class="left">
        <h1>我 是</h1>
        <div class="btn">mao</div>
      </div>
      <div class="right">
        <h1>帅 逼</h1>
        <div class="btn">mao</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.left {
  position: relative;
  height: 100vh;
  flex: 1;
  transition: all 0.5s ease-in-out;
  background-image: url("/public/imgs/1.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.right {
  position: relative;
  flex: 1;
  height: 100vh;
  background-image: url("/public/imgs/2.png");
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
