<template>
  <div class="skeleton-wapper">
    <div v-if="prop.isLoading" class="animated-bg">&nbsp;</div>
    <slot v-else></slot>
  </div>
</template>

<script setup>
const prop = defineProps({
  isLoading: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.skeleton-wapper {
  height: 100%;
  width: 100%;
}

.animated-bg {
  border-radius: 8px;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  /* 宽度变成200%，假设从100增加到200，100px - 300px = -200px，百分不相对于-200px计算*/
  background-size: 200% 100%;
  /* 10%就是-20px，图像向左移20px */
  /* background-position: -30% 0; */
  animation: bgPos 1s linear infinite;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
</style>
