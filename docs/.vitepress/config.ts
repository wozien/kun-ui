import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '🐔 Kun-UI',
  description: '基于Vite全家桶开发组件',
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/wozien/kun-ui" },
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "起步", link: "/guide/", activeMatch: "/guide/" },
      { text: "组件", link: "/components/button/", activeMatch: "/components/" },
    ],
    sidebar: {
      "/components/": [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button/' }
          ]
        },
        // { text: '导航' },
        // { text: '反馈' },
        // { text: '数据录入' },
        // { text: '输入展示' }
      ]
    }
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