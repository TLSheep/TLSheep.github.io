<template>
  <div class="container">
    <div class="small_container">
      <div class="item" v-for="(item, index) in data_list" :key="index">
        <div class="iconfont" :class="item.icon_class"></div>
        <div class="number">
          {{ increase(item.number) }}
        </div>
        <div class="describe">{{ item.describe }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
const data_list = ref([
  {
    icon_class: "icon-XiaoMi",
    number: 120000,
    describe: "Mi Fans",
  },
  {
    icon_class: "icon-weixin",
    number: 500,
    describe: "Wechat Friends",
  },
  {
    icon_class: "icon-bilibili2",
    number: 60000,
    describe: "Bilibili Followers",
  },
]);
const increase_number = ref(0);
const timerr = setInterval(() => {
  increase_number.value++;
}, 5);
setTimeout(() => {
  clearInterval(timerr);
}, 3000);

function increase(target) {
  let gap = Math.round(target / 322);
  if (gap * increase_number.value < target) return gap * increase_number.value;
  else return target;
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");

.container {
  background-color: #8e44ad;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.small_container {
  display: flex;
  padding-bottom: 200px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
}
.iconfont {
  font-size: 60px;
  color: #fff;
}
.number {
  font-size: 60px;
  margin-top: 10px;
  text-align: center;
  font-family: "Roboto Mono", sans-serif;
}
.describe {
  font-size: 16px;
  text-align: center;
  font-family: "Roboto Mono", sans-serif;
}
</style>