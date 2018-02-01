import React, { Component } from 'react';

import './beer.scss';

export default class Beer extends Component {
  render() {
    return (
      <div className="beer">
        <figure className="beer__figure">
          <img className="beer__figure__img img-responsive" className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/I/51XP7y8908L._SL1024_.jpg" />
          <figcaption>
            <p className="beer__name">Marca da Cerveja</p>
            <p className="beer__tagline"><small>tagline da cerveja</small></p>
          </figcaption>
        </figure>
      </div>
    );
  }
}