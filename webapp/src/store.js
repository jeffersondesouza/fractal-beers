import { createStore, combineReducers, applyMiddleware, } from 'redux';
import thunkMiddleware from 'redux-thunk';

import beersReducer from './reducers/beer.reducer';

/**  Apesar de termos apenas um Reducer, já fizemos a combinação de reducers,
 * assim, caso sejam criados novos reducers os components não precisam passar por
 * atualiazções para especificar o estado do reducer que está subscrito  
 */
const reducers = combineReducers({ beersReducer });

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;