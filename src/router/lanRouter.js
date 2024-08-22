const router = [
  {
    name: "P1",
    path: "/P1",
    component: () => import("../components/yang/Project1.vue"),
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
    component: () => import("../components/yang/Project5.vue"),
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
    redirect: "/404",
    component: () => import("../components/yang/Project8.vue"),
  },
  {
    name: "P9",
    path: "/P9",
    // redirect: "/404",wssn
    component: () => import("../components/yang/Project9.vue"),
  },
  {
    name: "P10",
    path: "/P10",
    redirect: "/404",
    component: () => import("../components/yang/Project10.vue"),
  },
  {
    name: "P11",
    path: "/P11",
    redirect: "/404",
    component: () => import("../components/yang/Project11.vue"),
  },
  {
    name: "P",
    path: "/P",
    component: () => import("../components/yang/Project10.vue"),
  },
];

export default router;