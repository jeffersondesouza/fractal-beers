import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './scss/app.scss';

import Header from './Header';
import Footer from './Footer';

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



App.contextTypes = {
  store: PropTypes.object.isRequired
}

export default App;