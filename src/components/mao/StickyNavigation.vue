<template>
  <div class="container">
    <div class="nav">
      <div class="nav-content">
        <h1 class="logo"><a href="#">My Website</a></h1>
        <ul class="items">
          <li><a href="#" class="current">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="hero" :style="{ backgroundImage: `url(${imgae})` }">
      <div class="hero-content">
        <h1>Welcome To My Website</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur?
        </p>
      </div>
    </div>

    <section class="content">
      <h2>Content One</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
        quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
        officia aperiam corporis similique. Facilis quos tempore labore totam!
        Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
        modi dolorem sit architecto, voluptate magni sunt unde est quas?
        Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
        libero laboriosam ab eligendi omnis delectus earum labore, placeat
        officiis sint illum rem voluptas ipsum repellendus iste eius recusandae
        quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et
        iste dolorum obcaecati minus odio eligendi!
      </p>

      <h3>Content Two</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        provident nostrum possimus inventore nisi laboriosam consequatur modi
        nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
        provident, voluptates illo odio nostrum minima beatae similique a sint
        sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
        quae iste aperiam hic cumque repellat?
      </p>
    </section>
  </div>
</template>

<script setup>
import imgae from "../../assets/mao/imgs/3.jpg";
import { onMounted } from "vue";

onMounted(() => {
  const hero = document.querySelector(".hero");
  const content = document.querySelector(".nav-content");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          content.classList.remove("white");
        } else {
          content.classList.add("white");
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.5 }
  );

  observer.observe(hero);
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.nav {
  position: fixed;
  width: calc(100% - 20px);
  background-color: #222;
  transition: all 0.3s ease-in-out;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 7px 15px;
  transition: all 0.3s ease-in-out;
}

.white {
  padding: 0 0;
  background-color: #fff;
  color: #222;
}

.white a {
  color: #222;
}

a:hover {
  color: #c0392b;
}

.items {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
}

.items li {
  padding: 0 20px;
}
.logo {
  margin-left: 16px;
}
.hero {
  margin-top: 56px;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content h1 {
  font-size: 46px;
  margin: -20px 0 20px;
}

.hero-content p {
  font-size: 20px;
  letter-spacing: 1px;
}

.content h2,
.content h3 {
  font-size: 150%;
  margin: 50px;
}

.content p {
  color: #555;
  line-height: 30px;
  letter-spacing: 1.2px;
  margin: 0 50px;
}
</style>
