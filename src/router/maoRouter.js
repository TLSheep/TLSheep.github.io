const router = [
  {
    name: "ExpandingCards",
    path: "/maoP1",
    component: () => import("../components/mao/ExpandingCards.vue"),
  },
  {
    name: "ProcessStep",
    path: "/maoP2",
    component: () => import("../components/mao/ProcessStep.vue"),
  },
  {
    name: "RotatingNavigation",
    path: "/maoP3",
    component: () => import("../components/mao/RotatingNavigation.vue"),
  },
  {
    name: "HiddenSearch",
    path: "/maoP4",
    component: () => import("../components/mao/HiddenSearch.vue"),
  },
  {
    name: "BlurryLoading",
    path: "/maoP5",
    component: () => import("../components/mao/BlurryLoading.vue"),
  },
  {
    name: "ScrollAnimation",
    path: "/maoP6",
    component: () => import("../components/mao/ScrollAnimation.vue"),
  },
  {
    name: "SplitLandingPage",
    path: "/maoP7",
    component: () => import("../components/mao/SplitLandingPage.vue"),
  },
  {
    name: "FormWave",
    path: "/maoP8",
    component: () => import("../components/mao/FormWave.vue"),
  },
  {
    name: "SoundBoard",
    path: "/maoP9",
    component: () => import("../components/mao/SoundBoard.vue"),
  },
  {
    name: "Jokes",
    path: "/maoP10",
    component: () => import("../components/mao/Jokes.vue"),
  },
];

export default router;
