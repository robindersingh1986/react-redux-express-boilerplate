import React from 'react';
import { Route, Switch } from 'react-router';
import EnsureLoggedIn from '../containers/EnsureLoggedIn';
import Counter from '../containers/Counter';
import Dashboard from '../containers/Dashboard';
import NoMatch from '../components/NoMatch';
import NavBar from '../components/NavBar';
import Login from '../components/LoginComponent';


// function requireAuth(nextState, replace) {
//   const loggedIn = false;
//   if (!loggedIn) {
//     replace({
//       pathname: '/login'
//     });
//   }
// }

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={ Dashboard } />
      <Route exact path="/login" component={ Login } />

      <Route component={ EnsureLoggedIn }>
        <Route path="/counter" component={ Counter } />
      </Route>

      <Route component={ NoMatch } />

    </Switch>
  </div>
);

export default routes;
