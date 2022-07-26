import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import typescriptLogo from "./typescript.svg";

const app = document.querySelector<HTMLDivElement>("#app");
if (app) {
  app.innerHTML = `<img src=${typescriptLogo} alt='image' />`;
}

import "bootstrap/dist/js/bootstrap.bundle.min.js";
