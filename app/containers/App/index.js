/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
import NotFoundPage from '../NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Redirect from="/" to="/home" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
