/// <reference types="vitest" />
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./build/unocss.config";

export default defineConfig(({ mode }) => ({
  root: mode === "development" ? "./examples" : ".",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".", "src"),
    },
  },

  plugins: [
    vue(),
    vueJsx(),
    // unocss
    Unocss(),
  ],

  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
    lib: {
      entry: "./src/index.ts",
      name: "KunUI",
      fileName: "kun-ui",
      formats: ["es", "umd", "iife"],
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },

  test: {
    // 这里root没有效果
    // root: '.',
    include: ["src/**/*.spec.ts"],
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
}));
