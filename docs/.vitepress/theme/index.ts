import { h } from 'vue'
import Theme from 'vitepress/theme';
import KunButton from '../../../src/button';
// demo 展示组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
import './styles/vars.css';
import './styles/demoblock.scss';

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.use(KunButton);
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
  }
}