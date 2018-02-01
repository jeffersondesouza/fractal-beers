import React, { Component } from 'react';

import './scss/app.scss';

import Header from '../Header';
import Footer from '../Footer';

export default class extends Component {


  render() {
    return (
      <div id="app">
        <Header />
        <main className="main">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
