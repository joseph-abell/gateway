import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PageTemplate from './components/PageTemplate';
    
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={PageTemplate} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
