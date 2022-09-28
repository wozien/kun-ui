import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../build/unocss.config";

export default defineConfig({
  plugins: [
    vueJsx(),
    Unocss()
  ]
});
