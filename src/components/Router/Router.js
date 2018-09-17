import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Events from '../pages/Events';
import Event from '../pages/Event';
import Page from '../pages/Page';
import People from '../pages/People';
import Person from '../pages/Person';
import Word from '../pages/Word';
import ContactUs from '../pages/ContactUs';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/events/*' component={Event} />
          <Route exact path='/404' component={Error404} />
          <Route exact path='/people' component={People} />
          <Route exact path='/people/*' component={Person} />
          <Route exact path='/words/*' component={Word} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route component={Page} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
