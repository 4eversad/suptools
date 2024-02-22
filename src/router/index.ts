import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/index.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
export default router;
