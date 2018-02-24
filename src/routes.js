import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import HomePage from "./containers/Home";
import Process from "./containers/Process";
import About from "./containers/About";
import Policy from "./containers/Policy";
import Partners from "./containers/Partners";
import Contact from "./components/Contact/ContactFormWrapper";

const routes = (
  <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="policy" component={Policy} />
    <Route path="Contact" component={Contact} />
    <Route path="Process" component={Process} />
    <Route path="Partners" component={Partners} />
    <Route path="About" component={About} />
  </Route>
);

export default routes;
