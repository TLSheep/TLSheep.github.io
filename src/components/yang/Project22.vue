<template>
  <div class="container" ref="containerRef">
    <canvas class="canvas" ref="canvasRef" @mousemove="on_mousemove"></canvas>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const containerRef = ref(null);
const canvasRef = ref(null);

let imgUrl = "/imgs/sgmm.png";
let ctx = null;
let g = null;
let lastDrawTime = null;
onMounted(async () => {
  init();
  const pointsEx = await get_pattern_array(imgUrl);
  // console.log(pointsEx);
  g = new Graph(pointsEx);

  g.draw();
});

// console.log(pointsex);
function init() {
  canvasRef.value.height = window.innerHeight * devicePixelRatio;
  canvasRef.value.width = window.innerWidth * devicePixelRatio;
  ctx = canvasRef.value.getContext("2d");
}
async function get_pattern_array(img_url) {
  let img = await loadImage(img_url);

  console.log(img);
  let returnPoints = [];

  // 将图片绘制到canvas上
  ctx.drawImage(img, 0, 0, img.width, img.height);

  // 获取整个canvas的像素数据
  const imageData = ctx.getImageData(0, 0, img.width, img.height);
  console.log(imageData);
  const image_data = imageData.data;
  let black_count = 0;
  for (let i = 0; i < img.height; i++) {
    for (let j = 0; j < img.width; j++) {
      let index = get_index(j, i, img.width);
      const red = image_data[index];
      const green = image_data[index + 1];
      const blue = image_data[index + 2];
      const alpha = image_data[index + 3];
      if (red < 200 && green < 200 && blue < 200) {
        returnPoints.push(new Point(600 + 5 * j, 300 + 5 * i, 1.5, "#C2C2C2"));
        black_count++;
      }
    }
  }
  // console.log(returnPoints);
  return returnPoints;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = function () {
      resolve(img); // 图像加载成功
    };

    img.onerror = function (error) {
      reject(error); // 图像加载失败
    };
  });
}

function on_mousemove(e) {
  if (lastDrawTime && Date.now() - lastDrawTime < 100) return;
  lastDrawTime = Date.now();
  const sX = e.clientX;
  const sY = e.clientY;
  let count = 0;
  g.points.forEach((point) => {
    const distance = get_distance(point, { x: sX, y: sY });
    if (distance < 100) {
      let ofx = (sX - point.x) / Math.abs(sX - point.x);
      let ofy = (sY - point.y) / Math.abs(sY - point.y);
      point.offsetX = ofx * (50 - distance * 0.1);
      point.offsetY = ofy * (50 - distance * 0.1);
    } else {
    }
  });
  g.draw();
}
function get_distance(p1, p2) {
  return Math.floor(
    Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
  );
}
function getArray(height, width) {
  return Array.from({ length: height }, () =>
    Array.from({ length: width }, () => 0)
  );
}
function get_index(x, y, len) {
  return (y * len + x) * 4;
}
class Graph {
  points;
  constructor(points) {
    this.points = points;
    console.log(this.points);
  }

  draw() {
    // requestAnimationFrame(() => {
    //   this.draw();
    // });
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

    this.points.forEach((point) => {
      point.draw();
    });
  }
}

class Point {
  constructor(x, y, radius = "2", color = "#000") {
    this.x = x * devicePixelRatio;
    this.y = y * devicePixelRatio;
    this.radius = radius * devicePixelRatio;
    this.color = color;
    this.offsetX = 0 * devicePixelRatio;
    this.offsetY = 0 * devicePixelRatio;
    this.speedX = 0 * devicePixelRatio;
    this.speedY = 0 * devicePixelRatio;
    this.lastDrawTime = null;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(
      this.x + this.offsetX,
      this.y + this.offsetY,
      this.radius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.canvas {
  background-color: #121212;
}
</style>