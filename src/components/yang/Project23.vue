<template>
  <div class="container">
    <div class="kinetic"></div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
}

.kinetic {
  position: relative;
  height: 80px;
  width: 80px;
}

.kinetic::after,
.kinetic::before {
  content: "";
  position: absolute;
  border: 50px solid transparent;
  border-bottom-color: #ffffff;
  animation: rotateA 2s linear infinite 0.5s;
}

.kinetic::before {
  transform: rotate(90deg);
  border-bottom-color: #0080ff;
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