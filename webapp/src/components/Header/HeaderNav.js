import React, { Component } from 'react';
import { Link } from 'react-router';

import './scss/header-nav.scss';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className="header__nav">
        <ul className="header__nav__links">
          <li><Link className="header__nav__link secondary-color" to={`/`}>Início</Link></li>
          <li><Link className="header__nav__link secondary-color" to={`/beers`}>Loja</Link></li>
          <li><Link className="header__nav__link secondary-color" to={`/about`}>Sobre</Link></li>
        </ul>
      </nav>
    );
  }
}