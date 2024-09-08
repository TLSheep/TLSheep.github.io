<template>
  <div class="container">
    <div class="title">Drink Juice</div>
    <div class="goal">Goal: 2 Liters</div>
    <div class="bottle">
      <div
        class="top"
        :style="{ height: `${(1 - current_select / props.cup_num) * 100}%` }"
      >
        <div class="current_liquid">
          {{ (props.totle - current_select * one_cup) / 1000 }}L
        </div>
        <div class="description">Remained</div>
      </div>
      <div
        class="bottom"
        :style="{
          height: `${(current_select / props.cup_num) * 100}%`,
        }"
      >
        {{ (current_select / props.cup_num) * 100 }}%
      </div>
    </div>
    <div class="bottom_description">
      Select how many glasses of water that you have drank
    </div>
    <div class="chooses_container">
      <div
        class="choose"
        :class="{ full: current_select >= index }"
        v-for="index in 8"
        :key="index"
        @click="select_cup(index)"
      >
        {{ props.totle / props.cup_num }} ml
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  totle: {
    type: Number,
    default: 2000,
  },
  cup_num: {
    type: Number,
    default: 8,
  },
});
const current_select = ref(0);
const one_cup = ref(props.totle / props.cup_num);

function select_cup(index) {
  if (current_select.value === index) current_select.value--;
  else current_select.value = index;
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap");
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #3494e4;
}
.title {
  margin: 10px 0;
  font-size: 32px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: #fff;
}
.goal {
  font-weight: 400;
  font-size: 18px;
  margin: 10px 0;
  font-family: "Montserrat", sans-serif;
  color: #fff;
}
.bottle {
  background-color: #fff;
  border: 4px solid #144fc6;
  color: #144fc6;
  border-radius: 0 0 40px 40px;
  height: 330px;
  width: 150px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  transition: 0.3s ease;
}
.current_liquid {
  font-size: 20px;
  font-weight: bold;
}
.description {
  font-size: 12px;
}
.bottom {
  background-color: #f0932b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  width: 100%;
  transition: 0.3s ease;
  overflow: hidden;
}
.bottom_description {
  font-weight: 400;
  font-size: 16px;
  margin: 10px 0;
  font-family: "Montserrat", sans-serif;
  color: #fff;
}
.chooses_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 250px;
}
.choose {
  height: 95px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #144fc6;
  border-radius: 0 0 15px 15px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #144fc6;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5px;
  transition: 0.3s ease;
}
.choose.full {
  background-color: #f0932b;
  color: #fff;
}
</style>
