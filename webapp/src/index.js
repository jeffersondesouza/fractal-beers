import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './styles/css/reset.css';
import './styles/scss/layout.scss';

import App from './components/App'
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/beers" component={Beers} />
      <Route path="/beer-detail" component={BeerDetail} />
    </Route>
  </Router>,
  document.getElementById('root')
);
