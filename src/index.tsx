/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import "src/styles/global.css";

import { Home } from "./routes/Home";


render(
  () => (
    <HashRouter>
      <Route path="/" component={Home} />
    </HashRouter>
  ),
  document.getElementById("root") as HTMLElement
);
