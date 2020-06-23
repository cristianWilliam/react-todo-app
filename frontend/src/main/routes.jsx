import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Todo from "../todo/todo";
import About from "../about/about";

export default (props) => (
  <Router history={hashHistory}>
    {/* Path é o URL e component é o destino */}
    <Route path="/todos" component={Todo} />
    <Route path="/about" component={About} />

    {/* Redirect é utilizado quando acessado qualquer outro endereço é direcionado para /todos */}
    <Redirect from="*" to="/todos" />
  </Router>
);
