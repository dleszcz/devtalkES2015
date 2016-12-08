import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Team from './team.container';
import Fixtures from './components/fixtures/fixtures.container';

export default (


  <Router history={browserHistory}>
    <Route path="/team/:id" component={Team} />
    <Route path="/team/:id/fixtures" component={Fixtures} />

  </Router>
);
