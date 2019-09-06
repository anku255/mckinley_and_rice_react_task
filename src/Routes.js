import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

const history = createBrowserHistory();

export default function Routes() {
  return (
    <Router history={history}>
      <Route path="/" exact component={LoginPage} />
      <Route path="/home" exact component={HomePage} />
    </Router>
  );
}
