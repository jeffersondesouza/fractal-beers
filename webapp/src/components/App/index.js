import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './scss/app.scss';

import Header from './Header';
import Footer from './Footer';

const contextTypes = {
  store: PropTypes.object.isRequired
}

class App extends Component {

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

App.contextTypes = contextTypes;

export default App;