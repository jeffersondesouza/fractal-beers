import React, { Component } from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderCart from './HeaderCart';

import './styles/header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header container">
        <HeaderLogo />
        <HeaderNav />
        {/* <HeaderCart /> */}
      </header>
    );
  }
}