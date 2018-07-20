import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/Error404';
import Event from './pages/Event';
import PageTemplate from './components/PageTemplate';
import Person from './pages/Person';
    
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/events/*' component={Event} />
          <Route exact path='/404' component={Error404} />
          <Route exact path='/people/*' component={Person} />
          <Route component={PageTemplate} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
