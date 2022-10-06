import { createApp } from "vue";
import App from "./App.vue";
// import KunUI from "../dist/kun-ui.mjs";
// import "../dist/style.css";
import KunUI from '../src';
import 'uno.css';

const app = createApp(App);
app.use(KunUI);
app.mount("#app");
