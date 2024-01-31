import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        charset: false,
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/styles/glob.less"
        )}";`,
      },
    },
  },
});
