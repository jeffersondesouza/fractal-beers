import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import { configApplication } from './config/app-configurator'
import store from './store';

import './styles/scss/styles.scss';

import App from './components/App'
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';

// call and set all applications configs
configApplication();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/beers/:id" component={BeerDetail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
