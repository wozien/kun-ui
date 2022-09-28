import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./unocss.config";

export const plugins = [
  vue(),
  vueJsx(),
  // unocss
  Unocss(),
]