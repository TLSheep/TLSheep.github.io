<template>
  <div class="container">
    <router-link class="pro_link" v-for="index in 9" :key="index" :to="`\/P${index}`">
      <button class="pro_btn">{{ "P"+index }}</button>
    </router-link>
  </div>
</template>
<script setup>

</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 20vh 10vw;
  background-color: aquamarine;
  }
.pro_btn {
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-family: inherit;
  cursor: pointer;

}
</style>
