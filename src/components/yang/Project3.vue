<template >
  <div class="P3">
    <div class="container" :class="{ show_nav: show_nav }">
      <div class="circle_container">
        <div class="circle">
          <button
            id="open"
            class="btn iconfont icon-liebiao"
            @click="show_nav = true"
          ></button>
          <button
            id="close"
            class="btn iconfont icon-guanbi"
            @click="show_nav = false"
          ></button>
        </div>
      </div>
      <div class="content">
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
          dolor omnis atque fuga labore modi veritatis porro laborum minus,
          illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur
          mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem
          provident natus veritatis molestiae cumque quod voluptates ab non,
          tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium
          iure aliquam rerum sint nam quas dolor dignissimos in error placeat
          quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe
          voluptates laudantium. Ducimus consequuntur perferendis consequatur
          nobis exercitationem molestias fugiat commodi omnis. Asperiores quia
          tenetur nemo ipsa.
        </p>

        <h3>My Photo</h3>
        <img style="max-width: 1000px" src="/imgs/5.jpeg" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
          deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
          facere earum unde harum. Ea culpa veritatis magnam at aliquid.
          Perferendis totam placeat molestias illo laudantium? Minus id minima
          doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
          temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
          explicabo provident. Voluptates sint, neque fuga cum illum, tempore
          autem maxime similique laborum odio, magnam esse. Aperiam?
        </p>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>
          <div class="iconfont icon-home">HOME</div>
        </li>
        <li>
          <div class="iconfont icon-yonghu">ABOUT</div>
        </li>
        <li>
          <div class="iconfont icon-email-s">CONTACT</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show_nav = ref(false);
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.P3 {
  font-family: "Lato", sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
  width: 100vw;
  height: 100%;
}
.P3::-webkit-scrollbar {
  /*隐藏滚动条*/
  display: none;
}
.container {
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;

  padding: 50px;
}

.circle_container {
  position: fixed;
  top: -100px;
  left: -100px;
}

.circle {
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
}

.btn {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
}

#close {
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
}

#open {
  left: 60%;
}

.content {
  max-width: 1000px;
  margin: 50px 0;
  font-family: "Courier New", Courier, monospace;
}

.show_nav {
  transform: rotate(-20deg);
}

.show_nav .circle {
  transform: rotate(-70deg);
}
.show_nav + .nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

.nav {
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;
}

.nav ul {
  list-style-type: none;
  padding-left: 30px;
}

.nav ul li div {
  font-size: 20px;
  margin-right: 10px;
}

.nav ul li {
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

.nav ul li + li {
  margin-left: 15px;
  transform: translateX(-150%);
}

.nav ul li + li + li {
  margin-left: 30px;
  transform: translateX(-200%);
}
</style>
