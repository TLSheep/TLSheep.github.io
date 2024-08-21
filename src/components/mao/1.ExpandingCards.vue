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
import imgae1 from "../../assets/mao/imgs/1.jpg";
import imgae2 from "../../assets/mao/imgs/2.jpg";
import imgae3 from "../../assets/mao/imgs/3.jpg";
const props = defineProps({
  images: {
    type: Array,
    required: false,
    default: () => [imgae1, imgae2, imgae3],
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
