<template>
  <div class="container">
    <audio
      :id="item.id_name"
      v-for="(item, index) in audios_list"
      :key="index"
      :src="base_url+item.src"
    ></audio>
    <div class="buttons">
      <button
        class="btn"
        v-for="(item, index) in audios_list"
        :key="index"
        @click="playSong(item.id_name)"
      >
        {{ item.s_name }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const base_url=ref('audios/')
const audios_list = ref([
  {
    id: 0,
    id_name: "mb",
    s_name: "Manbo",
    src: "mb-1.mp3",
  },
  {
    id: 1,
    id_name: "amns",
    s_name: "Aminuosi",
    src: "amns.mp3",
  },
  {
    id: 2,
    id_name: "hjm",
    s_name: "Hjimi",
    src: "hjm.mp3",
  },
  {
    id: 3,
    id_name: "hhd",
    s_name: "Heh",
    src: "hhd.mp3",
  },
  {
    id: 4,
    id_name: "www",
    s_name: "WHOOO~",
    src: "www.mp3",
  },
  {
    id: 5,
    id_name: "redf",
    s_name: "Shy",
    src: "redf.mp3",
  },
  {
    id: 6,
    id_name: "smallbaby",
    s_name: "littleBaby",
    src: "smallbaby.mp3",
  },
  {
    id: 7,
    id_name: "swordB",
    s_name: "swordB",
    src: "swordB.mp3",
  },
  {
    id: 8,
    id_name: "lookatum",
    s_name: "lookAtUM",
    src: "lookatum.mp3",
  },
  {
    id: 9,
    id_name: "smallWallLight",
    s_name: "smallWallLight",
    src: "smallWallLight.mp3",
  },
  {
    id: 10,
    id_name: "oldWallLight",
    s_name: "oldWallLight",
    src: "oldWallLight.mp3",
  },
  {
    id: 11,
    id_name: "whySword",
    s_name: "whySword",
    src: "whySword.mp3",
  },
  {
    id: 12,
    id_name: "LBW",
    s_name: "LBW",
    src: "LBW.mp3",
  },
  {
    id: 13,
    id_name: "likeDog",
    s_name: "likeDog",
    src: "likeDog.mp3",
  },
  {
    id: 14,
    id_name: "getFace",
    s_name: "getFace",
    src: "getFace.mp3",
  },
  {
    id: 15,
    id_name: "loseFace",
    s_name: "loseFace",
    src: "loseFace.mp3",
  },
  {
    id: 16,
    id_name: "fly",
    s_name: "fly",
    src: "fly.mp3",
  },
  {
    id: 17,
    id_name: "dream",
    s_name: "dream",
    src: "dream.mp3",
  },
  {
    id: 18,
    id_name: "bigMouth",
    s_name: "bigMouth",
    src: "bigMouth.mp3",
  },
  {
    id: 19,
    id_name: "beSmart",
    s_name: "beSmart",
    src: "beSmart.mp3",
  },
  {
    id: 20,
    id_name: "shit",
    s_name: "shit!!",
    src: "shit.mp3",
  },
]);
let current_song = null;

function playSong(name) {
  stopSongs();
  document.getElementById(name).play();
  current_song = name;
}

function stopSongs() {
  if (current_song) {
    const song = document.getElementById(current_song);
    song.pause();
    song.currentTime = 0;
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.container {
    padding: 0 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A164DF;
    min-height: 100vh;
    width: 100%;
  
}
.buttons {
	display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.btn {
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-family: inherit;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}

</style>