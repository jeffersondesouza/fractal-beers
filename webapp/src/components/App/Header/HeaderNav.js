import React, { Component } from 'react';
import { Link, NavLink } from 'react-router';

import './styles/header-nav.scss';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className="header__nav">
        <ul className="header__nav__links">
          <li>
            <Link to={'/'} className="header__nav__link secondary-color" activeStyle={{ color: '#d45500' }}>
              Página Inícial
            </Link>
          </li>
          <li>
            <Link to={`/beers`} className="header__nav__link secondary-color" activeStyle={{ color: '#d45500' }}>
              Cervejas
            </Link>
          </li>
          {/* <li><Link className="header__nav__link secondary-color" to={`/about`}>Sobre</Link></li> */}
        </ul>
      </nav>
    );
  }
}