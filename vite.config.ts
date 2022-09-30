/// <reference types="vitest" />

import { defineConfig } from "vite";
import path from "path";
import { plugins } from './build/vitePlugins';
import { rollupOptions } from './build/rollupOptions';

export default defineConfig(({ mode }) => ({
  root: mode === "development" ? "./examples" : ".",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".", "src"),
    },
  },

  plugins,

  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    lib: {
      entry: "./src/index.ts",
      name: "KunUI",
      fileName: "kun-ui",
      formats: ["es", "umd"],
    },
    rollupOptions
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
}));
