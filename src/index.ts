import { App } from "vue";
import KunButton from "./button";
import "uno.css";

export { KunButton };

export default {
  install(app: App): void {
    app.use(KunButton);
  },
};
