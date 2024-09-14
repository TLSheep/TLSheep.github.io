<template>
  <div class="container" :theme="current_theme">
    <button
      class="theme_change"
      @click="current_theme = current_theme == 'Dark' ? 'Light' : 'Dark'"
    >
      {{ current_theme + " mode" }}
    </button>
    <div class="clock">
      <div
        class="needle hour"
        :style="{
          transform: `translate(-50%, -100%) rotate(${
            current_time.hour * 30
          }deg)`,
        }"
      ></div>
      <div
        class="needle min"
        :style="{
          transform: `translate(-50%, -100%) rotate(${
            current_time.minutes * 6
          }deg)`,
        }"
      ></div>
      <div
        class="needle sec"
        :style="{
          transform: `translate(-50%, -100%) rotate(${
            current_time.rotate_seconds * 6
          }deg)`,
        }"
      ></div>
      <div class="center_point"></div>
    </div>
    <div class="time">
      {{
        current_time.hour +
        ":" +
        current_time.minutes +
        ":" +
        current_time.seconds +
        " " +
        am_pm
      }}
    </div>
    <div class="bottom_date">
      <div class="date">{{ current_time.day + ", " + current_time.month }}</div>
      <div class="small_date">{{ current_time.date }}</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const am_pm = ref("AM");
const current_time = ref({
  rotate_seconds: 0,
});
onMounted(() => {
  setInterval(() => {
    currentTime();
  }, 500);
});
function currentTime() {
  const time = new Date();
  current_time.value.month = months[time.getMonth()];
  current_time.value.day = days[time.getDay()];
  current_time.value.date = time.getDate();
  const hours = time.getHours();
  current_time.value.hour = hours % 12;
  current_time.value.minutes = time.getMinutes();
  current_time.value.seconds = time.getSeconds();
  let t_rotate_seconds = current_time.value.rotate_seconds;
  let t_seconds = current_time.value.seconds;
  if (t_rotate_seconds === 0) current_time.value.rotate_seconds = t_seconds;
  else if (
    t_rotate_seconds % 60 < t_seconds ||
    (t_rotate_seconds % 60 === 59 && t_seconds === 0)
  )
    current_time.value.rotate_seconds++;
  console.log(current_time.value.rotate_seconds);

  if (current_time.value.seconds < 10)
    current_time.value.seconds = "0" + current_time.value.seconds;
  // console.log(current_time.value.seconds);
  am_pm.value = hours >= 12 ? "PM" : "AM";
}

const current_theme = ref("Dark");
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Heebo:300&display=swap");

[theme="Light"] {
  --background-color: #fff;
  --text-color: #000;
  --btn-back-color: #000;
  --btn-text-color: #fff;
}
[theme="Dark"] {
  --background-color: #000;
  --text-color: #fff;
  --btn-back-color: #fff;
  --btn-text-color: #000000;
}
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  transition: all 0.5s ease-in;
  font-family: "Heebo", sans-serif;
}
.theme_change {
  color: var(--btn-text-color);
  background-color: var(--btn-back-color);
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 120px 0;
}
.clock {
  height: 200px;
  width: 200px;
  /* background-color: aquamarine; */
  position: relative;
}
.needle {
  background-color: var(--text-color);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
}
.hour {
  transform: translate(-50%, -100%) rotate(90deg);
}
.min {
  transform: translate(-50%, -100%) rotate(180deg);
  height: 90px;
}
.sec {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: #e74c3c;
}
.center_point {
  background-color: #e74c3c;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.center_point::after {
  content: "";
  background-color: var(--background-color);
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.time {
  font-size: 60px;
  color: var(--text-color);
}
.bottom_date {
  display: flex;
}
.date {
  color: var(--text-color);
}
.small_date {
  margin-left: 5px;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  white-space: pre;
  background-color: var(--btn-back-color);
  color: var(--btn-text-color);
}
</style>