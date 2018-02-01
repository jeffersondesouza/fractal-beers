import React, { Component } from 'react';

import './scss/breadcrumb.scss';

export default class Breadcrumb extends Component {
  render() {
    return (
      <nav className="beer-detail__breadcrumb container">
        <ul className="beer-detail__breadcrumb__links">
          <li className="beer-detail__breadcrumb__links__link">Inicio /</li>
          <li className="beer-detail__breadcrumb__links__link">Loja /</li>
          <li className="beer-detail__breadcrumb__links__link">Sobre</li>
        </ul>
      </nav>
    );
  }
}