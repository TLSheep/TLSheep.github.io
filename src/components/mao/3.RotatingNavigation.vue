<template>
  <div class="contain" :class="{ active2: active }">
    <div class="circle-container" :class="{ active: active }" @click="change">
      <div class="close"><Close></Close></div>
      <div class="open"><Menu></Menu></div>
    </div>
    <div class="content">
      <h1>Amazing Article</h1>
      <small>Florin Pop</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
        dolor omnis atque fuga labore modi veritatis porro laborum minus, illo,
        maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia
        labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus
        veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
        Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum
        sint nam quas dolor dignissimos in error placeat quae temporibus minus
        optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
        Ducimus consequuntur perferendis consequatur nobis exercitationem
        molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
      </p>

      <h3>My Dog</h3>
      <img
        src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        alt="doggy"
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
        deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere
        earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis
        totam placeat molestias illo laudantium? Minus id minima doloribus
        dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus
        veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo
        provident. Voluptates sint, neque fuga cum illum, tempore autem maxime
        similique laborum odio, magnam esse. Aperiam?
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Close from "./icons/close.vue";
import Menu from "./icons/menu.vue";
import Menu from "./icons/menu.vue";

const active = ref(false);

const change = () => {
  active.value = !active.value;
};
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
}
.contain {
  background-color: #fafafa;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
  transition: transform 0.5s linear;
  transform-origin: top left;
}
.circle-container {
  background-color: #ff7979;
  position: fixed;
  top: -100px;
  left: -100px;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  transition: transform 0.5s linear;
}

.close {
  position: absolute;
  height: 50px;
  width: 50px;
  cursor: pointer;
  left: 60%;
  top: 50%;
}

.open {
  position: absolute;
  height: 50px;
  width: 50px;
  cursor: pointer;
  left: 10%;
  top: 50%;
}

.active {
  transform: rotate(-90deg);
}
.content img {
  max-width: 100%;
}

.content {
  max-width: 1000px;
  margin: 50px auto;
}

.content h1 {
  margin: 0;
}

.content small {
  color: #555;
  font-style: italic;
}

.content p {
  color: #333;
  line-height: 1.5;
}
.active2 {
  transform: rotate(-20deg);
}
</style>
