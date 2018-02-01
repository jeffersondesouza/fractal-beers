import React, { Component } from 'react';

import './scss/home-presetation.scss';

export default class HomePresentation extends Component {

  render() {
    return (
      <section className="home__presetation">
        <p className="home__presetation__tagline">
          Bons momentos combinam com boas Cervejas</p>
        <button className="home__presetation__call-to-action">Escolha a sua</button>
      </section>
    );
  }
}