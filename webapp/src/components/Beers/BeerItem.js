import React, { Component } from 'react';
import { Link } from 'react-router';

import './scss/beer-item.scss';

export default class Beer extends Component {
  render() {
    return (
      <div className="beer">
        <Link to={`/beers/${this.props.beer.id}`}>
          <figure className="beer__figure">
            <img src={this.props.beer.image_url} alt={`Garrafa de cerveja da marca  ${this.props.beer.name}`} className="beer__figure__img" />
            <figcaption>
              <p className="beer__name">{this.props.beer.name}</p>
              <p className="beer__tagline"><small>{this.props.beer.tagline}</small></p>
            </figcaption>
          </figure>
        </Link>
      </div>
    );
  }
}