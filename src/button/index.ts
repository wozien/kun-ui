import { App } from "vue";
import Button from "./Button";
import "uno.css";

export default (app: App) => {
  app.component(Button.name, Button)
};
