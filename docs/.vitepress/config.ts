import { defineConfig } from 'vitepress';
import { sidebar } from '../.vitepress/theme/sidebar';

export default defineConfig({
  title: 'Kun-UI',
  description: '基于Vite全家桶开发组件',
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      { icon: "github", link: "https://github.com/wozien/kun-ui" },
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "起步", link: "/guide/", activeMatch: "/guide/" },
      { text: "组件", link: "/components/button", activeMatch: "/components/" },
    ],
    sidebar,
  },

  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin, {
        cssPreprocessor: "sass"
      });
    }
  }
});