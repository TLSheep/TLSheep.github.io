<template>
  <div class="container">
    <div
      :key="index"
      v-for="(image, index) in props.images"
      class="panel"
      :class="{ active: activePanel === index }"
      @click="handelClick(index)"
      :style="{ 'background-image': 'url(' + image + ')' }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import imgae1 from "../../../public/mao/imgs/1.jpg";

const props = defineProps({
  images: {
    type: Array,
    require: true,
    default: () => {
      [imgae1];
    },
  },
});

const activePanel = ref(0);
const handelClick = (e) => {
  activePanel.value = e;
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.panel {
  flex: 1;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  position: relative;
  transition: all 700ms ease-in;
}

.panel.active {
  flex: 5;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  /* opacity: 0; */
}
</style>
