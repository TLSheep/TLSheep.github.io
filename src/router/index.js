import { createRouter, createWebHashHistory } from "vue-router";
import lanRouter from "./lanRouter";
import maoRouter from "./maoRouter";

let router = [];
let baseRouter = [
  {
    name: "404",
    path: "/404",
    component: () => import("../components/yang/empty.vue"),
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
];
router = router.concat(baseRouter).concat(lanRouter).concat(maoRouter);
const routers = createRouter({
  history: createWebHashHistory(), // 使用HTML5 History模式，可以去掉URL中的#,
  routes: router,
});

export default routers;
