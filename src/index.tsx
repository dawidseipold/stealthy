/* @refresh reload */
import { render } from "solid-js/web";
import "src/styles/global.css";
import { HomeRoute, ChatRoute } from 'src/routes'
import { ChatsLayout } from 'src/layouts'
import { HashRouter, Route } from "@solidjs/router";
import App from "./App";


render(
  () => (
    <HashRouter root={App}>
      <Route path="/" component={HomeRoute} />

      <Route path="/chats" component={ChatsLayout}>
        <Route path="/" component={ChatRoute} />
        <Route path="/:id" component={ChatRoute} />
      </Route>
    </HashRouter>
  ),
  document.getElementById("root") as HTMLElement
);
