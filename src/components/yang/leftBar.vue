<template >
  <div class="outer"> 
  <button id="use_btn" style="position: absolute;z-index: -100;">
    <audio id="change_song" src="audios/change_card.mp3"></audio>
  </button>
  <div class="container">
    <div class="title"> {{ current_chosen===0?"主页":'Project '+current_chosen}}</div>
    <div class="line"></div>
    <div class="content">
      <div
        class="item"
        :class="{ chosen_item: current_chosen === index }"
        @click="on_item_click(index)"
        v-for="index in 50"
        :key="index"
      >
        {{ "Project " + index }}
      </div>
    </div>
    <div class="line"></div>
    <div class="bottom_btn">
      <button @click="()=>{router.push('/');current_chosen=0}">HOME</button>
    </div>
  </div>
</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const current_chosen = ref(0);


onMounted(() => {
  // 模拟点击，从而绕过音乐播放限制
  document.getElementById("use_btn").click();
  const item_list = Array.from(document.getElementsByClassName("item"));
  item_list.forEach(item => {
    item.addEventListener('mouseover', () => {
      const song = document.getElementById("change_song")
      song.pause();
      song.currentTime = 0;
      song.play()
    });
  });
})

function on_item_click(index){
  current_chosen.value = index;
  router.push('/P'+index)
}
</script>
<style scoped>
.outer{
  padding-right:  3px;
  transform: translateX(-99%);
  transition: 0.2s ease-in-out;
  position: relative;
}
.outer:hover{
  transform: translateX(0);
}
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: beige;
}


.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 280px;
  font-size: 32px;
  padding: 20px 12px;
}

.line {
  height: 1px;
  width: 80%;
  border-top: 1px solid #756f6f;

}

.content {
  overflow: auto;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding:20px 0px 20px 6px;
}

.content::-webkit-scrollbar {
  background-color: #d2ebd9;
  width: 3px;
}

.content::-webkit-scrollbar-thumb {
  background-color: #9580f3;
  /* background-color: #d2ebd9; */
  border-radius: 15px;
  width: 6px;
}

.item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55px;
  width: 80%;
  border: 1px solid #333;
  transition: all 0.4s ease-in-out;
  margin-bottom: -1px;
  user-select: none;
}

.item:hover {
  height: 70px;
  width: 90%;
  transition: 0.1s;
}

.chosen_item {
  background-color: #9580f3;
}

.bottom_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border-radius: 12px;
}

.bottom_btn button {
  height: 50px;
  width: 200px;
  border-radius: 12px;
  background-color: rebeccapurple;
  border: none;
  color: #fff;
  font-family: inherit;
  cursor: pointer;
}

.bottom_btn button:active {
  transform: scale(0.98);
}
</style>