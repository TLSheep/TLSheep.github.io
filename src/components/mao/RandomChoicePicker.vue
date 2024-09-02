<template>
  <div class="container">
    <h2>
      Enter all of the choices divided by a comma (','). <br />
      Press enter when you're done
    </h2>
    <textarea
      class="input"
      @input="handleInput"
      placeholder="Enter choices here..."
    ></textarea>
    <div class="tags">
      <span class="tag" v-for="(tag, index) in input" :key="index">{{
        tag
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const input = ref([]);

const handleInput = (e) => {
  let result = e.target.value.split(",").filter((item) => item.trim());
  input.value = result;
};
</script>

<style scoped>
h2 {
  color: #fff;
  text-align: center;
}
.container {
  width: 100%;
  height: 100%;
  background-color: #2b88f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input {
  width: 500px;
  border-radius: 6px;
  outline: none;
  border: 0;
  min-height: 80px;
  font-size: 16px;
  padding: 8px;
}
.tags {
  margin-top: 16px;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.tag {
  background-color: #f0932b;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 0 5px 10px 0;
  font-size: 14px;
}
</style>
