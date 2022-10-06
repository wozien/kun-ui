import path from 'path';
import fs from "fs";
import { build, UserConfig } from 'vite';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';

const srcDir = path.resolve(__dirname, '../src');
const outDir = path.resolve(__dirname, '../dist');

const config: UserConfig = {
  plugins: [
    VueJsx(),
    Unocss()
  ],

  build: {
    minify: "esbuild",
    cssCodeSplit: true,
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
  }
};

fs.readdirSync(srcDir)
  .filter(name => {
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes('index.ts');
  })
  .forEach(async (name) => {
    Object.assign(config.build || {}, {
      lib: {
        entry: `${srcDir}/${name}`,
        formats: ['es'],
        fileName: 'index'
      },
      outDir: `${outDir}/${name}`,
    });

    await build(config);
  })