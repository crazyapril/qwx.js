import React from "react";
import { Route, Switch } from "react-router-dom";

export default function Router() {
  return <Switch>
    <Route path="/">
      <div>404</div>
    </Route>
  </Switch>
}