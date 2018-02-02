import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { BeersService } from '../../services'

import './scss/beers.scss';

import BeerItem from './BeerItem';
import SearchBeerInput from './SearchBeerInput';


class Beers extends Component {

  constructor() {
    super();
    this.state = { beers: [], isWaitingDataFromServer: true };
    this.beersPerRequestGroup = 1;
  }

  setBeers(beers) {
    this.setState({ beers })
  }

  loadBeers() {
    this.setState({ isWaitingDataFromServer: true });
    this.context.store.dispatch(BeersService.getAllBeers(this.beersPerRequestGroup));
  }

  loadBeersWith(params) {
    this.setState({ isWaitingDataFromServer: true });
    this.context.store.dispatch(BeersService.getBeersWithParams(this.beersPerRequestGroup, params));
  }

  /**
   * showMoreBeers() calls the beer listing function to increase the beers list,
   * 
   * Thinking in Performace, the listing of beers brings 12 units per call, 
   * avoiding, for example, situations where the server sends 1000 items to be rendered 
   * at one time
   * 
   */
  showMoreBeers() {
    this.beersPerRequestGroup++;
    this.loadBeers();
  }

  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setBeers(this.context.store.getState().beersReducer);
      this.setState({ isWaitingDataFromServer: false });
    });
  }

  componentDidMount() {
    this.loadBeers();
  }

  onSearchBeers(params) {
    this.loadBeersWith(params);
  }

  // all rendering function at the end of component

  renderWaitingBeersLoadding() {
    if (this.state.isWaitingDataFromServer) {
      return (
        <div className="center container">
          <img src={'/src/images/loadding.gif'} />
        </div>
      );
    }
    return '';
  }

  renderBeers() {
    return this.state.beers.map(beer =>
      <li className="beers__list__item" key={beer.id}>
        <BeerItem beer={beer} />
      </li>
    )
  }

  render() {
    return (
      <div className="beers">
        <SearchBeerInput onSearchBeers={this.onSearchBeers.bind(this)} />
        <ul className="beers__list container">
          {this.renderBeers()}
        </ul>
        {this.renderWaitingBeersLoadding()}
        <div className="beers__show-more-area container">
          <button className="btn-primary" onClick={this.showMoreBeers.bind(this)}>Mostrar mais Cervejas</button>
        </div>
      </div>
    );
  }
}


Beers.contextTypes = {
  store: PropTypes.object.isRequired
}

export default Beers