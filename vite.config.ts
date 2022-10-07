/// <reference types="vitest" />

import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from 'unocss/vite';

export default defineConfig(({ mode }) => ({
  root: mode === "development" ? "./examples" : ".",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".", "src"),
    },
  },

  plugins: [
    Vue(),
    VueJsx(),
    Unocss()
  ],

  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    lib: {
      entry: "./src/index.ts",
      name: "KunUI",
      fileName: "kun-ui",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        },
        assetFileNames: "style.css",
        exports: 'named'
      }
    }
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
    coverage: {
      reporter: ["json"]
    }
  },

  server: {
    port: 8000
  }
}));
