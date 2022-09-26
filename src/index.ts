import { App } from "vue";
import KunButton from "./button/Button";

export { KunButton };

export default {
  install(app: App): void {
    app.component(KunButton.name, KunButton);
  },
};
