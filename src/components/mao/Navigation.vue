<template>
  <div class="nav">
    <div class="container">
      <div class="logo-container">
        <div class="logo" @click="to_home">
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
import { tab_card_status } from "../util";
import Logo from "./icons/logo.vue";
import GitHub from "./icons/GitHub.vue";
import lanRouter from "../../router/lanRouter";
import maoRouter from "../../router/maoRouter";
const belong_type = ref(tab_card_status.value);
const router = useRouter();
function to_mao() {
  if (belong_type.value === 1) return;

  belong_type.value = 1;
  tab_card_status.value = 1;
  if (tab_card_status.current_index === -1) {
    router.push("/");
  } else {
    router.push(maoRouter[tab_card_status.current_index]?.path ?? "/404");
  }
}
function to_lan() {
  if (belong_type.value === 2) return;

  belong_type.value = 2;
  tab_card_status.value = 2;
  if (tab_card_status.current_index === -1) {
    router.push("/");
  } else {
    router.push(lanRouter[tab_card_status.current_index]?.path ?? "/404");
  }
}

function to_home() {
  router.push("/");
  tab_card_status.current_index = -1;
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
  cursor: pointer;
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
