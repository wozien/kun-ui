import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    vueJsx(),
    Unocss()
  ]
});
