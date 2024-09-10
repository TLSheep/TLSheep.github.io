<template>
  <div class="container">
    <div class="box">
      <div class="item1"></div>
      <div class="item2"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
}
.box {
  height: 80px;
  width: 80px;
  position: relative;
}

.item1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 80px solid transparent;
  border-bottom-color: #fff;
  animation: rotateA 2s linear infinite 0.5s;
}
.item2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 80px solid transparent;
  border-bottom-color: #fff;
  transform: rotate(90deg);
  animation: rotateB 2s linear infinite;
}

@keyframes rotateA {
  0%,
  25% {
    transform: rotate(0deg);
  }

  50%,
  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotateB {
  0%,
  25% {
    transform: rotate(90deg);
  }

  50%,
  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(450deg);
  }
}
</style>
