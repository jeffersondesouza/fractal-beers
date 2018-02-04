import React, { Component } from 'react';

import './scss/home.scss';

import HomeBotleBanner from './HomeBotleBanner';
import HomePresentation from './HomePresentation';

export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <HomeBotleBanner />
        <HomePresentation />
      </div>
    );
  }
}