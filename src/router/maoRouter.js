const router = [
  {
    name: "ExpandingCards",
    path: "/maoP1",
    component: () => import("../components/mao/1.ExpandingCards.vue"),
  },
  {
    name: "ProcessStep",
    path: "/maoP2",
    component: () => import("../components/mao/2.ProcessStep.vue"),
  },
  {
    name: "RotatingNavigation",
    path: "/maoP3",
    component: () => import("../components/mao/3.RotatingNavigation.vue"),
  },
  {
    name: "HiddenSearch",
    path: "/maoP4",
    component: () => import("../components/mao/4.HiddenSearch.vue"),
  },
  {
    name: "BlurryLoading",
    path: "/maoP5",
    component: () => import("../components/mao/5.BlurryLoading.vue"),
  },
  {
    name: "ScrollAnimation",
    path: "/maoP6",
    component: () => import("../components/mao/6.ScrollAnimation.vue"),
  },
  {
    name: "SplitLandingPage",
    path: "/maoP7",
    component: () => import("../components/mao/7.SplitLandingPage.vue"),
  },
];

export default router;
