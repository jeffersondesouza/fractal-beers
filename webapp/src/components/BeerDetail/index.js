import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';

import { BeersService } from '../../services'

import './scss/beer-detail.scss';

import Breadcrumb from './Breadcrumb';

class BeerDetail extends Component {

  constructor() {
    super();
    this.state = { beer: {} }
  }

  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setBeer(this.context.store.getState().beersReducer)
    });
  }

  componentDidMount() {
    this.getBeerByDetails();
  }

  getBeerByDetails() {
    this.context.store.dispatch(BeersService.getBeerById(this.props.params.id));
  }

  setBeer(beer) {
    this.setState({ beer })
  }

  render() {
    return (
      <div className="beer-detail container">
        <Breadcrumb beerName={this.state.beer.name}/>
        <section className="beer-detail__informations">
          <figure className="beer-detail__informations__figure">
            <img className="beer-detail__informations__figure__img" src={this.state.beer.image_url} />
          </figure>
          <div className="beer-detail__informations__description">
            <h2 className="beer-detail__informations__description__title">{this.state.beer.name}</h2>
            <h3 className="beer-detail__informations__description__tagline">{this.state.beer.tagline}</h3>
            <p className="beer-detail__informations__description__text">{this.state.beer.description}</p>
          </div>
        </section>
      </div>
    );
  }
}

BeerDetail.contextTypes = {
  store: PropTypes.object.isRequired
}

export default BeerDetail