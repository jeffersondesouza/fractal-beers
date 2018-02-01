import React, { Component } from 'react';

import './scss/header-nav.scss';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className="header__nav">
        <ul className="header__nav__links">
          <li><a className="header__nav__link secondary-color" href="#">Início</a></li>
          <li><a className="header__nav__link secondary-color" href="#">Loja</a></li>
          <li><a className="header__nav__link secondary-color" href="#">Sobre</a></li>
        </ul>
      </nav>
    );
  }
}