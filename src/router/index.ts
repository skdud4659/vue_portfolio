import { createRouter, createWebHistory } from "vue-router";
import ThePortfolioView from "@/views/ThePortfolioView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ThePortfolioView,
    },
  ],
});

export default router;
