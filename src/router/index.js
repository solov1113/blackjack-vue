import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/blackjack",
      name: "blackjack",
      component: () => import("../views/BlackjackView.vue"),
    },
  ],
});

export default router;
