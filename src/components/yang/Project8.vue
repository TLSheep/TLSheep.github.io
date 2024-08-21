<template>
  <div class="container">
    <div class="small_container">
      <div class="title">Please Login</div>
      <form>
        <div class="input_box" v-for="item in input_set" :key="item.id">
          <input class="input_field" :type="item.type" required />
          <label class="input_label">
            <span
              v-for="(word, index) in item.text"
              :key="index"
              :style="{ transitionDelay: index * 40 + 'ms' }"
            >
              {{ word }}
            </span>
          </label>
        </div>
        <button class="btn">Login</button>
      </form>
      <div class="bottom_link">
        Don't have an account?
        <a href="#">Register</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const input_set = ref([
  {
    id: 0,
    text: "Email",
    type: "text",
  },
  {
    id: 1,
    text: "Password",
    type: "password",
  },
]);
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.container {
  height: 100vh;
  width: 100vw;
  background-color: #4682b4;

  display: flex;
  justify-content: center;
  align-items: center;
}

.small_container {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  padding: 15px 0;
  color: #fff;
  display: block;
  font-size: 2em;
  font-weight: bold;
  font-family: "Muli", sans-serif;
}

.input_box {
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
}

.input_field {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
  outline: none;
}

.input_label {
  position: absolute;
  top: 15px;
  color: #fff;
}

.btn {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.btn:focus {
  outline: 0;
}

.btn:active {
  transform: scale(0.98);
}

.bottom_link {
  color: #fff;
  font-size: 16px;
  margin: 30px 0 10px 0;
}

.bottom_link a {
  text-decoration: none;
  color: #add8e6;
}

.input_field:focus,
.input_field:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.input_label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.input_field:focus + .input_label span,
.input_field:valid + .input_label span {
  color: lightblue;
  transform: translateY(-30px);
}
</style>
