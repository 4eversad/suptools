import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "./style.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/main.less";

const app = createApp(App);
app.use(ElementPlus).use(router).use(createPinia()).mount("#app");
