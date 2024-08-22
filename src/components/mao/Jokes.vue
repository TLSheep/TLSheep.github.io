<template>
  <div class="container">
    <div class="card">
      <h3>Dad Jokes</h3>
      <div class="joke">
        {{ joke }}
      </div>
      <button class="btn" @click="getJoke">Get a Joke</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const joke = ref("我是帅逼");
const getJoke = () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      joke.value = data.joke;
    });
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  height: 100%;
  width: 100%;
  background-color: #686de0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  padding: 20px 50px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h3 {
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
}
.joke {
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  text-align: center;
  max-width: 550px;
}
.btn {
  background-color: #9f68e0;
  color: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  cursor: pointer;
  height: 45px;
  width: 180px;
}

.btn:active {
  transform: scale(0.98);
}
</style>
