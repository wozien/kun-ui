import Theme from 'vitepress/dist/client/theme-default';
import KunUI from '../../../src/index';
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
// demo 展示组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(KunUI);
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
  }
}