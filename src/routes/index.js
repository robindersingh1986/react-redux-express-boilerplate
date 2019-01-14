import React from 'react';
import { Route, Switch } from 'react-router';
import Counter from '../containers/Counter';
import Dashboard from '../containers/Dashboard';

/* import Home from '../components/Home';
import Hello from '../components/Hello';
import NoMatch from '../components/NoMatch';
import NavBar from '../components/NavBar'; */

const routes = (
  <div>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={ Dashboard } />
      <Route path="/counter" component={ Counter } />
      {/* <Route component={ <div> NoMatch </div> } /> */}
    </Switch>
  </div>
);

export default routes;
