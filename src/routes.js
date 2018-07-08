import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './containers/App';
import HomePage from './containers/Home';
import Process from './containers/Process';
import About from './containers/About';
import Policy from './containers/Policy';
import Partners from './containers/Partners';
import Contact from './components/Contact/ContactFormWrapper';
import GetStarted from './containers/GetStarted';
import Error404 from './containers/404';
import Research from './containers/Research';

function reload() {
//  window.location.reload();
};

const routes = (
  <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="policy" component={Policy} />
    <Route path="contact" component={Contact} />
    <Route path="solutions" component={Process} />
    <Route path="partners" component={Partners} />
    <Route path="about" component={About} />
    <Route path="research" component={Research} />
    <Route path="start" component={GetStarted} onEnter={reload()}/>
    <Route path="404" component={Error404} />
    <Redirect from="*" to="/404" />
  </Route>
);

export default routes;
