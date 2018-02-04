import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { BeersService } from '../../services'

import './styles/beers.scss';

import BeerItem from './BeerItem';
import SearchBeerInput from './SearchBeerInput';


const contextTypes = {
  store: PropTypes.object.isRequired
}

class Beers extends Component {

  constructor() {
    super();
    this.state = { beers: [], isWaitingDataFromServer: true };
    this.beersPerRequestGroup = 1;
    this.onSearchBeers = this.onSearchBeers.bind(this);
    this.showMoreBeers = this.showMoreBeers.bind(this);
  }

  setBeers(beers) {
    this.setState({ beers })
  }

  loadBeers() {
    this.setState({ isWaitingDataFromServer: true });
    this.context.store.dispatch(BeersService.getBeers(this.beersPerRequestGroup));
  }

  loadBeersWith(params) {
    this.setState({ isWaitingDataFromServer: true });
    this.context.store.dispatch(BeersService.getBeers(this.beersPerRequestGroup, params));
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
    this.loadBeers();
  }
  
  componentDidMount() {
    this.context.store.subscribe(() => {
      this.setBeers(this.context.store.getState().beersReducer);
      this.setState({ isWaitingDataFromServer: false });
    });
  }

  onSearchBeers(params) {
    this.loadBeersWith(params);
  }

  renderWaitingBeersLoadding() {
    if (this.state.isWaitingDataFromServer) {
      return (
        <div className="center container">
          <img src={'http://res.cloudinary.com/dlbdfgear/image/upload/v1517717981/loadding_jyiw1n.gif'} />
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
        <SearchBeerInput onSearchBeers={this.onSearchBeers} />
        <ul className="beers__list container">
          {this.renderBeers()}
        </ul>
        {this.renderWaitingBeersLoadding()}
        <div className="beers__show-more-area container">
          <button className="btn-primary" onClick={this.showMoreBeers}>Mostrar mais Cervejas</button>
        </div>
      </div>
    );
  }
}


Beers.contextTypes = contextTypes;

export default Beers