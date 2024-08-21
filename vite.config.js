import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  publicDir: "public",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  transformToRequire: {
    video: ["src", "poster"],
    source: "src",
    img: "src",
    image: "xlink:href",
    audio: "src", //新增这行
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // 指定 index.html 的输出目录
  //       // 假设您想将 index.html 放在 dist/output 目录下
  //       entryFileNames: 'index.html',
  //     },
  //   },
});
