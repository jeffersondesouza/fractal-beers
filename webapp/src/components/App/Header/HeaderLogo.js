import React, { Component } from 'react';

import './scss/header-logo.scss';


export default class HeaderLogo extends Component {
  render() {
    return (
      <figure className="header__logo">
        <img className="img-responsive" src="src/images/logo.png" />
        <figcaption className="header__logo__figcaption">
          <span>Fractal</span>
          <span className="primary-color">Cervas</span>
        </figcaption>
      </figure>
    );
  }
}