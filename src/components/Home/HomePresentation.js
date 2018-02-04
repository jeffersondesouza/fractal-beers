import React, { Component } from 'react';
import { Link } from 'react-router';

import './scss/home-presetation.scss';

export default class HomePresentation extends Component {

  render() {
    return (
      <section className="home__presetation">
        <p className="home__presetation__tagline">Bons momentos combinam com boas Cervejas</p>
        <div className="home__presetation__button">
          <Link to={'/beers'} className="home__presetation__call-to-action">Escolha a sua</Link>
        </div>
      </section>
    );
  }
}