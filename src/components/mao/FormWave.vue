<template>
  <div class="container" ref="container">
    <div class="form-wave">
      <h1>帅 逼 填 表</h1>
      <form class="form">
        <div class="input">
          <input />
          <label>
            <span
              :key="index"
              v-for="(letter, index) in email"
              :style="{ 'transition-delay': `${index * 50}ms` }"
              >{{ letter }}</span
            >
          </label>
        </div>
        <div class="input">
          <input />
          <label
            ><span
              :key="index"
              v-for="(letter, index) in password"
              :style="{ 'transition-delay': `${index * 50}ms` }"
              >{{ letter }}</span
            ></label
          >
        </div>
        <button class="btn">Submit</button>
      </form>
      <p class="text">踏 马 的 没 有 号?<a href="#">注 册</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const container = ref(null);
const email = ref("Email");
const password = ref("Password");
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
  background-color: steelblue;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-wave {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px 40px;
  border-radius: 5px;
  position: relative;
}

.form-wave h1 {
  text-align: center;
  margin-bottom: 40px;
}
.form {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

label {
  font-size: 18px;
}

.input input {
  background-color: transparent;
  outline: none;
  border: 0;
  border-bottom: 2px #fff solid;
  padding: 8px 0px;
  font-size: 18px;
  color: #fff;
}
.btn {
  width: 100%;
  cursor: pointer;
  background: lightblue;
  padding: 12px;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.btn:active {
  transform: scale(0.98);
}
.text {
  margin-top: 30px;
}
.text a {
  margin-left: 16px;
  color: lightblue;
  text-decoration: none;
}
input {
  transition: all 0.5s linear;
}

input:focus {
  border-bottom-color: lightblue;
}

input:focus + label span {
  color: lightblue;
  transform: translateY(-30px);
}

.input label {
  position: absolute;
  top: 10px;
  left: 0;
}

.input label span {
  /* 如果动画涉及宽度和高度的变化，那么只有当元素是inline-block或block时，这些变化才会被渲染 */
  display: inline-block;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>
