import React, { Component } from 'react';

import './scss/beer-detail.scss';

import Breadcrumb from './Breadcrumb';

export default class BeerDetail extends Component {
  render() {
    return (
      <div className="beer-detail">
        <Breadcrumb />
        <section className="beer-detail__informations">
          <figure className="beer-detail__informations__figure">
            <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/I/51XP7y8908L._SL1024_.jpg" />
          </figure>
          <div className="beer-detail__informations__description">
            <h2 className="beer-detail__informations__description__title">Marca da Cerveja</h2>
            <h3 className="beer-detail__informations__description__tagline">tagline</h3>
            <p className="beer-detail__informations__description__text">Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
          </div>
        </section>
      </div>
    );
  }
}