<template>
  <div class="container">
    <div v-if="show"><div class="card">EventKeyCode</div></div>
    <div v-else class="result">
      <div class="item" :key="index" v-for="(item, index) in result">
        <div>{{ item[0] }}</div>
        <div class="card">
          {{ item[1] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref(true);
const result = ref([]);

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    result.value = [
      ["e.key", e.key],
      ["e.keycode", e.keyCode],
      ["e.code", e.code],
    ];
    show.value = false;
  });
});
</script>

<style scoped>
.container {
  /* 占满 */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  font-size: 20px;
  border: 1px solid #999999;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 20px;
  background-color: #fff;
  margin: 8px;
}
.result {
  display: flex;
}
.item {
  text-align: center;
}
</style>
