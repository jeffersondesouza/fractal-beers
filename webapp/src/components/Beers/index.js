import React, { Component } from 'react';
import axios from 'axios';

import './scss/beers.scss';

import BeerItem from './BeerItem';


export default class Beers extends Component {

  constructor() {
    super();
    this.state = { beers: [] }
  }


  setBeers(beers) {
    this.setState({ beers })
  }

  loadBeers() {

    axios.get(API_URL)
      .then(res => res.data)
      .then(beers => this.setBeers(beers));
  }

  componentDidMount() {
    this.loadBeers();
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
                <BeerItem beer={beer}/>
              </li>
            )
          }

        </ul>
      </div>
    );
  }
}