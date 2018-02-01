import React, { Component } from 'react';

import './app.scss';

import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';


export default class extends Component {


  render() {
    return (
      <div id="app">
        <Header />
        <main className="main">
          {/* this.props.children */}
          <Home />
        </main>
        <Footer />
      </div>
    );
  }
}
