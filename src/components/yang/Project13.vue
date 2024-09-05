<template>
  <div class="container">
    <div class="small_container">
      <div class="title">
        Enter all of the choices divided by a comma (',').
        <br />
        Press enter when you're done
      </div>
      <textarea
        class="text_input"
        v-model="text_input"
        placeholder="Enter choices here..."
        @input="on_input"
        @keyup="on_enter_up"
        :disabled="is_disabled"
      ></textarea>
      <div class="chooses">
        <div
          class="choose"
          :class="{ is_chosen: item.status }"
          v-for="(item, index) in choose_list"
          :key="index"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const choose_list = ref({});
const text_input = ref();
const is_disabled = ref(false);
function on_input() {
  let text = text_input.value;
  //   console.log(text);
  choose_list.value = text
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => {
      return { value: tag.trim(), status: false };
    });
}

function random_shose() {
  is_disabled.value = true;
  let len = choose_list.value.length;
  let index = 0;
  let timer = setInterval(() => {
    // console.log(index);
    choose_list.value[index].status = false;
    index = Math.floor(Math.random() * len);
    choose_list.value[index].status = true;
  }, 100);

  setTimeout(() => {
    clearInterval(timer);
    is_disabled.value = false;
  }, 3000);
}

function on_enter_up(event) {
  if (event.key === "Enter" && choose_list.value.length > 0) {
    random_shose();
  }
}
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: #2b88f0;
}

.small_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: #fff;
  margin: 10px 0 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.text_input {
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid #fff;
  min-height: 200px;
  min-width: 500px;
  resize: none;
  font-family: "Muli", sans-serif;
}
.chooses {
  max-height: 500px;
  max-width: 500px;
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  overflow-y: auto;
  padding-left: 3px;
}
.chooses::-webkit-scrollbar {
  background-color: #d2ebd9;
  width: 3px;
}

.chooses::-webkit-scrollbar-thumb {
  background-color: #3a90f3;
  /* background-color: #d2ebd9; */
  border-radius: 15px;
  width: 6px;
}
.choose {
  background-color: #f89c32;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 0 5px 10px 0;
  font-size: 14px;
}
.choose.is_chosen {
  background-color: #fddcb1;
}
</style>
