import React, { Component } from 'react';

import './home.scss';

export default class Home extends Component {

  render() {
    return (
      <div className="home">
            <section className="home__botle-area">
              <figure className="home__botle">
                <img className="home__botle--img" src="src/images/botle.png" />
              </figure>
            </section>
            <section className="home__presetation">
              <p className="home__presetation__tagline">
                Bons momentos combinam com boas Cervejas</p>
              <button className="home__presetation__call-to-action">Escolha a sua</button>
            </section>
          </div>
    );
  }
}