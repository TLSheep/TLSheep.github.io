<template>
  <div class="container">
    <div
      :key="sound.id"
      @click="playSound(sound.name)"
      v-for="sound in props.sounds"
      class="sound-board"
    >
      {{ sound.name }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sounds: {
    type: Array,
    required: false,
    default: () => [
      {
        id: 1,
        name: "我",
      },
      {
        id: 2,
        name: "是",
      },
      {
        id: 3,
        name: "帅",
      },
      {
        id: 4,
        name: "逼",
      },
    ],
  },
});

const audio = new Audio();
const playSound = (name) => {
  audio.src = `src/asset/sounds/${name}.mp3`;
  audio.play();
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(161, 100, 223);
}
.sound-board {
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 150px;
  background-color: rebeccapurple;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.sound-board:hover {
  opacity: 0.9;
}

.sound-board:active {
  transform: scale(0.98);
}
</style>
