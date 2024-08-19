<template>
  <div class="pic_model">
    <div
        class="pic_out"
        :class="current === index ? 'large_m' : 'small_m'"
        v-for="(item, index) in pic_data"
        :key="index"
        :style="{backgroundImage:`url(${base_url+item})`}"
        @click="on_pic_click(index)"
    >
      <!-- <img class="pic" :class="current===index?'pic_l':'pic_s'" :src="base_url+item" @click="on_pic_click(index)">      -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let current = ref(0);
const base_url = "/src/assets/imgs/";
let pic_data = ref(["1.png", 
                    "2.png", 
                    "8.jpg", 
                    "3.jpg", 
                    "6.png"]);
function on_pic_click(index) {
  current.value = index;
  console.log(index);
}
</script>

<style  scoped>
.pic_model {
    padding: 0 40px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic_out {
  cursor: pointer;    
  margin: 0 10px;
  height: 80vh;
  min-width: 60px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: flex 0.7s ease-in;
  background-size: cover;
  background-position: center;
  padding: 15px;
  background-repeat: no-repeat;
}
.large_m {
  flex: 25;
  /* background-size: 100vh; */
}
.small_m {
  flex: 2;
}

.pic {
  cursor: pointer;
  width: 100%;
  object-fit: cover;
  transition: 0.4s ease-in 0.3s;
}
.pic_l {
  height: 120%;
}
.pic_s {
  height: 100%;
}
</style>