<template>
  <div class="container">
    <div class="key_text" v-show="!key_down.key" style="letter-spacing: 10px">
      按下键盘任意按键以启动
    </div>
    <div class="small_container" v-show="key_down.key">
      <div class="key_text">
        {{ key_down.key === " " ? "Space" : key_down.key }}
        <div class="top_small">key_down.key</div>
      </div>
      <div class="key_text">
        {{ key_down.keyCode }}
        <div class="top_small">key_down.keyCode</div>
      </div>
      <div class="key_text">
        {{ key_down.code }}
        <div class="top_small">key_down.code</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const key_down = ref({});
const handleKeydown = (event) => {
  key_down.value = event;
  console.log("Key pressed:", event);
};
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>
<style scoped>
.container {
  /* height: 100vh; */
  height: calc(100vh - var(--homepage-top-bar-height));
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efedd6;
}
.small_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.key_text {
  border: 1px solid #999;
  background-color: #eee;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
  position: relative;
}
.top_small {
  position: absolute;
  top: -30px;
  left: 0;
  text-align: center;
  width: 100%;
  color: #555;
  font-size: 14px;
}
</style>