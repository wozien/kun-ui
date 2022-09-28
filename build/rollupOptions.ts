
export const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "vue",
    },
    assetFileNames: "style.css"
  }
};
