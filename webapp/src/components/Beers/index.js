import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { BeersService } from '../../services'

import './scss/beers.scss';

import BeerItem from './BeerItem';


class Beers extends Component {

  constructor() {
    super();
    this.state = { beers: [] }
  }

  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setBeers(this.context.store.getState().beersReducer);
    });
  }

  componentDidMount() {
    this.loadBeers();
  }
  
  setBeers(beers) {
    this.setState({ beers })
  }

  loadBeers() {
    this.context.store.dispatch(BeersService.getAllBeers());
  }


  render() {
    return (
      <div className="beers">

        <form className="beers__search">
          <input autoFocus={true} type="text" name="search" placeholder="Busque por Marca" className="beers__search__input" />
        </form>

        <ul className="beers__list container">
          {
            this.state.beers.map(beer =>
              <li className="beers__list__item" key={beer.id}>
                <BeerItem beer={beer} />
              </li>
            )
          }

        </ul>
      </div>
    );
  }
}


Beers.contextTypes = {
  store: PropTypes.object.isRequired
}

export default Beers