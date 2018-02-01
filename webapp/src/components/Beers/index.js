import React, { Component } from 'react';

import './scss/beers.scss';

import BeerItem from './BeerItem';


export default class Beers extends Component {
  render() {
    return (
      <div className="beers">

        <form className="beers__search">
          <input autoFocus={true} type="text" name="search" placeholder="Busque por Marca" className="beers__search__input" />
        </form>

        <ul className="beers__list">
          <li className="beers__list__item">
           <BeerItem />
          </li>
          <li className="beers__list__item">
           <BeerItem />
          </li>
          <li className="beers__list__item">
           <BeerItem />
          </li>
          <li className="beers__list__item">
           <BeerItem />
          </li>
          <li className="beers__list__item">
           <BeerItem />
          </li>
          <li className="beers__list__item">
           <BeerItem />
          </li>
          <li className="beers__list__item">
           <BeerItem />
          </li>
        </ul>
      </div>
    );
  }
}