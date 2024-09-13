<template>
  <div class="container">
    <div class="notices">
      <div class="notice" :key="index" v-for="(notice, index) in notices">
        {{ notice }}
      </div>
    </div>
    <button @click="show" class="btn">Show Notification</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const notices = ref([]);

const show = () => {
  notices.value.push(Math.random());
  setTimeout(() => {
    notices.value.shift();
  }, 3000);
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rebeccapurple;
}
.btn {
  background-color: #ffffff;
  color: rebeccapurple;
  font-size: 20px;
  font-weight: bold;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.btn:active {
  transform: scale(0.98);
}
.notice {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.notices {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
