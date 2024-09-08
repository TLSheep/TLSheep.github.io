<template>
  <div class="container">
    <div class="header">
      <input
        type="text"
        placeholder="请输入电影名"
        v-model="search_text"
        @keyup="on_enter_up"
      />
    </div>
    <div class="main_contain">
      <div class="no_result" v-show="!have_result">暂无数据</div>
      <div
        v-show="have_result"
        class="movie_item"
        v-for="item in home_films"
        :key="item.id"
      >
        <img
          :src="'https://images.weserv.nl/?url=' + item.cover"
          alt="空"
          @click="to_url(item.url)"
        />
        <div class="movie_info">
          <div class="movie_title">{{ item.title }}</div>
          <div class="movie_score">{{ item.rate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
const home_films = ref([]);
const search_text = ref();
const have_result = ref(true);

onMounted(() => {
  const home_url =
    "/douban/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=100&page_start=0";
  fetch(home_url).then((res) => {
    res.json().then((data) => {
      console.log(data);
      home_films.value = data.subjects.map((item) => {
        return {
          title: item.title,
          rate: item.rate,
          url: item.url,
          cover: item.cover,
        };
      });
    });
    console.log(res);
  });
});
//   api：https://search.douban.com/movie/subject_search?search_text=x&cat=1002
//   api：https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0

function to_url(url) {
  window.open(url);
}

function on_enter_up(event) {
  if (event.key === "Enter") {
    get_search();
  }
}
// 不使用第三方缓存（没搞好）
async function get_image_url(url) {
  let first_index = url.indexOf("view/");
  let new_url = "/doubanimage/" + url.slice(first_index);
  console.log(new_url);

  await fetch(new_url, {
    method: "GET",
    headers: new Headers({
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 SE 2.X MetaSr 1.0",
      accept:
        "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    }),
  })
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      const image_url = URL.createObjectURL(blob);
      return image_url;
    });
}
async function get_search() {
  await fetch(
    "/doubansearch/movie/subject_search?search_text=" + search_text.value
  )
    .then((res) => {
      return res.text();
    })
    .then((html) => {
      // console.log(html);
      // 解析HTML字符串为DOM
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      console.log(doc);
      // 在解析后的DOM中查找包含 window.__DATA__ 的脚本标签
      const scripts = doc.querySelectorAll("script");
      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        // console.log(script.textContent);
        // 检查是否包含 window.__DATA__
        if (script.textContent.includes("window.__DATA__")) {
          // 提取并解析 JSON 数据
          const str = script.textContent;
          // 截取 window.__DATA__
          const firstindex = str.indexOf("=");
          const lastindex = str.indexOf("};");
          const match = str.slice(firstindex + 1, lastindex + 1);
          // console.log(match);

          if (match.length > 0) {
            // 转为json格式数据
            const data = JSON.parse(match);
            console.log(data);
            //  q清空原数组更新显示
            home_films.value = [];
            // 统一格式化
            home_films.value = data.items
              // 有的时候会检索到人名，晒出去
              .filter((item) => item.abstract !== undefined)
              .map((item) => {
                return {
                  title: item.title,
                  rate: item.rating.value,
                  url: item.url,
                  cover: item.cover_url,
                };
              });
            if (home_films.value.length === 0) have_result.value = false;
            else have_result.value = true;
            console.log(home_films.value); // 打印数据
            return;
          }
        }
      }
    });
  console.log("搜索：" + search_text.value);
  console.log(have_result.value);
}
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: #22254b;
  overflow-y: auto;
}
.header {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #373b69;
}
.header input {
  background-color: transparent;
  border: 2px solid #22254b;
  border-radius: 50px;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  outline: none;
}
.header input::placeholder {
  color: #7378c5;
}

.header input:focus {
  outline: none;
  background-color: #22254b;
}
.main_contain {
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
  padding-left: 80px;
  padding-bottom: 150px;
  /* justify-content: center; */
  /* overflow-y: auto; */
}
.no_result {
  margin-top: 20px;
  width: 100%;
  font-size: 36px;
  color: #fff;
  font-family: "楷体";
  letter-spacing: 5px;
}
.movie_item {
  /* box-sizing: content-box; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px 0;
  background-color: #373b69;
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  /* max-height: 410px; */
}
.movie_item img {
  cursor: pointer;
  display: boder-box;
  width: 100%;
  width: 270px;
  height: 350px;
  object-fit: contain;
}
.movie_info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: #fff;
  padding: 20px 0 10px 0;
}
.movie_title {
  max-width: 160px;
  font-size: 26px;
  font-family: "楷体";
  word-wrap: break-word;
  text-align: center;
}
.movie_score {
  background-color: #22254b;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
  color: orange;
}
</style>