import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Home from './ui/Home/Home';
import About from './ui/About/About';
import Work from './ui/Work/Work';
import Contact from './ui/Contact/Contact';
// import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);

export default Routes;
