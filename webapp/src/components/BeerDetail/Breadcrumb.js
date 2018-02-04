import React, { Component } from 'react';

import { Link } from 'react-router';

import './styles/breadcrumb.scss';

export default class Breadcrumb extends Component {
  render() {
    return (
      <nav className="beer-detail__breadcrumb">
        <ul className="beer-detail__breadcrumb__links">
          <li className="beer-detail__breadcrumb__links__link">
            <Link to={'/'}>Inicio /</Link>
          </li>
          <li className="beer-detail__breadcrumb__links__link">
            <Link to={'/beers'}>Cervejas /</Link>
          </li>
          <li className="beer-detail__breadcrumb__links__link">{this.props.beerName}</li>
        </ul>
      </nav>
    );
  }
}