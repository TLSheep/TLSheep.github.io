<template>
  <div class="container"><DrawingApp :pointNum="60"></DrawingApp></div>
</template>
<script setup>
import DrawingApp from "@/components/mao/DrawingApp.vue";
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
