import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App.jsx";

const html = renderToString(createElement(App));
export { html };
