import React, { Component } from 'react';
import { Link, NavLink } from 'react-router';

import './scss/header-nav.scss';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className="header__nav">
        <ul className="header__nav__links">
          <li><Link to={'/'} exact={true} className="header__nav__link secondary-color" activeStyle={{ color: '#d45500' }}>Início</Link></li>
          <li><Link to={`/beers`} exact={true} className="header__nav__link secondary-color" activeStyle={{ color: '#d45500' }}>Cervejas</Link></li>
          {/* <li><Link className="header__nav__link secondary-color" to={`/about`}>Sobre</Link></li> */}
        </ul>
      </nav>
    );
  }
}