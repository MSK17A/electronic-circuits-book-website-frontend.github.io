import path from "path";

import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import devtools from "solid-devtools/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "electronic-circuits-book-website-frontend",
  plugins: [devtools(), tanstackRouter({ target: "solid" }), solid()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
