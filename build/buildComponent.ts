import path from 'path';
import fs from "fs";
import { build, UserConfig } from 'vite';
import { plugins } from './vitePlugins';
import { rollupOptions } from './rollupOptions';

const srcDir = path.resolve(__dirname, '../src');
const outDir = path.resolve(__dirname, '../dist');

const config: UserConfig = {
  plugins,
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions
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