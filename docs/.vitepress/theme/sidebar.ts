import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  '/components/': [
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button' }
      ]
    }
  ]
}
