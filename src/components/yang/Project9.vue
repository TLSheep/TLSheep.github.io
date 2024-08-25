<template>
  <div class="container">
    <!-- <div class="tip" :class="{tip_show:tip_show}" v-show="tip_show"></div> -->
    <audio
      :id="item.id_name"
      v-for="(item, index) in audios_list"
      :key="index"
      :src="base_url + item.src"
    ></audio>
    <audio
      :id="item.id_name"
      v-for="(item, index) in music_list"
      :key="index"
      :src="music_base_url + item.src"
    ></audio>
    <div class="buttons">
      <button class="btn btn_random" @click="random_play">随机播放</button>
      <div class="audios_btns buttons">
        <button
          class="btn"
          v-for="(item, index) in audios_list"
          :key="index"
          @click="playSong(item.id_name)"
        >
          {{ item.s_name }}
        </button>
      </div>
      <div class="musics_btns buttons">
        <button
          class="btn music_btn"
          v-for="(item, index) in music_list"
          :key="index"
          @click="playSong(item.id_name)"
        >
          {{ item.s_name }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const base_url = ref("audios/");
const music_base_url = ref("music/");
// const tip_show = ref(false);
const current_song_name = ref(null);
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
const music_list = ref([
  {
    id_name: "光年之外 (热爱版) - G.E.M.邓紫棋,艾热 AIR",
    s_name: "光年之外 (热爱版)",
    src: "光年之外 (热爱版) - G.E.M.邓紫棋,艾热 AIR.flac",
  },
  {
    id_name: "睡皇后 - G.E.M.邓紫棋",
    s_name: "睡皇后",
    src: "睡皇后 - G.E.M.邓紫棋.flac",
  },
  {
    id_name: "再见 (Club Remix) - G.E.M.邓紫棋",
    s_name: "再见 (Club Remix)",
    src: "再见 (Club Remix) - G.E.M.邓紫棋.flac",
  },
  {
    id_name: "FIND YOU - G.E.M.邓紫棋",
    s_name: "FIND YOU",
    src: "FIND YOU - G.E.M.邓紫棋.flac",
  },
  {
    id_name: "Victoria - G.E.M.邓紫棋",
    s_name: "Victoria",
    src: "Victoria - G.E.M.邓紫棋.flac",
  },
  {
    id_name: "I Really Want to Stay At Your House - Rosa Walton,Hallie Coggins",
    s_name: "I Really Want to Stay At Your House",
    src: "I Really Want to Stay At Your House - Rosa Walton,Hallie Coggins.flac",
  },
  {
    id_name: "美好的事可不可以发生在我身上 - 康士坦的变化球",
    s_name: "美好的事可不可以发生在我身上",
    src: "美好的事可不可以发生在我身上 - 康士坦的变化球.flac",
  },
]);
const all_songs = ref(audios_list.value.concat(music_list.value));
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
function random_play() {
  const random_index = Math.floor(Math.random() * all_songs.value.length);
  playSong(all_songs.value[random_index].id_name);
  current_song_name.value = all_songs.value[random_index].s_name;
}
</script>
<style scoped>
.container {
  padding: 0 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a164df;
  /* height: 100%; */
  height: calc(100vh - var(--homepage-top-bar-height));
  width: 100%;
  position: relative;
}
.tip {
  position: absolute;
  box-sizing: content-box;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
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
  user-select: none;
}
.btn:active {
  transform: scale(0.98);
}

.btn:hover {
  opacity: 0.9;
}

.btn_random {
  /* width: 100%; */
  /* width: 20px; */
  /* height: 100%; */
  background-color: #3a90f3;
}
.music_btn {
  background-color: #f89c32;
}
</style>