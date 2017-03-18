import React from 'react';
import {IndexRoute, Redirect, browserHistory, Router, Route } from 'react-router';

import {FormLayout} from '../components/form';
import {NavBar} from '../components/layout';

export default class Routing extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={NavBar}>
          <IndexRoute component={FormLayout} />
          <Redirect from="*" to="/"/>
        </Route>
        <Redirect from="*" to="/"/>        
      </Router>
    );
  }
};


