import React, { Component } from 'react';

import './scss/app.scss';

import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Beers from '../Beers';


export default class extends Component {


  render() {
    return (
      <div id="app">
        <Header />
        <main className="main">
          {/* this.props.children */}
          {/*  */}
          <Home />
          {/* <Beers /> */}
        </main>
        <Footer />
      </div>
    );
  }
}
