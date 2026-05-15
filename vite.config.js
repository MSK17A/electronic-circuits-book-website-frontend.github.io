import path from "path";
import { defineConfig, loadEnv } from "vite";
import solid from "vite-plugin-solid";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import devtools from "solid-devtools/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_URL || "/",
    plugins: [devtools(), tanstackRouter({ target: "solid" }), solid()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
