import { createRouter,createWebHashHistory } from "vue-router";



const routers= createRouter({
  history: createWebHashHistory(), // 使用HTML5 History模式，可以去掉URL中的#,
  routes: [
    {
      name: "404",
      path: "/404",
      component: () => import("../components/empty.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
    {
      name: "home",
      path: "/",
      component: () => import("../pages/homePage.vue"),
    },
    {
      name: "P1",
      path: "/P1",
      component:()=>import("../components/Project1.vue"),
    },
    {
      name: "P2",
      path: "/P2",
      component: ()=> import("../components/Project2.vue"),
    },
    {
      name: "P3",
      path: "/P3",
      component: () => import("../components/Project3.vue"),
    },
    {
      name: "P4",
      path: "/P4",
      component: () => import("../components/Project4.vue"),
    },
    {
      name: "P5",
      path: "/P5",
      component: () => import("../components/Project5.vue"),
    },
    {
      name: "P6",
      path: "/P6",
      component: () => import("../components/Project6.vue"),
    },
    {
      name: "P7",
      path: "/P7",
      component: () => import("../components/Project7.vue"),
    },
    {
      name: "P8",
      path: "/P8",
      redirect: "/404",
      component: () => import("../components/Project8.vue"),
    },
    {
      name: "P9",
      path: "/P9",
      redirect: "/404",
      component: () => import("../components/Project9.vue"),
    },
    {
      name: "P10",
      path: "/P10",
      redirect: "/404",
      component: () => import("../components/Project10.vue"),
    },
    {
      name: "P11",
      path: "/P11",
      redirect: "/404",
      component: () => import("../components/Project11.vue"),
    },
    {
      name: "P10",
      path: "/P",
      component: () => import("../components/Project10.vue"),
    },
    {
      name: "P10",
      path: "/P",
      component: () => import("../components/Project10.vue"),
    },

    
  ],
});

export default routers;