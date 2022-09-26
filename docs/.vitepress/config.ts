import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '🔨  Kun-UI',
  description: '基于Vite全家桶开发组件',
  themeConfig: {
    sidebar: {
      "/": [
        { text: '快速开始', link: '/' },
        {
          text: '通用',
          children: [
            { text: 'Button 按钮', link: '/components/button/' }
          ]
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '输入展示' }
      ]
    }
  },

  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    }
  }
});