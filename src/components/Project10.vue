<template>
  <div class="container">
    <div class="small_container">
        <div class="title">Don't Laugh Challenge</div>
        <div class="text">{{ joke_text }}</div>
        <button class="btn" @click="get_joke()">Get A New Joke</button>
    </div>
    
  </div>
</template>
<script setup>
// import fetch from '../utils/fetch.js'
import {onMounted, ref} from 'vue'
const joke_text = ref('')
async function get_joke() {
            await fetch('https://icanhazdadjoke.com', {
                headers: {
                    'Accept': 'application/json'
                }
            }).then(res =>{
                res.json().then(data => {
                    console.log(data)
                    joke_text.value = data.joke
                })
        })
    }
onMounted(() => {
    get_joke()
})


</script>
<style scoped>
.container{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #686de0;
   
}
.small_container {
	height: 310px;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
    padding: 50px 0;
}
.title {
    text-align: center;
    font-size: 16px;
    margin: 0;
    opacity: 0.5;
    letter-spacing: 2px;
    color: #000;
    font-weight: bold;
}
.text {
	font-size: 24px;
    letter-spacing: 1px;
    color: #000;
    min-height: 180px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}
.btn {
    background-color: #9f68e0;
    color: #fff;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
    padding: 14px 40px;
    font-size: 16px;
    cursor: pointer;
}
.btn:active{
    transform: scale(0.98);
}
</style>
