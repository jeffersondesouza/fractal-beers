import React, { Component } from 'react';

import './beers.scss';

import Beer from './Beer';


export default class Beers extends Component {
  render() {
    return (
      <div className="beers">

        <form className="beers__search">
          <input autoFocus={true} type="text" name="search" placeholder="Busque por Marca" className="beers__search__input" />
        </form>

        <ul class="beers__list">
          <li class="beers__list__item">
            <Beer />
          </li>
          <li class="beers__list__item">
            <Beer />
          </li>
          <li class="beers__list__item">
            <Beer />
          </li>
          <li class="beers__list__item">
            <Beer />
          </li>
          <li class="beers__list__item">
            <Beer />
          </li>
          <li class="beers__list__item">
            <Beer />
          </li>
          <li class="beers__list__item">
            <Beer />
          </li>
        </ul>
      </div>
    );
  }
}