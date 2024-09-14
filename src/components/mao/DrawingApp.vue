<template>
  <div class="container">
    <canvas
      @mousemove="handleMouseMove"
      ref="canvasRef"
      class="canvas"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const canvasRef = ref(null);
const ctx = ref(null);
const currentMousePosition = ref({ x: 0, y: 0 });

const props = defineProps({
  pointNum: { type: Number, default: 60 },
  circleSize: {
    type: Number,
    default: 60,
  },
});

const width = window.innerWidth;
const height = window.innerHeight;

const init = () => {
  ctx.value = canvasRef.value.getContext("2d");
  canvasRef.value.width = width;
  canvasRef.value.height = height;
};
onMounted(() => {
  init();
  const graph = new Graph();
  graph.draw();
});

const handleMouseMove = (e) => {
  currentMousePosition.value = { x: e.offsetX, y: e.offsetY };
};

class Graph {
  constructor(pointNum = props.pointNum, maxDistance = 200) {
    this.points = new Array(pointNum).fill(0).map(() => new Point());
    this.maxDistance = maxDistance;
  }
  draw() {
    requestAnimationFrame(() => {
      this.draw();
    });
    ctx.value.clearRect(0, 0, width, height);
    for (let i = 0; i < this.points.length; i++) {
      const p1 = this.points[i];
      if (
        p1.isInsideCircle(
          currentMousePosition.value.x,
          currentMousePosition.value.y
        )
      ) {
        let tan =
          (p1.y - currentMousePosition.value.y) /
          (p1.x - currentMousePosition.value.x);
        let theta = Math.atan(tan);
        //和速度
        let speed = Math.sqrt(p1.xspeed * p1.xspeed + p1.yspeed * p1.yspeed);
        let speedx = speed * Math.cos(theta);
        let speedy = speed * Math.sin(theta);
        if (p1.x > currentMousePosition.value.x) {
          p1.xspeed = speedx * 1.05;
          p1.yspeed = speedy * 1.05;
        } else {
          p1.xspeed = -speedx * 1.05;
          p1.yspeed = -speedy * 1.05;
        }
        //100ms后恢复
        setTimeout(() => {
          p1.xspeed = p1.xspeed / 1.05;
          p1.yspeed = p1.yspeed / 1.05;
        }, 100);
      }
      p1.draw();
      for (let j = i + 1; j < this.points.length; j++) {
        const p2 = this.points[j];
        const distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );
        if (distance > this.maxDistance) continue;
        ctx.value.beginPath();
        ctx.value.moveTo(p1.x, p1.y);
        ctx.value.lineTo(p2.x, p2.y);
        ctx.value.closePath();
        ctx.value.strokeStyle = `rgba(200,200,200,${
          1 - distance / this.maxDistance
        })`;
        ctx.value.stroke();
      }
    }
  }
}

class Point {
  constructor() {
    this.r = 4;
    this._x = getRandomInt(0, width - this.r / 2);
    this._y = getRandomInt(0, height - this.r / 2);
    this.xspeed = getRandomInt(-50, 50);
    this.yspeed = getRandomInt(-50, 50);
    this.lastDrawTime = null;
  }
  set x(value) {
    if (value < 0 || value > width) {
      this.xspeed = -this.xspeed;
      return;
    }
    this._x = value;
  }
  get x() {
    return this._x;
  }
  set y(value) {
    if (value < 0 || value > height) {
      this.yspeed = -this.yspeed;
      return;
    }
    this._y = value;
  }
  get y() {
    return this._y;
  }
  isInsideCircle(x, y) {
    var dx = this.x - x;
    var dy = this.y - y;
    return dx * dx + dy * dy <= props.circleSize * props.circleSize;
  }
  draw() {
    if (this.lastDrawTime) {
      const now = Date.now();
      const delta = (now - this.lastDrawTime) / 1000;
      this.x += this.xspeed * delta;
      this.y += this.yspeed * delta;
    }
    ctx.value.beginPath();
    ctx.value.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.value.fillStyle = "rgb(200,200,200)";
    ctx.value.fill();
    this.lastDrawTime = Date.now();
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.canvas {
  background: #fff;
}
</style>
