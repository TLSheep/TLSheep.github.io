<template>
  <div class="nav">
    <div class="container">
      <div class="logo-container">
        <div class="logo">
          <Logo />
        </div>

        <div class="logo-name"></div>
      </div>
      <div class="menu">
        <div class="menu-group">
          <div
            class="menu-item"
            :class="{ chonsen_type: belong_type === 1 }"
            @click="to_mao"
          >
            mao
          </div>
          <div
            class="menu-item"
            :class="{ chonsen_type: belong_type === 2 }"
            @click="to_lan"
          >
            lan
          </div>
        </div>
        <div class="link">
          <div class="link-item">
            <a href="https://www.bilibili.com/" target="_blank">
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Logo from "./icons/logo.vue";
import GitHub from "./icons/GitHub.vue";

const belong_type = ref(2);
const router = useRouter();
function to_mao() {
  if (belong_type.value === 1) return;

  belong_type.value = 1;
  let num = get_url_number();
  console.log(num);
  if (num > 0) router.push("/maoP" + num);
}
function to_lan() {
  if (belong_type.value === 2) return;

  belong_type.value = 2;
  let num = get_url_number();
  console.log(num);
  if (num > 0) router.push("/P" + num);
}

function get_url_number() {
  let url = window.location.href;
  url = url.slice(url.lastIndexOf("/"));
  if (url.length < 2) return -1;
  return url.slice(url.lastIndexOf("P") + 1);
}
</script>
<style scoped>
.nav {
  top: 0;
  position: fixed;
  z-index: 1;
  background-color: #fff;
}

.container {
  width: 100vw;
  height: 56px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.logo-container {
  margin-left: 24px;
  display: flex;
  align-items: center;
}

.logo {
  height: 32px;
}

.logo-name {
  margin-left: 12px;
  font-size: 20px;
}

.link-item {
  height: 32px;
  width: 32px;
}

.link {
  margin-right: 20px;
}

.menu {
  display: flex;
  align-items: center;
}

.menu-group {
  display: flex;
}

.menu-item {
  min-width: 80px;
  font-size: 20px;
  cursor: pointer;
}

.menu-item:hover {
  color: #ff6384;
}

.chonsen_type {
  color: #ff6384;
}
</style>
