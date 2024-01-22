import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/home/index.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
export default router;
