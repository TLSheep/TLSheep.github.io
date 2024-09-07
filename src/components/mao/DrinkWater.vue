<template>
  <div class="container">
    <div class="water-container">
      <h1>Drink Water</h1>
      <h2>Goal: 2 Liters</h2>
      <div class="cup">
        <div
          class="content"
          :style="{ height: `${330 - 330 * (totalWater / 8)}px` }"
        >
          <div>{{ 2 - totalWater / 4 }}L</div>
          <div>Remained</div>
        </div>
        <div class="all" :style="{ height: `${330 * (totalWater / 8)}px` }">
          {{ `${(totalWater / 8) * 100}%` }}
        </div>
      </div>
      <p>Select how many glasses of water that you have drank</p>

      <div class="water">
        <div
          :key="i"
          v-for="i in 8"
          class="cup small-cup"
          :class="{ full: cupFull[i - 1] }"
          @click="choose(i - 1)"
        >
          250 ml
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const cupFull = ref(new Array(10).fill(false));
const choose = (i) => {
  if (i === 7 && cupFull.value[i]) i--;
  else if (cupFull.value[i] && !cupFull.value[i + 1]) {
    i--;
  }
  for (let j = 0; j < 8; j++) {
    if (j <= i) {
      cupFull.value[j] = true;
    } else {
      cupFull.value[j] = false;
    }
  }
};

const totalWater = computed(() => {
  return cupFull.value.filter(Boolean).length;
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.water-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-color: #3494e4;
}
.cup {
  background-color: #fff;
  border: 4px solid #144fc6;
  color: #144fc6;
  border-radius: 0 0 40px 40px;
  height: 330px;
  width: 150px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.water {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 280px;
}
.small-cup {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 95px;
  width: 50px;
  margin: 8px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.9);
  transition: 0.3s ease;
}

.full {
  background-color: #6ab3f8;
}
.all {
  overflow: hidden;
  background-color: #6ab3f8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
