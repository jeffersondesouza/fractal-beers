import React, { Component } from 'react';

import './scss/footer.scss';

export default class Footer extends Component {
  render(){
    return(
      <footer className="footer">
          <p className="footer__author">Jéfferson Desouza</p>
          <ul className="footer__contacts">
              <li className="footer__contact">T</li>
              <li className="footer__contact">G</li>
              <li className="footer__contact">L</li>
          </ul>
        </footer>
    );
  }
}