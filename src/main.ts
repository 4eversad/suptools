import { createApp, Component } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "./style.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/main.less";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component as Component);
}
app.use(ElementPlus);
app.use(router);
app.use(createPinia());
app.mount("#app");
