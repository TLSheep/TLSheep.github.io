<template>
  <!-- <div>
  </div> -->
  <div class="app" style="background-color: #fff">
    <Navigation class="top_bar"></Navigation>
    <leftBar class="leftBar"></leftBar>
    <div class="main">
      <router-view class="router_view"></router-view>
    </div>
    <!-- <homePage></homePage> -->
    <!-- <Mm></Mm> -->
    <!-- <P9></P9> -->
    <!-- <P8></P8> -->
    <!-- <P7></P7> -->
    <!-- <P6></P6> -->
    <!-- <P5></P5> -->
    <!-- <P4></P4> -->
    <!-- <P3>
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>

        <h3>My Photo</h3>
        <img style="max-width: 1000px;" src="../public/imgs/5.jpeg">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
    </P3> -->
    <!-- <P2></P2> -->
    <!-- <P1></P1> -->
  </div>
</template>
<script setup>
import leftBar from "./components/yang/leftBar.vue";
import Navigation from "./components/mao/Navigation.vue";
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
  position: relative;
  overflow: hidden;
}

.leftBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 占满剩下空间 */
  flex-grow: 1;
  margin-top: 56px;
  min-height: calc(100vh - var(--homepage-top-bar-height));
}

.top_bar {
  /* position: absolute; */
}
.router_view {
  /* max-height: calc(100vh - var(--homepage-top-bar-height)); */
}
</style>
