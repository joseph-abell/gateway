import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
    
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/who-we-are' component={WhoWeAre} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
