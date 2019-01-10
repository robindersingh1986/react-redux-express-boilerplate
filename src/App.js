import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import Dashboard from './containers/Dashboard.jsx';

export const App = ({ history, context }) => {
  return (
    <ConnectedRouter history={ history } context={ context }>
      <Switch>
        {/* <Route exact path="/" render={ () => (<div>Match</div>) } /> */}
        <Route exact path="/dashboard" render={ () => ( <Dashboard/> ) } />
        <Route render={ () => (<div>Miss</div>) } />
      </Switch>
    </ConnectedRouter>
  );
};
