import { createRouter, createWebHashHistory } from "vue-router";
import lanRouter from "./lanRouter";
import maoRouter from "./maoRouter";
import { tab_card_status } from "../components/util";
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
    // 返回主页前重置当前页面
    beforeEnter: (to, from) => {
      tab_card_status.current_index = -1;
    },
    component: () => import("../pages/homePage.vue"),
  },
];
router = router.concat(baseRouter).concat(lanRouter).concat(maoRouter);
const routers = createRouter({
  history: createWebHashHistory(), // 使用HTML5 History模式，可以去掉URL中的#,
  routes: router,
});

export default routers;
