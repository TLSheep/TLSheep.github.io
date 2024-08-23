<template>
  <div class="container">
    <div class="title">Frequently Asked Questions</div>

    <div
      v-for="(item, index) in props.items"
      :key="index"
      class="faq-container"
      :class="{ active: show[index] }"
    >
      <div class="content">
        <h3>{{ item.content }}</h3>
        <p v-if="show[index]">{{ item.answer }}</p>
        <div
          v-if="show[index]"
          class="image"
          :style="{ 'background-image': 'url(' + weixin + ')' }"
        ></div>
      </div>
      <button class="icon" @click="change(index)">
        <DownArrow v-if="!show[index]"></DownArrow>
        <Close v-else></Close>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DownArrow from "./icons/downArrow.vue";
import Close from "./icons/close.vue";
import weixin from "../../assets/mao/imgs/weixin.png";

const props = defineProps({
  items: {
    type: Array,
    default: [
      {
        content: "Why shouldn't we trust atoms?",
        answer: "They make up everything",
      },
      {
        content: "Why shouldn't we trust atoms?",
        answer: "They make up everything",
      },
    ],
  },
});

const show = ref([]);
const change = (index) => {
  show.value[index] = !show.value[index];
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
}
.title {
  font-size: 40px;
  text-align: center;
}
.faq-container {
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  margin: 32px;
  width: 600px;
  border: 1px solid #9fa4a8;
  border-radius: 10px;
}
.icon {
  border: 0;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  width: 40px;
  position: relative;
  top: 8px;
}
.image {
  position: absolute;
  height: 150px;
  width: 150px;
  left: -24px;
  bottom: 0;
  opacity: 0.2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.content {
  position: relative;
  transition: all 0.3s ease;
}
.active {
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
