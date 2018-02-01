import React, { Component } from 'react';

import './beers.scss';

import Beer from './Beer';


export default class Beers extends Component {
  render() {
    return (
      <div className="beers">

        <form className="beers__search">
          <input type="text" name="search" placeholder="Busque por Marca" className="beers__serach_input" />
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