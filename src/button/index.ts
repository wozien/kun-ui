import { App } from "vue";
import Button from "./Button";

export default (app: App) => {
  app.component(Button.name, Button)
};
