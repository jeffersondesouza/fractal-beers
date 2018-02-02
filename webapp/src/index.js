import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import beersReducer from './reducers/beer.reducer';


import './styles/css/reset.css';
import './styles/scss/layout.scss';

import App from './components/App'
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';


/**  Apesar de termos apenas um Reducer, já fizemos a combinação de reducers,
 * assim, caso sejam criados novos reducers os components não precisam passar por
 * atualiazções para especificar o estado do reducer que está subscrito  
 */
const reducers = combineReducers({ beersReducer });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));


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
