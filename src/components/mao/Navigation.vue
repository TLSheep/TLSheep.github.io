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
          <div class="menu-item">mao</div>
          <div class="menu-item">lan</div>
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
import Logo from "./icons/logo.vue";
import GitHub from "./icons/GitHub.vue";
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
</style>
