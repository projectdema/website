import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/researches",
      name: "Researches",
      // @ts-ignore
      navbar: true,
      component: () => import("../views/Researches.vue"),
    },
    {
      path: "/credits",
      name: "Credits",
      component: () => import("../views/Credits.vue"),
    }
  ],
});

export default router;
