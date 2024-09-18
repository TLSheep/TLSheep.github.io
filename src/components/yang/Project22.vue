<template>
  <div class="container" ref="containerRef">
    <button class="btn" @click="reset_point">RESET</button>
    <canvas
      id="canvasJq"
      class="canvas"
      ref="canvasRef"
      @mousemove="on_mousemove"
    ></canvas>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
let jjjj = 0;
// 像素检测标准
const standard = { red: 180, bule: 180, green: 180 };
// 基本偏移
const offSet = { x: 400, y: 300 };
// 间隔
const marginInside = 5;
// 刷新间隔
const refreshInterval = 20;
const containerRef = ref(null);
const canvasRef = ref(null);
const canvas_height = window.innerHeight * devicePixelRatio;
const canvas_width = window.innerWidth * devicePixelRatio;

const mousePoint = ref({ x: 0, y: 0 });
let imgUrl = "/imgs/sgmm.png";
// imgUrl = "/imgs/mm.jpg";
// imgUrl = "/imgs/lc.png";
let ctx = null;
let g = null;
let mouseLastMoveTime = 0;
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
  // console.log(canvasRef.value.width);
}
async function get_pattern_array(img_url) {
  let img = await loadImage(img_url);

  console.log(img);
  let returnPoints = [];

  // 将图片绘制到canvas上
  ctx.drawImage(img, 0, 0, img.width, img.height);

  // 获取整个canvas的像素数据
  const imageData = ctx.getImageData(0, 0, img.width, img.height);
  // console.log(imageData);
  const image_data = imageData.data;
  let black_count = 0;
  for (let i = 0; i < img.height; i++) {
    for (let j = 0; j < img.width; j++) {
      let index = get_index(j, i, img.width);
      const red = image_data[index];
      const green = image_data[index + 1];
      const blue = image_data[index + 2];
      // const alpha = image_data[index + 3];
      if (
        red < standard.red &&
        green < standard.green &&
        blue < standard.bule
      ) {
        // if (true)
        returnPoints.push(
          new Point(
            offSet.x + marginInside * j,
            offSet.y + marginInside * i,
            1.5,
            "#C2C2C2"
          )
        );
        black_count++;
        // return returnPoints;
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
  if (mouseLastMoveTime && Date.now() - mouseLastMoveTime < refreshInterval)
    return;
  mouseLastMoveTime = Date.now();
  mousePoint.value = {
    x: e.clientX - containerRef.value.offsetLeft,
    y: e.clientY - containerRef.value.offsetTop,
  };
}
function get_jiaodu(p1, p2) {
  return Math.atan(Math.abs((p1.curretntY - p2.y) / (p1.curretntX - p2.x)));
}
function get_distance(p1, p2) {
  return Math.floor(
    Math.sqrt(
      Math.pow(p1.curretntX - p2.x, 2) + Math.pow(p1.curretntY - p2.y, 2)
    )
  );
}

function get_index(x, y, len) {
  return (y * len + x) * 4;
}

function fake_speed_to(point, baseDistance, time = 200) {
  point.timer++;
  const destination = { x: point.destinationX, y: point.destinationY };
  // const currentPosition = { x: point.curretntX, y: point.curretntY };
  if (
    get_distance(point, { x: point.destinationX, y: point.destinationY }) <= 2
  ) {
    point.curretntX = point.destinationX;
    point.curretntY = point.destinationY;
    return;
  }
  const jiaodu = get_jiaodu(point, destination);
  const speed = get_distance(point, destination) / baseDistance;
  const dofx =
    Math.cos(jiaodu) * (destination.x - point.curretntX < 0 ? -1 : 1) * speed;
  const dofy =
    Math.sin(jiaodu) * (destination.y - point.curretntY < 0 ? -1 : 1) * speed;
  // clearTimeout(point.timer);
  jjjj++;
  point.curretntX += dofx * 2;
  point.curretntY += dofy * 2;
  setTimeout(
    () =>
      // fake_speed_to_continue(point, dofx, dofy, time, point.timer),
      fake_speed_to(point, baseDistance, time),
    time
  );
}

function fake_speed_to_continue(point, dofx, dofy, time, timer) {
  if (point.timer != timer) return;
  if (
    get_distance(point, { x: point.destinationX, y: point.destinationY }) <= 3
  ) {
    point.curretntX = point.destinationX;
    point.curretntY = point.destinationY;
    return;
  }
  point.curretntX += dofx * 2;
  point.curretntY += dofy * 2;
  setTimeout(
    () => fake_speed_to_continue(point, dofx, dofy, time, point.timer),
    time
  );
}

function update_point_speed(point, ofx, ofy, time = 200) {
  if (get_distance(point, point) < 2) {
    point.curretntX = point.x;
    point.curretntY = point.y;
    return;
  } else {
    point.speedX /= 2;
    point.speedY /= 2;
  }

  // 检查速度是否接近零
  if (Math.abs(point.speedX) > 0.1 || Math.abs(point.speedY) > 0.1) {
    // 继续定时更新
    setTimeout(() => update_point_speed(point, ofx, ofy), time);
  } else {
    // 速度接近零时清零
    point.speedX = 0;
    point.speedY = 0;
  }
}
function getArray(height, width) {
  return Array.from({ length: height }, () =>
    Array.from({ length: width }, () => 0)
  );
}
function fake_move_by_speed() {}
class Graph {
  points;
  mindistance_30 = 20;
  mindistance_50 = 50;
  constructor(points) {
    this.points = points;
    console.log(this.points);
  }

  draw() {
    requestAnimationFrame(() => {
      this.draw();
    });
    // console.log(canvasRef.value.width);
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    console.log(jjjj);
    this.points.forEach((point) => {
      if (true) {
        const mouse = mousePoint.value;
        // let count = 0;
        // 点与鼠标的夹角
        const jiaodu = get_jiaodu(point, mouse);
        // 点与鼠标的距离
        let mdistance = get_distance(point, mouse);
        // 于源点的位置
        const hdistance = get_distance(point, point);
        // x,y方向的偏移倍率
        const mofx =
          Math.cos(jiaodu) * (point.curretntX - mouse.x < 0 ? -1 : 1);
        const mofy =
          Math.sin(jiaodu) * (point.curretntY - mouse.y < 0 ? -1 : 1);

        switch (this.get_type(mdistance)) {
          case "quick_out":
            point.curretntX += Math.floor(
              (this.mindistance_30 - mdistance) * mofx
            );
            point.curretntY += Math.floor(
              (this.mindistance_30 - mdistance) * mofy
            );
            mdistance = 30;
          // 离得近的直接挪到边界距离之外
          // 然后执行缓慢移动
          case "slow_out":
            point.destinationX =
              point.curretntX +
              Math.floor((this.mindistance_50 - mdistance) * mofx);
            point.destinationY =
              point.curretntY +
              Math.floor((this.mindistance_50 - mdistance) * mofy);
            fake_speed_to(point, mdistance, refreshInterval);
            break;
          case "around3":
            // 判断是否超出边界
            if (
              (point.curretntX - point.x) * (point.curretntX - mouse.x) >= 0 &&
              (point.curretntY - point.y) * (point.curretntY - mouse.y) >= 0
            ) {
              let xx = point.curretntX - point.x > 0 ? 0.9 : -0.9;
              let yy = point.curretntY - point.y > 0 ? 0.9 : -0.9;
              // 未超出边界
              // 沿着切线方向行进
              point.destinationX = point.curretntX + 2 * Math.abs(mofy) * xx;
              point.destinationY = point.curretntY + 2 * Math.abs(mofx) * yy;
              fake_speed_to(point, 0.5, refreshInterval);
              break;
            } else {
              // 超出边界，可以回归原定位置
              // 不执行break,接着执行normal
            }
          // break;
          case "normal":
            point.destinationX = point.x + mofx * (15 - mdistance / 500);
            point.destinationY = point.y + mofy * (15 - mdistance / 500);
            // point.destinationY = point.y;
            fake_speed_to(point, 50, refreshInterval);
            break;
          case "back":
            if (hdistance >= 2) {
              // point.speedX = -oofx * 50 * (1 - 2 / odistance);
              // point.speedY = -oofy * 50 * (1 - 2 / odistance);
              // update_point_speed(point, oofx, oofy, 100);
              point.destinationX = point.x;
              point.destinationY = point.y;
              fake_speed_to(point, 100, refreshInterval);
            } else {
              // 只剩一点强行归位
              point.curretntX = point.x;
              point.curretntY = point.y;
            }
            break;
        }
        // point.mouseLastMoveTime = mouseLastMoveTime;
      }
      point.draw();
    });
  }
  get_type(distance) {
    if (distance < 1000) {
      if (distance < this.mindistance_30) {
        // 迅速扩散
        return "quick_out";
      } else if (
        distance >= this.mindistance_30 &&
        distance < this.mindistance_50
      ) {
        // 缓慢外扩
        return "slow_out";
      } else if (
        distance >= this.mindistance_50 &&
        distance < this.mindistance_50 + 5
      ) {
        // 环绕
        return "around";
      } else if (distance > this.mindistance_50 + 5) {
        // 整体略微扩散
        return "normal";
      }
    } else if (distance > 1000) {
      // 回归原位
      return "back";
    }
  }
  reset_point() {
    this.points.forEach((point) => {
      point.curretntX = point.x;
      point.curretntY = point.y;
    });
  }
}

class Point {
  constructor(x, y, radius = "2", color = "#000") {
    this.x = x * devicePixelRatio;
    this.y = y * devicePixelRatio;
    this.curretntX = this.x;
    this.curretntY = this.y;
    this.destinationX = this.x;
    this.destinationY = this.y;
    this.radius = radius * devicePixelRatio;
    this.color = color;
    this.lastDrawTime = Date.now();
    this.mouseLastMoveTime = 0;
    this.timer = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.curretntX, this.curretntY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    // ctx.restore();
    // ctx.save();
  }
}

function reset_point() {
  g.reset_point();
}
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  position: relative;
}
.btn {
  top: 5px;
  left: 5px;
  position: absolute;
  height: 30px;
  width: 70px;
  border: none;
  background-color: aquamarine;
  cursor: pointer;
}
.canvas {
  background-color: #121212;
}
</style>