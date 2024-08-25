// 图片多的就不用懒加载了
import P1 from "../components/yang/Project1.vue";
import P5 from "../components/yang/Project5.vue";
const router = [
  {
    name: "P1",
    path: "/P1",
    component: P1,
  },
  {
    name: "P2",
    path: "/P2",
    component: () => import("../components/yang/Project2.vue"),
  },
  {
    name: "P3",
    path: "/P3",
    component: () => import("../components/yang/Project3.vue"),
  },
  {
    name: "P4",
    path: "/P4",
    component: () => import("../components/yang/Project4.vue"),
  },
  {
    name: "P5",
    path: "/P5",
    component: P5,
  },
  {
    name: "P6",
    path: "/P6",
    component: () => import("../components/yang/Project6.vue"),
  },
  {
    name: "P7",
    path: "/P7",
    component: () => import("../components/yang/Project7.vue"),
  },
  {
    name: "P8",
    path: "/P8",
    component: () => import("../components/yang/Project8.vue"),
  },
  {
    name: "P9",
    path: "/P9",
    component: () => import("../components/yang/Project9.vue"),
  },
  {
    name: "P10",
    path: "/P10",
    component: () => import("../components/yang/Project10.vue"),
  },
  {
    name: "P11",
    path: "/P11",
    component: () => import("../components/yang/Project11.vue"),
  },
  {
    name: "P12",
    path: "/P12",

    component: () => import("../components/yang/Project10.vue"),
  },
  {
    name: "P13",
    path: "/P13",
    redirect: "/404",
    component: () => import("../components/yang/Project10.vue"),
  },
  {
    name: "P14",
    path: "/P14",
    redirect: "/404",
    component: () => import("../components/yang/Project10.vue"),
  },
  {
    name: "P15",
    path: "/P15",
    redirect: "/404",
    component: () => import("../components/yang/Project10.vue"),
  },
  {
    name: "P16",
    path: "/P16",
    redirect: "/404",
    component: () => import("../components/yang/Project10.vue"),
  },
  {
    name: "P17",
    path: "/P17",
    redirect: "/404",
    component: () => import("../components/yang/Project10.vue"),
  },
];

export default router;
