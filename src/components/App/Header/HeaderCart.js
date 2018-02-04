import React, { Component } from 'react';

import './scss/header-cart.scss';

export default class HeaderCart extends Component {
  render() {
    return (
      <div className="header__cart">
        <button className="header__cart__btn">0</button>
      </div>
    );
  }
}