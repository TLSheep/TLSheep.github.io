<template>
  <div class="container">
    <div class="title">A Little Small Q&A</div>
    <div
      class="small_container"
      :class="{ active: status_list[index] }"
      v-for="(item, index) in data"
      :key="index"
    >
      <div class="que">
        {{ item.question }}
        <div
          class="btn iconfont icon-xialajiantouxiao"
          @click="status_list[index] = !status_list[index]"
        ></div>
      </div>
      <div class="ans">{{ item.answer }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const data = ref([
  {
    question: "1+1=?",
    answer: "2",
  },
  {
    question: "2+2=?",
    answer: "4",
  },
  {
    question: "3+3=?",
    answer: "6",
  },
  {
    question: "4+4=?",
    answer: "8",
  },
]);
const status_list = ref(Array(data.value.length).fill(false));
console.log(status_list.value);

const set_active = (index) => {
  status_list.value[index] = !status_list.value[index];
  console.log(status_list.value);
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #f0f0f0;
  padding-top: 50px;
}
.title {
  margin: 50px 0 30px;
  text-align: center;
  min-height: 40px;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 5px;
  z-index: 1;
}
.small_container {
  width: 600px;
  height: 100px;
  position: relative;
  padding: 30px;
  background-color: transparent;
  border: 1px solid #9fa4a8;
  border-radius: 10px;
  margin: 20px 0;
  transition: 0.3s ease;
}
.small_container.active {
  height: 140px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%), 0 3px 6px rgb(0 0 0 / 10%);
  background-image: url(../../../public/imgs/5.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0);
}
.small_container.active .btn {
  transform: rotate(180deg);
}

.small_container.active .ans {
  height: 20px;
  width: 100%;
  margin-top: 30px;
  transition: 0s 0.2s;
}
.btn {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 5px;
  cursor: pointer;
  transition: 0.3s ease;
}
.que {
  position: relative;
  font-size: 20px;
  font-weight: bold;
}
.ans {
  font-size: 16px;
  height: 0px;
  overflow: hidden;
  transition: 0s;
}
</style>