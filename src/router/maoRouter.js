import ExpandingCards from "../components/mao/ExpandingCards.vue";
import ProcessStep from "../components/mao/ProcessStep.vue";
import RotatingNavigation from "../components/mao/RotatingNavigation.vue";
import HiddenSearch from "../components/mao/HiddenSearch.vue";
import BlurryLoading from "../components/mao/BlurryLoading.vue";
import ScrollAnimation from "../components/mao/ScrollAnimation.vue";
import SplitLandingPage from "../components/mao/SplitLandingPage.vue";
import FormWave from "../components/mao/FormWave.vue";
import SoundBoard from "../components/mao/SoundBoard.vue";
import Jokes from "../components/mao/Jokes.vue";
import EventKeyCode from "../components/mao/EventKeyCode.vue";
import FAQCollapse from "@/components/mao/FAQCollapse.vue";
import RandomChoicePicker from "@/components/mao/RandomChoicePicker.vue";

const router = [
  {
    name: "ExpandingCards",
    path: "/maoP1",
    component: ExpandingCards,
  },
  {
    name: "ProcessStep",
    path: "/maoP2",
    component: ProcessStep,
  },
  {
    name: "RotatingNavigation",
    path: "/maoP3",
    component: RotatingNavigation,
  },
  {
    name: "HiddenSearch",
    path: "/maoP4",
    component: HiddenSearch,
  },
  {
    name: "BlurryLoading",
    path: "/maoP5",
    component: BlurryLoading,
  },
  {
    name: "ScrollAnimation",
    path: "/maoP6",
    component: ScrollAnimation,
  },
  {
    name: "SplitLandingPage",
    path: "/maoP7",
    component: SplitLandingPage,
  },
  {
    name: "FormWave",
    path: "/maoP8",
    component: FormWave,
  },
  {
    name: "SoundBoard",
    path: "/maoP9",
    component: SoundBoard,
  },
  {
    name: "Jokes",
    path: "/maoP10",
    component: Jokes,
  },
  {
    name: "EventKeyCode",
    path: "/maoP11",
    component: EventKeyCode,
  },
  {
    name: "FAQCollapse",
    path: "/maoP12",
    component: FAQCollapse,
  },
  {
    name: "RandomChoicePicker",
    path: "/maoP13",
    component: RandomChoicePicker,
  },
];

export default router;
