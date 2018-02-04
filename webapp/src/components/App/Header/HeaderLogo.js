import React, { Component } from 'react';

import './styles/header-logo.scss';


export default class HeaderLogo extends Component {
  render() {
    return (
      <figure className="header__logo">
        <img className="img-responsive" src="http://res.cloudinary.com/dlbdfgear/image/upload/v1517717981/logo_dk4gvi.png" />
        <figcaption className="header__logo__figcaption">
          <span>Fractal</span>
          <span className="primary-color">Cervas</span>
        </figcaption>
      </figure>
    );
  }
}