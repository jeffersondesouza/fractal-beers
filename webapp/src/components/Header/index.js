import React, { Component } from 'react';

import './scss/header.scss';

export default class Header extends Component {
  render(){
    return(
      <header className="header">
          <figure className="header__logo">
            <img className="img-responsive" src="src/images/logo.png" />
            <figcaption className="header__logo__figcaption">
              <span>Fractal</span>
              <span className="primary-color">Cervas</span>
            </figcaption>
          </figure>
          <nav className="header__nav">
            <ul className="header__nav__links">
              <li><a className="header__nav__link secondary-color" href="#">Início</a></li>
              <li><a className="header__nav__link secondary-color" href="#">Loja</a></li>
              <li><a className="header__nav__link secondary-color" href="#">Sobre</a></li>
            </ul>
          </nav>
          <div className="header__chart">
            <button className="header__chart__btn">0</button>
          </div>
        </header>
    );
  }
}