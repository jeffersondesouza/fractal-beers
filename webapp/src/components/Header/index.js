import React, { Component } from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderCart from './HeaderCart';

import './scss/header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderLogo />
        <HeaderNav />
        <HeaderCart />
      </header>
    );
  }
}