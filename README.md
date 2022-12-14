<p align="center">
<img alt="logo" src="./docs/public/logo.png" style="width:180px;">
<p>

<p align="center">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/wozien/kun-ui">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/wozien/kun-ui/CI?label=CI">
<a href="https://codecov.io/gh/wozien/kun-ui" > 
 <img src="https://codecov.io/gh/wozien/kun-ui/branch/main/graph/badge.svg?token=QSXGDPM98J"/> 
 </a>
<a href="https://github.com/wozien/kun-ui/
stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/wozien/kun-ui"></a>
<a href="https://github.com/wozien/kun-ui/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/wozien/kun-ui?color=red"></a>
</p>

<h1> ð Kun-UI </h1>

åºäº vite å¨å®¶æ¡¶å¼åç vue3 ç»ä»¶åº 


## ç¹æ§
- [x] ð ä½¿ç¨ Vue3.0 ææ°ç¹æ§å¼å
- [x] ð å¨é¢åºäº Viteï¼éåº¦å¤å¿«
- [x] âï¸ æ¯æå®æ´å¼å¥åæéå¼å¥
- [x] ðª ä¸¥æ ¼ç TypeScript ç±»å
- [x] ð æ´å¤ç¹æ§å¼åä¸­

## å®è£

ä½¿ç¨ `pnpm` å®è£

```bash
pnpm add @wozien/kun-ui --save-dev
```

ä½¿ç¨ `yarn` å®è£

```bash
yarn add @wozien/kun-ui --save-dev
```

## å¿«éå¼å§

å¨å±å¼å¥

```js
import { createApp } from "vue";
import KunUI from '@wozien/kun-ui';
import '@wozien/kun-ui/dist/style.css';

createApp(App).use(KunUI).mount('#app');
```

æéå è½½

```js
import { createApp } from "vue";
import { KunButton } from '@wozien/kun-ui';
import '@wozien/kun-ui/dist/button/style.css';

createApp(App).use(KunButton).mount('#app');
```

å¯ä»¥å©ç¨ `unplugin-vue-components` è¿è¡èªå¨æéå¼å¥ï¼ æ´å¤å¯æ¥ç[æä»¶ææ¡£](https://github.com/antfu/unplugin-vue-components)


## LICENSE
[MIT](LICENSE) @ James Zhang